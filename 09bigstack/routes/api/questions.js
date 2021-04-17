const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Person Model
const Person = require("../../models/Person");

//Load Profile Model
const Profile = require("../../models/Profile");

//Load Question Model
const Question = require("../../models/Question");

//@type     GET
//@route    /api/questions
//@desc     route for personal user profile
//@access   PRIVATE

router.get("/", (req, res) => {
  res.json({
    question: "Questions success",
  });
});

//@type     POST
//@route    /api/questions/
//@desc     route for submitting questions
//@access   PRIVATE
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newQuestion = new Question({
      textone: req.body.textone,
      textTwo: req.body.textTwo,
      user: req.user.id,
      name: req.body.name,
    });
    newQuestion
      .save()
      .then((question) => res.json(question))
      .catch((err) => console.log("Unable to push question to database" + err));
  }
);

module.exports = router;
