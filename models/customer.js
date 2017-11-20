
var mongoose = require('mongoose');

var CustomerSchema = mongoose.Schema({
  customernumber:{
    type: String,
    required: true
  },
  customernumberint:{
    type: Number,
    required: true
  },
  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type: String,
    required: true
  },
  street:{
    type: String
  },
  zipcode:{
    type: String
  },
  city:{
    type: String
  },
  telephone:{
    type: String
  }
})

var Customer = module.exports = mongoose.model('Customer', CustomerSchema);