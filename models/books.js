const mongoose = require("mongoose"),
  bookSchema = mongoose.Schema({
    name: String,
    description: String,
    img: String,
  });
module.exports = mongoose.model("Book", bookSchema);