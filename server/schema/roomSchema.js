const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: String,
  price: String,
  noOfBeds: String,
  wifi: Boolean,
  parking: Boolean,
  availability: Boolean,
});

const room = mongoose.model("room", roomSchema);
module.exports = room;
