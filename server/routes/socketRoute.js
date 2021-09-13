const express = require('express');
const router = express.Router();
const passport = require('passport');
const { RoomModel, MsgModel } = require('../models');

router.get('/get-user-rooms', (req, res, next) => {
  // console.log('req', req.isAuthenticated());
  // console.log('req.user', req.user);
  const user = req.user;
  return RoomModel.getUserRooms(user._id)
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => next(err));
});

router.get('/get-active-contact-msgs', (req, res, next) => {
  const user = req.user;
  const anotherUser_id = req.query.anotherUser_id;
  const room_id = req.query.room_id;
  return MsgModel.getMsgs({'$or': [{author_id: user._id}, {author_id: anotherUser_id}], room_id})
    .then((msgs) => res.status(200).json(msgs))
    .catch((err) => next(err));
});


module.exports = router;
