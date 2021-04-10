const express = require("express");
const passport = require("passport");
const Strategy = require("passport-facebook").Strategy;

passport.use(
  new Strategy(
    {
      clientID: "1127528481092910",
      clientSecret: "032f09f6e7a64f39d0deebaedd00401c",
      callbackURL: "http://localhost:3000/login/facebook/return",
    },

    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// create express app
const app = express();

// set view dir
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "lco app",
    resave: true,
    saveUninitialized: true,
  })
);
