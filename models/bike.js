// Require mongoose
// Declare mongoose Schema 
// Use mongoose schema (declare key/pair data)
// Create a mongoose model from such schema 
// export model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bikeSchema = new Schema({
  name: String,
  frame: String,
  size: String,
  group: String,
  type: String,
});

const Bike = mongoose.model('bikes', bikeSchema);  // this is the model

// export the model
module.exports = Bike;
