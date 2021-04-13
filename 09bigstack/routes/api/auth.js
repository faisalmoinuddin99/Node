const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jsonwt = require("json-web-token");
const passport = require("passport");
const key = require("../../setup/myurl");

//@type     GET
//@route    /api/auth
//@desc     just for testing
//@access   PUBLIC
router.get("/", (req, res) => {
  res.json({ test: "Auth is being tested" });
});

//Import Schema for Person to Register
const Person = require("../../models/Person");

//@type     POST
//@route    /api/auth/register
//@desc     route for registerion of users
//@access   PUBLIC
router.post("/register", (req, res) => {
  Person.findOne({ email: req.body.email })
    .then((person) => {
      if (person) {
        return res
          .status(400)
          .json({ emailerror: "Email is already registerd in our system" });
      } else {
        const newPerson = new Person({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
      }
    })
    .catch((err) => console.log(err));
});
module.exports = router;
