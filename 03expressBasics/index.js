const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.post("/login", (req, res) => {
  res.send("login success");
});
/*
we get this output: Cannot GET /login

# Because, Browser usually makes a get request
# For post you need front-end like form's or postman

*/

// Assignment 1: create route for contact-us and services [unordered list]
app.get("/services", (req, res) => {
  res.send("<ul> <li> coffee </li> <li> Tea </li> <li> Milk </li> </ul>");
});

// Assignment 2: create a delete route and test it using postman
app.delete("/del", (req, res) => {
  res.send("Deleted Successfully...");
});

app.get("/contact-us", (req, res) => {
  res.send("Contact us Page");
});

app.get("/ab*cd", (req, res) => {
  res.send("<h1>I am Regex.. </h1>");
});

app.get("/users/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});

// grab input details from user and check on database
app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});
app.listen(3000, () => {
  console.log(`Server is running at port 3000....`);
});
