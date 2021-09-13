const express = require('express');
const router = express.Router();
const passport = require('passport');
const { userController } = require('../controllers');
const { setFrontendAuthCookie, authorization } = require('../middlewares');

const showBodyMW = (req, res, next) => {
  console.log('req', req.body);
  next();
};

router.post('/login',
  passport.authenticate('local', { session: true }),
  authorization('user'),
  setFrontendAuthCookie,
  userController.nullResponse,
);

router.post('/loginAnonymous',
  userController.signupAnomymousUser,
  // showBodyMW,
  passport.authenticate('loginAnonymous', { session: true }),
  setFrontendAuthCookie,
  userController.nullResponse,
);

router.post('/signup',
  userController.signup,
  passport.authenticate('localWithoutPassword', { session: true }),
  authorization('user'),
  setFrontendAuthCookie,
  userController.nullResponse,
);

router.get('/logout',
  userController.logout,
  setFrontendAuthCookie,
  userController.nullResponse,
);

module.exports = router;
