/*
============================================
; Title:  Exercise-4.3.js
; Author: Professor Krasso
; Date:   20 MAY 2020
; Modified by: Jason Cords
; Description: Using JSON Status Codes.
=============================================
*/

const header = require('../../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 4.3"),"\n"); //header

var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {

    response.status(404); //sets 404 status
    response.json({
        error: "There is nothing here." //custom message
    })

});

app.get("/ok", function(request, response) {

    response.status(200); //sets 200 status
    response.json({
        message: "Page great success." //custom message
    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501); //sets 501 status
    response.json({
        error: "Task failed successfully." //custom message
    })

});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");
});