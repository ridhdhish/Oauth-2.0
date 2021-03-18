const { Router } = require("express");

const router = Router();

const authMiddleware = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

router.get("/profile", authMiddleware, (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = router;
