var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./lib/models')
// Request and response cycles

// Request comes in here
// car assembly line

// You can name these whatever you want
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

// api backends - spit out JSON data

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// request object looks like this: {lots of keys and values here} // contains information like IP address, urls, data

// MIDDLEWARES

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// this middleware tries to TERMINATE THE REQUEST
// can we terminate the request by spitting out a file from the public folder?
app.use(express.static(path.join(__dirname, 'public')));

// Move onto the next middleware in line
// is the request trying to fetch the home page?
app.use('/', indexRouter);

// any request coming off of /users is resolved by line 39, Eg: localhost:3000/users, localhost:3000/users/whatever/whatever
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
// if none of the routers are able to terminate the request then the 404 page is spit out // This is also a middleware
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// this is like a catch all middleware, if nothing works, or there is some error, show this
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// HTTP
// HTML
// JSON
// FETCH calls to the backend
// PDF
