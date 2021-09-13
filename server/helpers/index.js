const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models');
const { ClientError, DbError } = require('../errors');

// const extractAnonymousName = (login) => {
//   const anonymousNamePrefix = config.get('anonymousNamePrefix');
//   const nameStartPosition = anonymousNamePrefix.length;
//   const nameLimitter = config.get('anonymousNameLimitter');
//   const isAnonymousName = login.indexOf(anonymousNamePrefix) === 0;
//   const nameLimitterPosition = login.indexOf(nameLimitter);
//   const isNameLimitter = nameLimitterPosition > nameStartPosition;

//   if (isAnonymousName && isNameLimitter) {
//     return login.slice(nameStartPosition, nameLimitterPosition);
//   }
//   return null;
// };

// const blockAnonymous = (login) => {
//   return new Promise((resolve, reject) => {
//     const name = extractAnonymousName(login);
//     if (name) {
//       return reject(new ClientError({ message: 'Access denied', status: 401, code: 'wrongCredentials' }));
//     }
//     return resolve();
//   });
// };


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
        user.role = 'user';
        return user;
        const userModel = new UserModel(user);
        return userModel.save();
      })
      // .then((user) => UserModel.createUser(user))
      .then((savedUser) => {
        console.log('savedUser', savedUser);
        resolve(savedUser);
      })
      .catch((err) => reject(err));
  });
};

const isLoginUniqueHelper = (login) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ login })
      .then((user) => {
        if (user) {
          return reject(new ClientError({ message: 'Цей логін вже використовується', status: 422, code: 'uniqueConflict' }));
        }
        return resolve();
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
