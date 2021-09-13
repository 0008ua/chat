const socketio = require('socket.io');
const passport = require('passport');
const { fromEvent } = require('rxjs');
const { first, takeUntil } = require('rxjs/operators');
const { sessionCookie } = require('./session');
const uuidv4 = require('uuid').v4;
const { MsgModel, RoomModel } = require('../models');

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


    this.eventToObservable.call(this.io, 'connection')
      .subscribe((socket) => {
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

        const onSocketDisconnect$ = this.eventToObservable.call(socket, 'disconnect').pipe(first());
        const onSocket$ = (socket, event) => this.eventToObservable.call(socket, event).pipe(takeUntil(onSocketDisconnect$));

        onSocketDisconnect$.subscribe((message) => {
          console.log('disconnected', message);
          this.activeSockets = this.activeSockets.filter((user) => user.socket_id + '' !== socket.id + '');
          socket.broadcast.emit('activeSockets', this.activeSockets);
        });

        onSocket$(socket, 'joinRoom').subscribe(({ requestedUser_id }) => {
          // check room exists, if not create
          RoomModel.checkRoomExists([user._id, requestedUser_id])
            .then((room) => {
              if (!room.length) {
                return new RoomModel({
                  members: [user._id, requestedUser_id],
                  roomType: 'private',
                }).save();
              }
              return room;
            })
            .then((rooms) => {
              const room = Array.isArray(rooms) ? rooms[0] : rooms;

              socket.join(room._id + '');
              socket.emit('joinedRoom', room._id);
              this.joinRequestedUser({room_id: room._id, requestedUser_id});
              // return this.composeMsg({ socket, room_id: room._id, text: 'You have started new chat', author_id: user._id});
            })
            .catch((err) => socket.emit('socketError', err));
        });

        onSocket$(socket, 'leaveRoom').subscribe(({ room }) => {
          socket.join(room);
        });

        onSocket$(socket, 'msg').subscribe((msg) => {
          // save to db
          this.composeMsg({ socket, room_id: msg.room_id, text: msg.text, author_id: user._id })
            .catch((err) => socket.emit('socketError', err));
        });
      });
  }

  socketMW(middleware) {
    return (socket, next) => middleware(socket.request, {}, next);
  }

  eventToObservable(socket) {
    return fromEvent(this, socket);
  }

  composeMsg({socket, room_id, text, author_id}) {
    return MsgModel.createMsg({ text, author_id, room_id })
      .then((msg) => {
        console.log('msg', msg);
        console.log('socket.rooms', socket.rooms);
        socket.emit('msg', msg);
        socket.to(room_id + '').emit('msg', msg);
        // io.in()
        return msg;
      });
  }

  joinRequestedUser({room_id, requestedUser_id}) {
    this.activeSockets.filter((user) => {
      return user.user_id + '' === requestedUser_id + '';
    }) // all sockets id of connected user
      .map((connectedUser) => {
        return this.io.sockets.sockets.get(connectedUser.socket_id);
      }) // fetch every socket object by it's id
      .map((socket) => {
        socket.join(room_id + ''); // join fetched sockets to the room
        socket.emit('joinedRoom', room_id);
        // return this.composeMsg({ socket, room_id, text: 'You have been invited to chat', author_id: requestedUser_id });
      });
  }

  // joinRequestedUser(room, requestedUser) {
  //   io.fetchSockets().then((sockets) => {
  //     sockets
  //       .filter((socket) => socket.request.user._id + '' === requestedUser + '')
  //       .map((socket) => socket.join(room));
  //   });
  // }
}

module.exports.socket = new Socket(socketio, sessionCookie, passport);

// module.exports.io = function(server) {
//   const io = socketio(server);

//   // io.toObs = function obs(...arg) {
//   //   return toObs(fromEvent(arg));
//   // };

//   // console.debug('io', io.toObs)


