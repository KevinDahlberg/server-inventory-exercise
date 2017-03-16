//requirements
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 4000;
var index = require("./modules/index.js");
var inventory = require("./modules/inventory.js");


//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/inventory', inventory);


//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
