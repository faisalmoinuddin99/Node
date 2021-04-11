const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//route
app.get("/", (req, res) => {
  res.send("Hey there big stack");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
