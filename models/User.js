const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  googleId: {
    type: String,
  },
});

const User = mongoose.model("User", User);

module.exports = User;
