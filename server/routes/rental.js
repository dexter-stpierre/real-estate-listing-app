var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema.js');

console.log('rental controller loaded');

router.delete('/:id', function(req, res) {
  console.log('delete with id: ', req.params.id);

  Rental.findByIdAndRemove(
    { _id: req.params.id }, // how do i find this document?
    function(err, data) {
      if(err) {
        console.log('remove error: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  )

});

router.put('/', function(req, res){
  console.log('put data:', req.body);
  var updateListing = new Rental(req.body);
  Rental.findByIdAndUpdate(
    { _id: updateListing.id },
    { $set:
      { rent: updateListing.rent,
        sqft: updateListing.sqft,
        city: updateListing.city}
    },
    function(err, data) {
      if(err) {
        console.log('update error:', err);
        res.sendStatus(500);
      } else{
        res.sendStatus(200);
      }
    }
  );
});

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
