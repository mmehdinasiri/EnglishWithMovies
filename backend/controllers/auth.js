exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  res.json({ user: name, email, password });
};
exports.signin = (req, res) => {
  res.json({ page: "signin page" });
};
