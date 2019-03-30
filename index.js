var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var router = require('./modules/modulerouter');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);
module.exports = app;