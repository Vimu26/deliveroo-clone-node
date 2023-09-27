const mongoose = require("mongoose");
const db_name = require("../constants/db.names");

const restaurantDetailsSchema = new mongoose.Schema({
  name: {
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
  address: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model(db_name.DB_NAMES.RESTAURANTS , restaurantDetailsSchema);
