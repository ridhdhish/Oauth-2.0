const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const authRoutes = require("./Routes/authRoutes");
const userRoutes = require("./Routes/userRoutes");
require("./config/passport-setup");

require("dotenv").config();

const app = express();

// Set cookie
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to databse
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

// Setup view engine
app.set("view engine", "ejs");

// Setup routes
app.get("/", (req, res) => {
  res.render("home");
});

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
