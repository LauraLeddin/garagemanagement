var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  ordernumber:{
    type: String,
    required: true
  },
  ordernumberint:{
    type: Number,
    required: true
  },
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
  retailerid:{
    type: String,
    required: true
  },
  retaileridint:{
    type: Number,
    required: true
  },
  orderstatus:{
    type: String,
    required: true
  },
  date:{
    type: Object,
    required: true
  },
  lastedited:{
    type: Object,
    required: true
  }
},
{strict: false})

var Order = module.exports = mongoose.model('Order', OrderSchema);