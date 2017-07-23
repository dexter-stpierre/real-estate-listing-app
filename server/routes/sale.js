var express = require('express');
var router = express.Router();
var Sale = require('../models/sale.schema.js')

console.log('sale route loaded');

router.delete('/:id', function(req, res) {
  console.log('delete with id: ', req.params.id);

  Sale.findByIdAndRemove(
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
  var updateListing = new Sale(req.body);
  Sale.findByIdAndUpdate(
    { _id: updateListing.id },
    { $set:
      { cost: updateListing.cost,
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

router.get('/', function(req, res){
  Sale.find({}, function(err, data) {
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

router.post('/', function(req, res){
  console.log('post data:', req.body);
  var newListing = new Sale(req.body);
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

console.log('sale router finished');

module.exports = router;
