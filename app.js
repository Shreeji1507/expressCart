var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var expressPug = require('express-handlebars');
var mongoose = require("mongoose");
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require("express-validator");
var MongoStore = require("connect-mongo")(session);

// var stripe = require("stripe");
// stripe('pk_test_ztUXQzALnwWMFPm4lR1yhauj');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

var app = express();

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});
//mongoose.connect('mongodb+srv://dbShreeji:dbShreejiPassword@cluster0-1qsgc.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
require("./config/passport");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.engine('.pug', expressPug({defaultLayout: 'layout', extname: '.pug'}));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: "mysecret", 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie: { maxAge: 180 * 60 * 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});
app.use('/user', usersRouter);
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
