/*
============================================
; Title:  Assignment-2.4.js
; Author: Professor Krasso
; Date:   5 MAY 2020
; Modified by: Jason Cords
; Description: Embedded JS and Express.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 2.4"),"\n"); //header

var express = require("express"); //requires express module

var http = require("http");//requires http

var path = require("path"); //requires path function

var app = express(); //calls function to start express app

app.set("views", 
  path.resolve(__dirname, "views")); //sets path to views

app.set("view engine", "ejs"); //sets embedded js

app.get("/", function(request, response) //gets information from homepage and sets response
{
  response.render("index.ejs", { //sends response to ejs file
    firstName: "Jason",
    lastName: "Cords",
    address: "123 Here Street"
  });
});

http.createServer(app).listen(8080, function(){ //opens server
  console.log("EJS-Views app started on port 8080.");
});
