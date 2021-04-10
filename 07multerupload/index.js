const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// multer setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/myupload");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
}).single("myimage");

// set for ejs
app.set("view engine", "ejs");

// middleware to set static folder
app.use(express.static("./public"));

app.get("/", (req, res) => {
  //res.send("Multer is going fine and so is nodemon");
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is running at ${port}...`);
});