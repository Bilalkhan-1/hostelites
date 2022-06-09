const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({});

const complain = mongoose.model("complain", complainSchema);
module.exports = complain;
