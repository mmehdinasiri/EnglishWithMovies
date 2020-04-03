const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth");

router.get("/signup", signup);
router.get("/signin", signin);

module.exports = router;
