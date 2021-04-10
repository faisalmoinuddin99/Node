const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views")); // middleware
app.set("view engine", "pug");

const port = process.env.port || 3000;
app.get("/", (req, res) => {
  //   res.send("I am working fine ...");
  res.render("index");
});

app.listen(port, () => {
  console.log("Server is running....");
});
