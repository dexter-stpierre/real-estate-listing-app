var express = require('express');
var router = express.Router();
var Sale = require('../models/sale.schema.js')

console.log('sale route loaded');

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

console.log('sale router finished');

module.exports = router;
