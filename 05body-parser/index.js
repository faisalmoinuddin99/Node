const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.listen(3000, () => {
  console.log("Server is running at port 3000...");
});
