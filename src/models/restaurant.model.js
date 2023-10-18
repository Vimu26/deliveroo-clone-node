const { Schema, model } = require("mongoose");
const { DB_NAMES } = require("../constants");

const restaurantDetailsSchema = new Schema({
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

module.exports = new model(DB_NAMES.RESTAURANTS, restaurantDetailsSchema);
