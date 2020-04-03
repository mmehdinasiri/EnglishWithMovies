const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ page: "home page" });
});

module.exports = router;
