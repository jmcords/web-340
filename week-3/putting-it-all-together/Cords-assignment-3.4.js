/*
============================================
; Title:  Assignment-3.4.js
; Author: Professor Krasso
; Date:   13 MAY 2020
; Modified by: Jason Cords
; Description: Routing and logging application.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 3.4"),"\n"); //header

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
    message: "home page!"
  });
});
//looking for the slash about in url and responds with message
app.get("/about", function(request, response){
  response.render("about",{
    message: "about page!"
  });
});
//looking for the slash contact in url and responds with message
app.get("/contact", function(request, response){
  response.render("contact",{
    message: "contact page!"
  });
});
//looking for the slash products in url and responds with message
app.get("/products", function(request, response){
  response.render("products",{
    message: "products page!"
  });
});
//creates server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});