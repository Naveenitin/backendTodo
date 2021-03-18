const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  name: String,
  desc: String,
  time: Number,
});

module.exports = mongoose.model("Todos", TodosSchema);
