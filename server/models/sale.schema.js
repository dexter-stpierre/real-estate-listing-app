var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create Schema
var saleSchema = new Schema({
  cost: {type: Number},
  sqft: {type: Number},
  city: {type: String}
});

sale = mongoose.model('listings', saleSchema);

//export Schema
module.exports = sale;
