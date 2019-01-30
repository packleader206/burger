DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured, date) VALUES ('Buffalo', false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Turkey', false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ('Veggie', false, CURRENT_TIMESTAMP);