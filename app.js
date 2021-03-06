var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var loggerW = require('./lib/logger');
var ip = require('ip');

loggerW.info("La ip conectada es: " + ip.address());

var routes = require('./routes/index');
var users = require('./routes/users');
var students  =  require('./routes/students');
//var tutors    =  require('./routes/tutors');


mongoose.connect('mongodb://localhost/questions1', function(err, res){
  if(err) console.log('Error: to connecting to Database. ' + err)
  else console.log('Connected to Database students')
})



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/success', routes);
app.use('/exportData', routes);
app.use('/login' , routes);
app.use('/registroEstudiante' , routes);
app.use('/perfil' , routes);
app.use('/panel' , routes);
app.use('/acercaDe', routes);

app.use('/students', students);
//app.use('/tutors', tutors);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
