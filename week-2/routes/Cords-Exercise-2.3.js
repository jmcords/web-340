/*
============================================
; Title:  Exercise-2.3.js
; Author: Professor Krasso
; Date:   5 MAY 2020
; Modified by: Jason Cords
; Description: Working with routes in Express.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 2.3"),"\n"); //header

var express = require("express"); //requires express module

var http = require("http"); //requires http

var app = express(); //calls function to start express app

app.get("/", function(request, response) //gets information from homepage and sets response
{
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) //gets information from about page and sets response
{
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) ////gets information from contact page and sets response
{
  response.end("Welcome to the contact page!");
});

app.use(function(request, response)
{
  response.statusCode = 404; //when request sets 404 error code
  response.end("404!"); //responds with message
});

http.createServer(app).listen(8080); //starts server