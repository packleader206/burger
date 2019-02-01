# Eat-Da-Burger

## Overview:

Eat-Da-Burger demonstrates a simple full-stack application that allows you to create and log burgers created and eatened. It uses Node & MySQL to query and route data to the app & Express Handlebars to generate HTML.

## Technologies Used:
- HTML
- CSS
- Javascript
- MySQL
- Node.js
- NPM Express
- NPM Express-Handlebars
- NPM Body-Parser
- NPM Method-Override

## Author:

<strong>Al Young</strong>
<hr>

## Setup:

To run this application, you will need <a href="https://nodejs.org/en/download/">Node JS</a> and <a href="https://dev.mysql.com/doc/refman/5.6/en/installing.html">MySQL</a> installed on your computer.

<strong>MySQL Database Setup:</strong>

Once you have MySQL installed, you will need to create the burgers_db database with the SQL code found here in the <a href="https://github.com/packleader206/burger/blob/master/burger.sql">burger.sql</a> file. Run this code inside your MySQL client to create the database.  If you do not already have a mySQL client, you can <a href="https://dev.mysql.com/downloads/workbench/">download MySQL Workench here</a>.

<strong>Once you have the burgers_db database set up, run the following commands at your command prompt:</strong>

           1. git clone https://github.com/packleader206/burger.git ENTER
           
           2. cd burger ENTER
           
           3. npm install ENTER
           
<strong>Then, navigate to the "config" folder and open up the file named "connection.js".  Make sure the "port" (line 18) and "password" (line 21) are correctly set for use with the SQL database you set up.  Once the "port" and "password" are set to match your database, save the file.  You are now ready to run the App!             
                      
           
## Running the App:

           1. Start the server by running the command "node server.js"
           
           2. Then open your browser and go to "http://localhost:8080/"


## Instructions:

User can eat any burger from the "Burgers Available" list by clicking on the "Devour It!" button.  Once devoured, the burger will no longer be available to eat and moved to the "Burgers Devoured" list.  If user wants a specific burger, he/she can add the burger of their choosing to the "Burgers Available" list by filling out the "Request a New Burger" field and hitting the "Make My Burger" button. 

## Screenshot:
            
 <img src="https://packleader206.github.io/burger/public/assets/img/screenshot.png" alt="Screenshot">
 
 <br>
