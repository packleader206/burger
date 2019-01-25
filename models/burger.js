// Eat-Da-Burger - burger.js - UW Coding Bootcamp - Week 14 Homework

// Import orm.js into burger.js (model) to create functions to interact with the DB
var orm = require('../config/orm.js');

// Create burger object - will call ORM functions based on burger
var burger = {

  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },

  insertOne: function(burger_name, callback) {
    orm.insertOne(burger_name, function(res) {
      callback(res);
    });
  },

  updateOne: function(burger_id, callback) {
    orm.updateOne(burger_id, function(res) {
      callback(res);
    });
  }
};


// Export
module.exports = burger;