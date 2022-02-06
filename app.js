let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
require('dotenv').config();
let indexRouter = require('./routes/index');

let app = express();
let hbs = require('hbs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,'views/partials'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles',express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/icons',express.static(path.join(__dirname,'/node_modules/bootstrap-icons')));

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
