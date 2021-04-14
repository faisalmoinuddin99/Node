const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Person Model
const Person = require("../../models/Person");

//Load Profile Model
const Profile = require("../../models/Profile");
//@type     GET
//@route    /api/profile
//@desc     route for personal user profile
//@access   PRIVATE

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ profileNotFound: "No profile found" });
        }
        res.json(profile);
      })
      .catch((err) => console.log("Got some error in profile " + err));
  }
);

//@type     POST
//@route    /api/profile
//@desc     route for updating and saving personal user profile
//@access   PRIVATE
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileValues = {};
    profileValues.user = req.user.id;
    if (req.body.username) profileValues.username = req.body.username;
    if (req.body.website) profileValues.website = req.body.website;
    if (req.body.country) profileValues.country = req.body.country;
    if (req.body.portfolio) profileValues.portfolio = req.body.portfolio;
    if (typeof req.body.languages !== undefined) {
      profileValues.languages = req.body.languages.split(",");
    }
    if (req.body.youtube) profileValues.youtube = req.body.youtube;
    if (req.body.facebook) profileValues.facebook = req.body.facebook;
    if (req.body.instagram) profileValues.instagram = req.body.instagram;
  }
);
module.exports = router;