//   // class SocketController {
//   //   constructor(io) {
//   //     this.io = io;
//   //     const SOCKET_EVENT = ['connection', 'message', 'delivered'];
//   //     // create socket namespaces and event listeners for every namespace
//   //     const NSP = ['user', 'guest', 'admin'];
//   //     for (const nsp of NSP) {
//   //       this[nsp + 'Nsp'] = this.io.of('/' + nsp);
//   //       // for (const socketEvent of SOCKET_EVENT) {
//   //       //   this['on' + this.capitalize(nsp + 'Nsp') + this.capitalize(socketEvent)] =
//   //       //     this.receiveSocketEventFactory(socketEvent, nsp);
//   //       // }
//   //     }

//   //     for (const nsp of NSP) {
//   //       this[nsp + 'On'] = (socketEvent) => fromEvent(this[nsp + 'Nsp'], socketEvent);
//   //       // for (const socketEvent of SOCKET_EVENT) {
//   //       //   this['on' + this.capitalize(nsp + 'Nsp') + this.capitalize(socketEvent)] =
//   //       //     this.receiveSocketEventFactory(socketEvent, nsp);
//   //       // }
//   //     }
//   //     this.ioOn = (socketEvent) => fromEvent(this.io, socketEvent);
//   //     // create root socket listeners
//   //     // for (const socketEvent of SOCKET_EVENT) {
//   //     //   this['on' + this.capitalize(socketEvent)] =
//   //     //     this.receiveSocketEventFactory(socketEvent);
//   //     // }
//   //     // console.log('this', this)
//   //   }

//   //   connection() {
//   //     io.on('connection', (socket) => {
//   //       console.log('io Connected - id ', socket.id);
//   //       console.log('io.request.sessionID', socket.request.sessionID);
//   //     });
//   //   }

//   //   sendSocketEvent(socketEvent, socketData, nsp) {
//   //     if (nsp) {
//   //       this.socketNsp(nsp).emit(socketEvent, socketData);
//   //       return;
//   //     }
//   //     this.socket.emit(socketEvent, socketData);
//   //   }

//   //   socketNsp(nsp) {
//   //     return this[nsp + 'Nsp'];
//   //   }

//   //   capitalize(string) {
//   //     return string.charAt(0).toUpperCase() + string.slice(1);
//   //   }

//   //   receiveSocketEventFactory(socketEvent, nsp) {
//   //     return fromEvent(this.io, socketEvent);
//   //   }

//   //   on(socketEvent, nsp) {
//   //     if (nsp) {
//   //       return fromEvent(this.io, socketEvent);
//   //     }
//   //     return fromEvent(this.io, socketEvent);
//   //   }
//   //   // receiveSocketEventFactory(socketEvent, nsp) {
//   //   //   if (nsp) {
//   //   //     return this.socketNsp(nsp).on(socketEvent, cb).pipe(
//   //   //       map((data) => data));
//   //   //   }
//   //   //   return this.socket.fromEvent(socketEvent).pipe(
//   //   //     map((data) => data));
//   //   // }

//   //   socketMW(middleware) {
//   //     return (socket, next) => middleware(socket.request, {}, next);
//   //   }
//   // }

//   // const sc = new SocketController(io);


//   // sc.guestOn('connection')
//   //   .subscribe((socket) => {
//   //     socket.toObs('message')
//   //       .subscribe((event) => console.log('event', event));

//   //     console.log('sock Connected - id ', socket.id);
//   //     console.log('sock.request.sessionID', socket.request.sessionID);
//   //     const user = socket.request.user;
//   //     socket.emit('connectionRequest', '{name: user.name, _id: user._id}');
//   //   });


//   // const guestNsp = io.of('/guestNsp');
//   // const userNsp = io.of('/userNsp');

//   const socketMW = (middleware) => (socket, next) => middleware(socket.request, {}, next);
//   io.use(socketMW(sessionCookie));
//   io.use(socketMW(passport.initialize()));
//   io.use(socketMW(passport.session()));
//   io.use(
//     (socket, next) => {
//       if (socket.request.user.role === 'guest' || socket.request.user.role === 'user') {
//         next();
//       } else {
//         next(new Error('unauthorized' + JSON.stringify(socket.request.user)));
//       }
//     },
//   );

