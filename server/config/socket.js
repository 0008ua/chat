const socketio = require('socket.io');
const passport = require('passport');
const { fromEvent, combineLatest, of, forkJoin } = require('rxjs');
const { first, takeUntil, tap, mergeMap, map, flatMap, combineAll } = require('rxjs/operators');
const { sessionCookie } = require('./session');
const uuidv4 = require('uuid').v4;
const { MsgModel, RoomModel } = require('../models');
const { mongoose } = require('../config/mongoose');
const { Types } = mongoose;
const { ObjectId } = Types;

class Socket {
  activeSockets = [];
  constructor(socketio, sessionCookie, passport) {
    this.socketio = socketio;
    this.sessionCookie = sessionCookie;
    this.passport = passport;
  }

  init(server) {
    this.io = this.socketio(server);
    this.io.use(this.socketMW(this.sessionCookie));
    this.io.use(this.socketMW(this.passport.initialize()));
    this.io.use(this.socketMW(this.passport.session()));
    this.io.use(
      (socket, next) => {
        if (socket.request.user.role === 'guest' || socket.request.user.role === 'user') {
          next();
        } else {
          next(new Error('unauthorized' + JSON.stringify(socket.request.user)));
        }
      },
    );

    this.io.on('connection', (socket) => {
      const user = socket.request.user;
      this.activeSockets.push({
        socket_id: socket.id,
        user_id: user._id,
        userName: user.name,
        userLogin: user.login,
        userRole: user.role,
      });
      socket.emit('activeSockets', this.activeSockets);
      socket.broadcast.emit('activeSockets', this.activeSockets);

      RoomModel.getUserRooms(user._id)
        .then((rooms) => {
          rooms.forEach((room) => socket.join(room._id + ''));
        });

      // const onSocketDisconnect$ = this.eventToObservable.call(socket, 'disconnect').pipe(first());
      // const onSocket$ = (socket, event) => this.eventToObservable.call(socket, event)
      //   .pipe(takeUntil(onSocketDisconnect$));

      socket.on('disconnect', (message) => {
        console.log('disconnected', message);
        this.activeSockets = this.activeSockets.filter((user) => user.socket_id + '' !== socket.id + '');
        socket.broadcast.emit('activeSockets', this.activeSockets);
      });

      socket.on('joinRoom', ({ requestedUser_id }, cb) => {
        console.log('requestedUser_id', requestedUser_id)
        RoomModel.checkRoomExists([user._id, requestedUser_id])
          .then((rooms) => {
            console.log('check room exist', rooms);
            if (!rooms.length) {
              const newRoom = new RoomModel({
                membersInfo: [
                  { member_id: new ObjectId(user._id), readedUntil: new Date() },
                  { member_id: new ObjectId(requestedUser_id), readedUntil: new Date() },
                ],
                roomType: 'private',
              });
              return newRoom.save();
            }
            return RoomModel.udateReadedUntil(rooms[0]._id, user._id);
          })
          .catch((err) => console.log('err room save', err))
          .then((rooms) => {
            console.log('rooms', rooms);
            const room = Array.isArray(rooms) ? rooms[0] : rooms;
            socket.join(room._id + '');
            cb(room._id);
            socket.emit('joinedRoom', room._id);
            this.joinRequestedUser({ room_id: room._id, requestedUser_id });
          });
      });

      socket.on('leaveRoom', ({ room }) => socket.join(room));

      socket.on('msg', (msg) =>
        // save to db
        this.composeMsg({ socket, room_id: msg.room_id, text: msg.text, author_id: user._id })
          .catch((err) => socket.emit('socketError', err))
      );
    });
  }

  socketMW(middleware) {
    return (socket, next) => middleware(socket.request, {}, next);
  }

  // eventToObservable(event) {
  //   return fromEvent(this, event);
  // }

  composeMsg({ socket, room_id, text, author_id }) {
    return MsgModel.createMsg({ text, author_id, room_id })
      .then((msg) => {
        socket.emit('msg', msg);
        socket.to(room_id + '').emit('msg', msg);
        return msg;
      });
  }

  joinRequestedUser({ room_id, requestedUser_id }) {
    this.activeSockets.filter((user) => {
      return user.user_id + '' === requestedUser_id + '';
    }) // all sockets id of connected user
      .map((connectedUser) => {
        return this.io.sockets.sockets.get(connectedUser.socket_id);
      }) // fetch every socket object by it's id
      .map((socket) => {
        socket.join(room_id + ''); // join fetched sockets to the room
        socket.emit('joinedRoom', room_id);
      });
  }
}

module.exports.socket = new Socket(socketio, sessionCookie, passport);
