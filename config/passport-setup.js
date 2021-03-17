const passport = require("passport");
const GoogleStretagy = require("passport-google-oauth20");

passport.use(
  new GoogleStretagy(
    {
      //set options
      clientID:
        "915262635599-6sg0pnltd701ujekb40qtru5jisj2kto.apps.googleusercontent.com",
      clientSecret: "tBcUhrGcDwkuzNtkOU9ExAwh",
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // Callback
      console.log(profile);
    }
  )
);