//   // guestNsp.use(socketMW(sessionCookie));
//   // guestNsp.use(socketMW(passport.initialize()));
//   // guestNsp.use(socketMW(passport.session()));
//   // guestNsp.use(
//   //   (socket, next) => {
//   //     if (socket.request.user.role === 'guest' && socket.request.user.role === 'user') {
//   //       console.log('socket - guest, session id', socket.request.sessionID);
//   //       next();
//   //     } else {
//   //       next(new Error('unauthorized guest -' + JSON.stringify(socket.request.user)));
//   //     }
//   //   },
//   // );

//   // userNsp.use(socketMW(sessionCookie));
//   // userNsp.use(socketMW(passport.initialize()));
//   // userNsp.use(socketMW(passport.session()));
//   // userNsp.use(
//   //   (socket, next) => {
//   //     if (socket.request.user.role==='user') {
//   //       console.log('socket - user');

//   //       next();
//   //     } else {
//   //       next(new Error('unauthorized user -' + JSON.stringify(socket.request.user)));
//   //     }
//   //   },
//   // );
//   // io.on('connection', (socket) => {
//   //   console.log('io Connected - id ', socket.id);
//   //   console.log('io.request.sessionID', socket.request.sessionID);
//   // });

//   const eventToObservable = function(socket) {
//     return fromEvent(this, socket);
//   };

//   let requestForChat = [];
//   eventToObservable.call(io, 'connection')
//     // .pipe(first())
//     .subscribe((socket) => {
//       const user = socket.request.user;

//       if (user.role ==='user') {
//         socket.join('users');
//       }

//       if (user.role === 'guest') {
//         let userMatched = false;
//         console.log('requestForChat1', requestForChat);

//         requestForChat = requestForChat.map((item) => {
//           if (item._id + '' === user._id + '') {
//             userMatched = true;
//             return { socket_id: socket.id, name: user.name, _id: user._id };
//           }
//           return item;
//         });
//         if (!userMatched) {
//           requestForChat.push({ socket_id: socket.id, name: user.name, _id: user._id });
//         }
//         console.log('requestForChat2', requestForChat);

//         socket.to('users').emit('requestForChat', { requestForChat });
//       }


//       // io.fetchSockets().then((sockets) => {
//       //   sockets.forEach((socket) => console.log('sock no room ', socket.request.user.role));
//       // });

//       // io.in('users').fetchSockets().then((sockets) => {
//       //   sockets.forEach((socket) => console.log('sock users ', socket.request.user.role));
//       // });

//       io.emit('message', { text: `User ${user.name} connected` });

//       const onSocketDisconnect$ = eventToObservable.call(socket, 'disconnect').pipe(first());
//       const onSocket$ = (socket, event) => eventToObservable.call(socket, event).pipe(takeUntil(onSocketDisconnect$));

//       onSocketDisconnect$.subscribe((message) => {
//         io.emit('message', { text: `User ${user.name} disconnected` });
//         requestForChat = requestForChat.filter((item) => {
//           return item.socket_id + '' !== socket.id + '';
//         });
//         console.log('disconect');
//         socket.to('users').emit('requestForChat', { requestForChat });
//       });

//       onSocket$(socket, 'message').subscribe((data) => {
//         // console.log('message', message);
//         // socket.emit('message', { text: 'emit ' + data.text });
//         socket.broadcast.emit('message', { text: 'broadcast ' + data.text });
//       });

//       onSocket$(socket, 'initRoom').subscribe((data) => {
//         if (user.role !== 'user') {
//           return;
//         }
//         socket.join(data.room);
//         socket.to(data.room).emit('message', { text: 'you connected to ' + data.room });

//         io.fetchSockets().then((sockets) => {
//           sockets.forEach((socket) =>{
//             if (socket.request.user._id + '' === data.guest + '') {
//               socket.to(data.room).broadcast.emit('message', { text: 'connected to ' + data.room });
//               socket.to(data.room).emit('message', { text: 'guest onnected to ' + data.room });
//             }
//           },
//           );
//         });
//         // console.log('message', message);
//         // socket.emit('message', { text: 'emit ' + data.text });
//       });
//     });

//   // const requestForChat = [];
//   // eventToObservable.call(guestNsp, 'connection')
//   //   // .pipe(first())
//   //   .subscribe((socket) => {
//   //     const user = socket.request.user;
//   //     if (user.role ==='guest') {
//   //       requestForChat.push({socket_id: socket.id, name: user.name});
//   //     }
//   //     if (user.role === 'user') {
//   //       socket.emit('requestForChat', requestForChat);
//   //     }
//   //     userNsp.emit('requestForChat', requestForChat);

