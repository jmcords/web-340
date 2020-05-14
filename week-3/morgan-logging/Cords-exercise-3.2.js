/*
============================================
; Title:  Exercise-3.2.js
; Author: Professor Krasso
; Date:   13 MAY 2020
; Modified by: Jason Cords
; Description: Application level logging.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 3.2"),"\n"); //header

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //sets filepath as views folder

app.set("view engine", "ejs"); //sets to ejs view engine

app.use(logger("short"));
//looking for the slash in url and responds with message
app.get("/", function(request, response){
  response.render("index",{
    message: "This is a test of the emergency alert system!"
  });
});
//creates server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});