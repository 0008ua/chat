const { createUserHelper } = require('../helpers');
const { UserModel } = require('../models');

const login = (req, res, next) => {
  const user = req.body;
  res.status(200).json('login ok ' + user.login);
};

const nullResponse = (req, res, next) => {
  res.status(200).json(null);
};

const signup = (req, res, next) => {
  const user = req.body;
  console.log('user', user);
  return createUserHelper(user)
    .then((savedUser) => {
      const userModel = new UserModel(savedUser);
      return userModel.save();
    })
    // .then((result) => checkDbResOkOne(result))
    .then((_) => next())
    .catch((err) => next(err));
};

const logout = (req, res, next) => {
  req.logout();
  next();
};

module.exports = {
  login,
  signup,
  logout,
  nullResponse,
};
