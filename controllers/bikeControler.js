const express = require('express');
const router = express.Router();

const Bike = require('../models/bike');

// display the index page - show all items
router.get('/', (req, res) => {
  Bike.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index.ejs', { "bikesList": data });
    }
  })
});

// create new - Shows the Form
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// find bike by ID and render the show.ejs page
router.get('/:id', (req, res) => {
  Bike.findById(req.params.id, (err, data) =>{
    if (err) {
      console.log(err);
    } else {
      res.render('show.ejs', {
        bike: data,
        index: req.params.id
      })    
    }
  })
});

// render the edit page (pre-filled with existing data)
router.get('/:id/edit', (req, res) => {
  Bike.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render('edit.ejs', {
        bike:data,
        id:req.params.id
      })
    }
  })
});

// Create new - Insert new item in the DB
router.post('/', (req, res) => {
  Bike.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/bikes');
    }
  })
})

// update an item and render the index page (with edited information)
router.put('/:id', (req, res) => {
  // req.body is the updated form info
  Bike.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/bikes')
    }
  })
});

// Delete an item.  Takes an id , as an argument, from a delete form/button, such as the one on the index.ejs page
router.delete('/:id', (req, res) => {
  Bike.findByIdAndRemove(req.params.id, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/bikes', {});
    }
  })
});



module.exports = router;