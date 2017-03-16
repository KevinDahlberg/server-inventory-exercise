//requires and globals
var express = require('express');
var router = express.Router();

//array of the inventory
var clientInventory = [];
clientInventory.push({name: "asdf", description: 'qwer'});
clientInventory.push({name: "zxcv", description: 'wert'});
clientInventory.push({name: "vbnm", description: 'erty'});


//routes
router.get('/', function(req, res){
  console.log("inventory.js get received");
  res.send(clientInventory);
});// end sends back clientInventory

// router.post('/add', function(req, res){
//   console.log('in inventory add route', req.body);
//   //send back success
//   res.send(200);
// });

//exports
