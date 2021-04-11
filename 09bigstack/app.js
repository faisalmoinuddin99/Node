const express = require("express");
const mongoose = require("mongoose");
const app = express();

//mongodb configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect to database
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

//route
app.get("/", (req, res) => {
  res.send("Hey there big stack");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
