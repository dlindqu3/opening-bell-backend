const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const stockSchema = new Schema({
  // _id included by mongo 
  symbol: { type: String, required: true }, 
  lastRefreshed: { type: String, required: true },
  timeSeriesFiveMin: { type: Object, required: true },
  creator: { type: String, required: true }
});

module.exports = mongoose.model('Stock', stockSchema); 