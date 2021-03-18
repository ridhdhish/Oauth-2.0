const passport = require("passport");
const GoogleStretagy = require("passport-google-oauth20");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStretagy(
    {
      //set options
      clientID:
        "915262635599-6sg0pnltd701ujekb40qtru5jisj2kto.apps.googleusercontent.com",
      clientSecret: "tBcUhrGcDwkuzNtkOU9ExAwh",
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Callback
      const user = await User.findOne({ googleId: profile.id });

      if (user) {
        done(null, user);
        return;
      }
      const newUser = await User.create({
        username: profile.displayName,
        googleId: profile.id,
      });
      done(null, newUser);
    }
  )
);
