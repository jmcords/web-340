/*
============================================
; Title:  Exercise-1.3.js
; Author: Professor Krasso
; Date:   25 Apr 2020
; Modified by: Jason Cords
; Description: Working with modules.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 1.3"),"\n"); //header

var url = require("url");

var parsedURL = url.parse("https://www.jasonisawesome.com/profile?host=facts");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);