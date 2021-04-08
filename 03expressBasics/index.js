const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});
// create route for contact-us and services [unordered list]
app.get("/services", (req, res) => {
  res.send("<ul> <li> coffee </li> <li> Tea </li> <li> Milk </li> </ul>");
});

app.get("/contact-us", (req, res) => {
  res.send("Contact us Page");
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000....`);
});
