var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema.js');

console.log('rental controller loaded');



router.post('/', function(req, res){
  console.log('post data:', req.body);
  var newListing = new Rental(req.body);
  newListing.save(function(err, data) {
    console.log('saved data:', data);
    if(err){
      console.log('save error:', err);
      res.sendStatus(500);
    } else{
      res.sendStatus(200);
    }
  });
});

router.get('/', function(req, res){
  Rental.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      console.log(data);
      res.send(data);
      // res.send(result.rows)
    }
  })
})

module.exports = router;
