const express = require('express');
const router = express.Router();
const passport = require('passport');
const { userController } = require('../controllers');
const { setFrontendAuthCookieMW } = require('../helpers');

router.post('/login',
  passport.authenticate('local', { session: true }),
  setFrontendAuthCookieMW,
  userController.login,
);

router.post('/signup',
  userController.signup,
  passport.authenticate('localWithoutPassword', { session: true }),
  setFrontendAuthCookieMW,
  userController.login,
);

router.get('/logout',
  userController.logout,
  setFrontendAuthCookieMW,
  userController.nullResponse,
);

router.post('/protected', (req, res, next) => {
  return res.status(200).json('Accessed to protected route');
});

module.exports = router;
