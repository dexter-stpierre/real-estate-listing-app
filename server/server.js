var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

//MONGOOSE CONNECTION
var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

// Catch all / index
app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(){
  console.log('starting application');
  console.log('listening on port:', port);
});
