const login = (req, res) => {
  // Auth handling using passport
};

const logout = (req, res) => {
  // Handle using passport
  res.send("Logout auth");
};

module.exports = { login, logout };
