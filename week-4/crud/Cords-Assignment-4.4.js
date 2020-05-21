/*
============================================
; Title:  Assignment-4.4.js
; Author: Professor Krasso
; Date:   20 MAY 2020
; Modified by: Jason Cords
; Description: CRUD assignment.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 4.4"),"\n"); //header

var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("This is a GET request.");
});

app.put("/", function(request, response) {
  response.send("This is a PUT request.");
});

app.post("/", function(request, response) {
  response.send("This is a POST request");
});

app.delete("/", function(request, response) {
  response.send("This is a DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});