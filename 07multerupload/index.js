const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// set for ejs
app.set("view engine", "ejs");

app.use("", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Multer is going fine and so is nodemon");
});
app.listen(port, () => {
  console.log(`server is running at ${port}...`);
});
