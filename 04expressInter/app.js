const express = require("express");
const app = express();

/*
Middleware literally means anything you put in the middle of one layer 
of the software and another.

Express middleware are functions that execute during lifecycle of a
request of the Express server.

Each middleware has access to the HTTP request and response for each 
route (or path) it's attached to.
*/

// Middleware
var iAmMiddleWare = function (req, res, next) {
  console.log("I execute before server response");
  next();
};

app.use(iAmMiddleWare);

app.get("/", (req, res) => {
  res.send("hello world!");
  console.log("Hello world from /");
});
app.listen(3000, () => {
  console.log("Server is running at port 3000....");
});
