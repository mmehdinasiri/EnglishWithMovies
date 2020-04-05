const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth");

//validator
const { runValidator } = require("../validator");
const {
  UserValidatorSignup,
  UserValidatorSignin,
} = require("../validator/auth");

router.post("/signup", UserValidatorSignup, runValidator, signup);
router.post("/signin", UserValidatorSignin, runValidator, signin);

module.exports = router;
