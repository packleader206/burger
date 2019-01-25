-- Eat-Da-Burger - schema.sql - UW Coding Bootcamp - Week 14 Homework

-- Create the database
CREATE DATABASE burgers_db;

-- Use the database
USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);