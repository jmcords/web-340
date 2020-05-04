/*
============================================
; Title:  Exercise-2.2.js
; Author: Professor Krasso
; Date:   5 MAY 2020
; Modified by: Jason Cords
; Description: Working with Express.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 2.2"),"\n"); //header

var express = require("express"); //requires express module

var http = require("http"); //requires http protocol

var app = express(); //calls express function to start app

app.use(function(request, response) //function passed request and response and logs/shows result
{
  console.log("in comes a request to: " + request.url);
  response.end("Hello World!");
});

http.createServer(app).listen(8080);
