const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');  // How is this used/called by this file?

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));  // allows alt methods such as "PUT" from the html form to call a corresponding route

// require the controller(s)
const bikeController = require('./controllers/bikeControler');
app.use('/bikes', bikeController);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app;

