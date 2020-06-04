var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"
    }); 
});
app.get("/list.ejs", function (request, response) {

  response.render("list", {

      title: "Employee Records"
  });
});
app.get("/new.ejs", function (request, response) {

  response.render("new", {

      title: "Data Entry"
  });
});
app.get("/view.ejs", function (request, response) {

  response.render("view", {

      title: "Employee Details"
  });
});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});