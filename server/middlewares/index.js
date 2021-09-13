const config = require('../config/');
const { ClientError } = require('../errors');
const helpers = require('../helpers');

const authentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(new ClientError({ message: 'notAuthenticated', status: 401 }));
  }
};

const authorization = (restrictedRole) => {
  return (req, res, next) => {
    const userRole = req.user._doc.role;
    console.log('usersRole', userRole);
    const permissions = config.get('permissions');
    if (userRole in permissions) {
      if (permissions[userRole].indexOf(restrictedRole) >= 0) {
        return next();
      } else {
        return next(new ClientError({ message: 'notAuthorized', status: 401 }));
      }
    } else {
      return next(new ClientError({ message: 'notAuthorized', status: 401 }));
    }
  };
};

const setFrontendAuthCookie = (req, res, next) => {
  const frontendCookieName = config.get('FRONTEND_AUTH_SID');
  const JWTSecret = config.get('JWT_SECRET');
  let token;
  if (req.isAuthenticated()) {
    const user = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
      name: req.user._doc.name,
      role: req.user._doc.role,
    };
    // console.log('user', user.provider);
    token = helpers.createJWT('', { user }, 7200, JWTSecret); // 2 hours
  } else {
    // console.log('not user', null);
    token = helpers.createJWT('', { user: null }, 7200, JWTSecret); // 2 hours
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

module.exports = {
  authentication,
  authorization,
  setFrontendAuthCookie,
};
