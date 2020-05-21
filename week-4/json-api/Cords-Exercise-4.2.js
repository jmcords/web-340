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

var app = express();
//requests id from request, parses it and responds with objects.
app.get("/user/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);
    response.json({
        name: "Jason Cords",
        occupation: "Developer",
        devId: id
    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});