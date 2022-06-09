const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({});

const room = mongoose.model("room", roomSchema);
module.exports = room;
