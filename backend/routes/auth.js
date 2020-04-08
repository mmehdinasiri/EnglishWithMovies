const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");

//validator
const { runValidator } = require("../validator");
const {
  UserValidatorSignup,
  UserValidatorSignin,
} = require("../validator/auth");

router.post("/signup", UserValidatorSignup, runValidator, signup);
router.post("/signin", UserValidatorSignin, runValidator, signin);
router.get("/signout", signout);

module.exports = router;
