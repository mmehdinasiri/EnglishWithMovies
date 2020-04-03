const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth");

//validator
const { runValidator } = require("../validator");
const { UserValidatorSignup } = require("../validator/auth");

router.post("/signup", UserValidatorSignup, runValidator, signup);
router.get("/signin", signin);

module.exports = router;