//   //     console.log('guestNsp Connected socket.id ', socket.id);
//   //     console.log('guestNsp.request.user', socket.request.user);
//   //     socket.emit('connected', { msg: 'connected' });

//   //     const onSocketDisconnect$ = eventToObservable.call(socket, 'disconnect').pipe(first());
//   //     const onSocket$ = (socket, event) => eventToObservable.call(socket, event).pipe(takeUntil(onSocketDisconnect$));

//   //     onSocketDisconnect$.subscribe((message) => console.log('disconnect', message));
//   //     onSocket$(socket, 'message').subscribe((data) => {
//   //       // console.log('message', message);
//   //       socket.emit('message', { msg: 'emit ' + data.text });
//   //       socket.broadcast.emit('message', { msg: 'broadcast ' + data.text });
//   //     });
//   //   });

//   // eventToObservable.call(userNsp, 'connection')
//   //   // .pipe(first())
//   //   .subscribe((socket) => {
//   //     console.log('userNsp Connected socket.id ', socket.id);
//   //     console.log('userNsp.request.user', socket.request.user);
//   //     socket.emit('connected', { msg: 'connected' });

//   //     const onSocketDisconnect$ = eventToObservable.call(socket, 'disconnect').pipe(first());
//   //     const onSocket$ = (socket, event) => eventToObservable.call(socket, event).pipe(takeUntil(onSocketDisconnect$));

//   //     onSocketDisconnect$.subscribe((message) => console.log('disconnect', message));
//   //     onSocket$(socket, 'message').subscribe((message) => {
//   //       // console.log('message', message);
//   //       socket.emit('message', { msg: 'emit ' + data.text });
//   //       socket.broadcast.emit('message', { msg: 'broadcast ' + data.text });
//   //       io.emit('message', { msg: 'io ' + data.text });
//   //     });
//   //   });
//   // guestNsp.on('connection', (socket) => {
//   //   console.log('guestNsp Connected - id ', socket.id);
//   //   console.log('guestNsp.request.sessionID', socket.request.sessionID);
//   //   const user = socket.request.user;

//   //   socket.on('disconnect', (msg) => {
//   //     console.log('guestNsp is connected', socket.connected);
//   //     console.log('guestNsp - disconnect', msg);
//   //   });

//   //   // dbHelper.insertMessage({ text: `Welcome ${user.name}!` })
//   //   //   .then((message) => {
//   //   //     socket.emit('message', message);
//   //   //   })
//   //   //   .catch((err) => console.log('err', err));


//   //   socket.on('message', (msg) => {
//   //     // socket.emit('message', msg);
//   //     socket.emit('patchMessage', { delivered: true, author: user._id, createdAt: Date.now() });
//   //     // socket.emit('delivered', { _id: msg._id });
//   //   });
//   //   // console.log('socket.request', socket.request.user);
//   // });

//   // userNsp.on('connection', (socket) => {
//   //   console.log('userNsp Connected - id ', socket.id);
//   //   console.log('userNsp.request.sessionID', socket.request.sessionID);
//   //   const user = socket.request.user;

//   //   socket.on('disconnect', (msg) => {
//   //     console.log('userNsp is connected', socket.connected);
//   //     console.log('userNsp - disconnect', msg);
//   //   });
//   //   // createMessage = ({author, }) => {
//   //   //   return {
//   //   //     author:
//   //   //   }
//   //   // }

//   //   dbHelper.insertMessage({ text: `Welcome ${user.name}!` })
//   //     .then((message) => {
//   //       socket.emit('message', message);
//   //     })
//   //     .catch((err) => console.log('err', err));


//   //   socket.on('message', (msg) => {
//   //     // socket.emit('message', msg);
//   //     socket.emit('patchMessage', { delivered: true, author: user._id, createdAt: Date.now() });
//   //     // socket.emit('delivered', { _id: msg._id });
//   //   });
//   //   // console.log('socket.request', socket.request.user);
//   // });


//   return io;
// };
