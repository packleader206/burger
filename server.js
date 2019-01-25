// Eat-Da-Burger - server.js - UW Coding Bootcamp - Week 14 Homework

// Node dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;


// Express middleware -- Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));


// Parse URL
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Router variable requires burger_controller.js
var router = require('./controllers/burgers_controller.js');
app.use('/', router);


// Start server
app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});