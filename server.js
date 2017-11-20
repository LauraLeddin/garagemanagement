var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost:27017/mongoosetest');

mongoose.connection.on('connected', function(req, res){
  console.log("connected to database");
});

mongoose.connection.on('error', function(err){
  if(err){
    console.log(err);
  }
});

const port = 3000;

const route = require('./routes/routes.js');

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/', function(req, res){
  res.send('ldsjnfö');
});

app.listen(port, function(){
  console.log("listening on port " + port);
});
