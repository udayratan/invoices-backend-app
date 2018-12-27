var express = require('express');
var app = express();
var config = require('./config/config.js');
var bodyParser = require('body-parser')
var Router = require('./Routers/router.js');
var mongoose = require('mongoose');
mongoose.connect(config.mongourl, { useNewUrlParser: true });
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use(express.static('build'));
// view engine setup
app.engine('html', require('hogan-express'));
// By default, Express will use a generic HTML wrapper (a layout) to render all your pages. If you don't need that, turn it off.
app.set('view options', {
    layout: true
});
// Set the layout page. Layout page needs {{{ yield }}}  where page content will be injected
app.set('layout', 'container');
app.set('views', __dirname + '/build');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(Router);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});
app.listen(config.port, function () {
    console.log("Server Running in 4000 port");
});