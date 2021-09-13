const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
// const logger = require('morgan');
const { ClientError, errorHandler } = require('./server/errors');
const { setFrontendAuthCookie } = require('./server/middlewares');

const { router } = require('./server/routes');
const userRouter = require('./server/routes/userRoute');
const socketRouter = require('./server/routes/socketRoute');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const { sessionCookie } = require('./server/config/session');
app.use(sessionCookie);

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport');
// app.use(passport.authenticate(['local', 'anonymous'], { session: true }),
//   // function (req, res) {
//   //   if (req.user) {
//   //     res.json({ username: req.user.username, email: req.user.email });
//   //   } else {
//   //     res.json({ anonymous: true });
//   //   }
//   // }
//   );

// app.use(passport.authenticate(['local', 'anonymId'], { session: false }),
//   // function (req, res) {
//   //   if (req.user) {
//   //     res.json({ username: req.user.username, email: req.user.email });
//   //   } else {
//   //     res.json({ anonymous: true });
//   //   }
//   // }
// );
app.use(setFrontendAuthCookie);
/**
 * all apis, api/404 will be handled here
 */
app.use('/api/user', userRouter);
app.use('/api/socket', socketRouter);
app.use('/api', (req, res, next) =>
  next(new ClientError({
    message: 'Wrong api',
    status: '404',
  })),
);
/**
 * all not-apis, 404 will be handled at frontend
 */
app.use('/', router);

app.use('*', function(req, res) {
  res.redirect('/');
});

// error handler
app.use(errorHandler);

module.exports = app;
