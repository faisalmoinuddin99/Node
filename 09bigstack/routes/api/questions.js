const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    question: "Questions success",
  });
});
module.exports = router;
