const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  name: String,
  roomNo: String,
  bedNo: String,
  institute: String,
  phone: String,
});

const request = mongoose.model("request", requestSchema);
module.exports = request;
