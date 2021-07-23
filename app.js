const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const { ClientError, errorHandler, ServerError } = require('./server/errors');

const { router } = require('./server/routes');
const userRouter = require('./server/routes/user');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/**
 * all apis, api/404 will be handled here
 */
app.use('/api/user', userRouter);
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
