const { createUserHelper } = require('../helpers');
const { UserModel } = require('../models');
const uuidv4 = require('uuid').v4;
const config = require('../config/');

const nullResponse = (req, res, next) => {
  res.status(200).json(null);
};

const signupAnomymousUser = (req, res, next) => {
  const {name} = req.body;
  const anomymousUser = {
    login: uuidv4(),
    password: null,
    createdAt: Date.now(),
    name,
    role: 'guest',
  };
  req.body = anomymousUser;
  const userModel = new UserModel(anomymousUser);
  userModel.save()
    .then((savedUser) => next())
    .catch((err) => next(err));
};

const signup = (req, res, next) => {
  const user = req.body;
  return createUserHelper(user)
    .then((savedUser) => {
      return next();
      // const userModel = new UserModel(savedUser);
      // return userModel.save();
    })
    // .then((_) => next())
    .catch((err) => next(err));
};

const logout = (req, res, next) => {
  req.logout();
  next();
};

module.exports = {
  signup,
  signupAnomymousUser,
  logout,
  nullResponse,
};
