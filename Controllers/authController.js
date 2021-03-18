const login = (req, res) => {
  // Auth handling using passport
};

const logout = (req, res) => {
  // Handle using passport
  req.logout();
  res.redirect("/");
};

module.exports = { login, logout };
