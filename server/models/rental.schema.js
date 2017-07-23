var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create Schema
var rentalSchema = new Schema({
  rent: {type: Number},
  sqft: {type: Number},
  city: {type: String}
});

var rental = mongoose.model('rentals', rentalSchema)

module.exports = rental;
