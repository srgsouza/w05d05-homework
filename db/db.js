const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/bikes';

mongoose.connect(url, { useNewUrlParser: true });  
const db = mongoose.connection;

db.on('connected', (data) => {
  console.log('Connected to MongoDB');
})

db.on('disconnecte', (data) => {
  console.log('Disconnected from MongoDB');
})

db.on('error', (err) => {
  console.log(err);
})

// Insert initial data on the db
// const bikesList = require('./db');  // Initial sample data
// const Bike = require('../models/bike'); // db model


// Bike.collection.insertMany(bikesList, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Added initial bike data")
//     mongoose.connection.close();
//   }
// });

// Bike.collection.insert(
//   {
//     name: 'De Rosa',
//     frame: 'carbon fiber',
//     group: 'campagnolo',
//     type: 'road'
//   }, (err, data) => {
//   console.log("added one item");
//   mongoose.connection.close();
// });
