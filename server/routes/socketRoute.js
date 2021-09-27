const express = require('express');
const router = express.Router();
const passport = require('passport');
const { RoomModel, MsgModel } = require('../models');
const { mongoose } = require('../config/mongoose');
const { Types } = mongoose;
const { ObjectId } = Types;

router.get('/get-user-rooms', (req, res, next) => {
  // console.log('req', req.isAuthenticated());
  // console.log('req.user', req.user);
  const user = req.user;
  return RoomModel.getUserRooms(user._id)
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => next(err));
});

router.get('/get-active-contact-msgs', (req, res, next) => {
  const user_id = new ObjectId(req.user._id);
  const anotherUser_id = new ObjectId(req.query.anotherUser_id);
  const room_id = new ObjectId(req.query.room_id);
  return MsgModel.getMsgs({'$or': [{author_id: user_id}, {author_id: anotherUser_id}], room_id})
    .then((msgs) => res.status(200).json(msgs))
    .catch((err) => next(err));
});

router.get('/get-unreaded-messages-qty', (req, res, next) => {
  const user_id = new ObjectId(req.user._id);
  const room_id = new ObjectId(req.query.room_id);
  res.status(200).json(5);
  // return MsgModel.getMsgs({ author_id: user_id, room_id })
  //   .then((msgs) => res.status(200).json(msgs))
  //   .catch((err) => next(err));
});


module.exports = router;
