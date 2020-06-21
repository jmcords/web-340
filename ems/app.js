var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var csrfProtection = csrf({cookie: true});
var Employee = require("./models/employee");
var mongoDB = "mongodb+srv://jc:pa55word@buwebdev-cluster-1-8iqoq.mongodb.net/ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to MongoDB");
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"
    }); 
});
app.get("/list.ejs", function (request, response) {
  
  Employee.find({}, function(error, employee) {
    if (error) throw error;

  response.render("list", {

      title: "Employee Records",
      employee: employee
  });
});
});
app.get("/new.ejs", function (request, response) {

  response.render("new", {

      title: "Data Entry",
      message: "New employee entry page"
  });
});
app.get("/view/:queryName.ejs", function (request, response) {
  
  var queryName = request.params.queryName;

  Employee.find({"lastName": queryName}, function(error, employees) {

    if (error) throw error;
      console.log(employees);
    if (employees.length > 0) {
      response.render("view", {
        title: "Employee Record",
        employee: employees
      })
    }
      else {
        response.redirect("/list.ejs")
      }
  });
});
app.post("/process", function(request, response) {

  console.log(request.body.firstName);
  console.log(request.body.lastName);
  if (!request.body.firstName) {
    response.status(400).send("Entry must have a first name");
    return;
  };
  if (!request.body.lastName) {
    response.status(400).send("Entry must have a last name");
    return;
  };
  var fName = request.body.firstName;
  var lName = request.body.lastName;
  var employee = new Employee({
    firstName: fName,
    lastName: lName
  });
  employee.save(function (error) {
    if (error) throw error;
    console.log(employee + " saved successfully!");
  });
  response.redirect("/");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});