const express = require("express");

const app = express();

// Setup view engine
app.set("view engine", "ejs");

// Setup routes
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
