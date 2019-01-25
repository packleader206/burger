-- Eat-Da-Burger - seeds.sql - UW Coding Bootcamp - Week 14 Homework

-- Select burgers_db
USE burgers_db;

-- Insert 3 burgers into the DB to start
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Buffalo', false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Turkey', false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Veggie', false, CURRENT_TIMESTAMP);