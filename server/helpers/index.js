const bcrypt = require('bcryptjs');
const { Types } = require('mongoose');
const jwt = require('jsonwebtoken');

const config = require('../config/');
const { UserModel } = require('../models');
const { ClientError, DbError, ServerError } = require('../errors');

const authentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(new ClientError({ message: 'notAuthenticated', status: 401 }));
  }
};

const setFrontendAuthCookieMW = (req, res, next) => {
  const frontendCookieName = config.get('FRONTEND_AUTH_SID');
  const JWTSecret = config.get('JWT_SECRET');
  let token;
  if (req.isAuthenticated()) {
    const user = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
    };
    // console.log('user', user.provider);
    token = createJWT('', {user}, 7200, JWTSecret); // 2 hours
  } else {
    // console.log('not user', null);
    token = createJWT('', { user: null }, 7200, JWTSecret); // 2 hours
  }
  res.cookie(
    frontendCookieName,
    token,
    {
      secure: true,
      httpOnly: false,
      maxAge: 7200000, // 2 hours
      sameSite: 'Lax',
    },
  );
  next();
};


const createJWT = (prefix, sub, expire, secret) => {
  const date = Math.floor(Date.now() / 1000); // in seconds
  return (
    prefix +
    jwt.sign(
      {
        ...sub,
        iat: date, // seconds
        exp: date + expire, // seconds
      },
      secret,
    )
  );
};


const createUserHelper = (user) => {
  return new Promise((resolve, reject) => {
    isLoginUniqueHelper(user.login)
      .then(() => bcrypt.hash(user.password, 10))
      .then((hash) => {
        user.password = hash;
        user.createdAt = Date.now();
        console.log('user2', user);
        const userModel = new UserModel(user);
        return userModel.save();
      })
      .then((savedUser) => resolve(savedUser))
      .catch((err) => reject(err));
  });
};

const isLoginUniqueHelper = (login) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ login })
      .then((user) => {
        if (user) {
          reject(new ClientError({ message: 'Цей логін вже використовується', status: 422, code: 'uniqueConflict' }));
        }
        resolve();
      })
      .catch((err) => reject(err));
  });
};

const isLoginExists = (login) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ login })
      .then((user) => {
        if (user) {
          resolve(user);
        }
        reject(new ClientError({ message: 'Користувача не знайдено', status: 401 }));
      })
      .catch((err) => reject(err));
  });
};

const isPasswordMatched = (passwordCandidate, passwordFromDb) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(passwordCandidate, passwordFromDb)
      .then((passwordMatched) => {
        if (passwordMatched) {
          resolve();
        } else {
          reject(new ClientError({ message: 'Невірний пароль', status: 401, code: 'wrongCredentials' }));
        }
      })
      .catch((err) => reject(err));
  });
};

// check result of updeteOne, ok === 1 and match docs q-ty === 1
const checkDbResOkOne = (result) => {
  return new Promise((resolve, reject) => {
    if (result.ok !== 1 || result.n !== 1) {
      reject(new DbError({ message: 'result is not ok' }));
    }
    resolve(result);
  });
};

const checkDbResNModified = (result) => {
  return new Promise((resolve, reject) => {
    if (result.nModified < 1) {
      reject(new DbError({ message: 'nModified less than 1' }));
    }
    resolve(result);
  });
};

const checkDbResDeleteCount = (result) => {
  return new Promise((resolve, reject) => {
    if (result.deletedCount < 1) {
      reject(new DbError({ message: 'deleteCount less than 1' }));
    }
    resolve(result);
  });
};

// if {upsert: false} and added new document, db returns null
const checkDbResNotNull = (result) => {
  return new Promise((resolve, reject) => {
    if (result === null) {
      reject(new DbError({ message: 'result is null' }));
    }
    resolve(result);
  });
};

module.exports = {
  authentication,
  setFrontendAuthCookieMW,
  createUserHelper,
  isLoginUniqueHelper,
  isLoginExists,
  isPasswordMatched,
  checkDbResOkOne,
  checkDbResDeleteCount,
  checkDbResNModified,
  checkDbResNotNull,
  createJWT,
};
