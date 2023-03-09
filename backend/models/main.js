const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: [true, "must provide a valid name"],
    unique: [true, "name already in use"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "must provide a valid email"],
    unique: [true, "The email  is already taken."],
    match: [
      /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/,
      "is not a valid email address.",
    ],
  },
  password: {
    type: "string",
    required: [true, "must provide password."],
  },
});

module.exports = mongoose.model("User", UserSchema);
