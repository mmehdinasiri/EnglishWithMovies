const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status("400").json({ error: "This email taken before" });
    }
    const { name, email, password } = req.body;
    const username = shortId.generate();
    let newUser = new User({ name, email, password, username });
    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.status(200).json({ message: "User signup" });
    });
  });
};
exports.signin = (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  User.findOne({ email }).exec((err, user) => {
    if (!user || err) {
      return res.status("400").json({ error: "user does not exist" });
    }
    //authenticate
    if (!user.authenticate(password)) {
      return res.status("400").json({ error: "password is wrong" });
    }
    //generate token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, name, username, email, role } = user;
    res.json({ user: { _id, name, username, email, role }, token });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "signout successfully" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
});
