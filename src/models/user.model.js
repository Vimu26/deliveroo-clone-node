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
  },
  contact_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: [6],
    required: true,
  },
});

module.exports = new mongoose.model("users", userDetailsSchema);
