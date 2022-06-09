const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: [true, "The email is already taken"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
