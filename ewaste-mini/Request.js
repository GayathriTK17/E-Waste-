const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  username: String,
  address: String,
  wasteItem: String,
  date: String
});

module.exports = mongoose.model("Request", requestSchema);
