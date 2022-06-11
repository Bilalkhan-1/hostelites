const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({
  name: String,
  email: String,
  complainTitle: String,
  complainText: String,
  resolved: Boolean,
});

const complain = mongoose.model("complain", complainSchema);
module.exports = complain;
