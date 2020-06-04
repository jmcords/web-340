/*
============================================
; Title:  Exercise-4.2.js
; Author: Professor Krasso
; Date:   20 MAY 2020
; Modified by: Jason Cords
; Description: Using JSON APIs.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 4.2"),"\n"); //header

var express = require("express");

var http = require("http");

var logger = require("morgan");

var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://jc:pa55word@buwebdev-cluster-1-8iqoq.mongodb.net/ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to MongoDB");
});

var app = express();

app.use(logger("dev"));

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080")
});