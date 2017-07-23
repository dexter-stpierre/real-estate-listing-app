var express = require('express');
var router = express.Router();
var rental = require('../models/rental.schema.js');

console.log('rental controller loaded');

router.get('/', function(req, res){
  rental.find({}, function(err, data) {
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
