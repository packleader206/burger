// Eat-Da-Burger - burger.js - UW Coding Bootcamp - Week 14 Homework

// Required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

// Set up for Heroku deployment.  Connect via Heroku if deployed, if not use localhost.
if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 8080,
		host: 'localhost',
		user: 'root',
		password: 'aftermath@71!',
		database: 'burgers_db'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;