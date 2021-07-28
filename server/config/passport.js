const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { isPasswordMatched, isLoginExists } = require('../helpers');
const { UserModel } = require('../models');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  UserModel.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local', new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  passReqToCallback: true,
},
(req, login, password, done) => {
  const userCandidate = {
    login,
    password,
  };
  let userFromDb;
  isLoginExists(userCandidate.login)
    .then((user) => {
      userFromDb = user;
      return isPasswordMatched(userCandidate.password, userFromDb._doc.password);
    })
    .then(() => done(null, userFromDb))
    .catch((err) => done(err, false));
},
));

passport.use('localWithoutPassword', new LocalStrategy(
  {
    usernameField: 'login',
    passwordField: 'password',

  },
  (login, password, done) => {
    isLoginExists(login)
      .then((userFromDb) => {
        done(null, userFromDb);
      })
      .catch((err) => done(err, false));
  },
));
