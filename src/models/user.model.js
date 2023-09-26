const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact_number: {
    type: String,
    min: [10],
    max: [10],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("users", userDetailsSchema);
