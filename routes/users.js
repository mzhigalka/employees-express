const express = require("express");
const router = express.Router();

// /api/user/login
router.post("/login", function (req, res, next) {
  res.send("login");
});

// /api/user/register
router.post("/register", function (req, res, next) {
  res.send("register");
});

// /api/user/current
router.post("/current", function (req, res, next) {
  res.send("register");
});

module.exports = router;
