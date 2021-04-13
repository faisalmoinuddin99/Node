const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//bring all routes
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const questions = require("./routes/api/questions");

//Middleware for body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongodb configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect to database
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

//just for testing -> route
app.get("/", (req, res) => {
  res.send("Hey there big stack");
});

//acutal route
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/questions", questions);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
