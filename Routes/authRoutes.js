const { Router } = require("express");
const passport = require("passport");
const { login, logout } = require("../Controllers/authController");

const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //res.send(req.user);
  res.redirect("/user/profile");
});
router.get("/logout", logout);

module.exports = router;
