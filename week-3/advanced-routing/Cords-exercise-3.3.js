/*
============================================
; Title:  Exercise-3.3.js
; Author: Professor Krasso
; Date:   13 MAY 2020
; Modified by: Jason Cords
; Description: Application level logging.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 3.3"),"\n"); //header

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //sets filepath as views folder

app.set("view engine", "ejs"); //sets to ejs view engine

app.use(logger("short"));

//looking for an integer after the slash in url and sets it as productId
app.get("/:productId", function(request, response){
  var productId = parseInt(request.params.productId, 10);
  response.render("index",{
    productId: productId
  });
});
//creates server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});