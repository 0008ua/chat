const log = require('../config/winston')(module);
const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./');
const { mongooseClientP } = require('./mongoose');
const sessionStore = MongoStore.create({
  clientPromise: mongooseClientP,
});

const sessionCookie = session({
  key: config.get('SESSION_SID'),
  secret: config.get('SESSION_SECRET'),
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true, // not reachable for js (XSS)
    // secure: config.get('NODE_ENV') === 'production',
    sameSite: 'Lax',
    secure: true,
    maxAge: null, // never expires, but will be deleted after closing browser
  },
  store: sessionStore,
});

module.exports = {
  sessionStore,
  sessionCookie,
};
