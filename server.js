// Dependancies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// JS Routes
var index = require('./routes/index');
var items = require('./routes/items');

// Setup App
var port = 3000;
var app = express();

// View engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// Set static folder for angular
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Use Routes
app.use('/', index);
app.use('/api', items);

// Start Server
app.listen(port, function(){
	console.log('Server started on port' + port);
})