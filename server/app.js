//requirements
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 4000;


//uses
app.use(express.static('server/public'));



//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
