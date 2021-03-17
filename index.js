const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./Routes/authRoutes");
require("./config/passport-setup");

require("dotenv").config();

const app = express();

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

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
