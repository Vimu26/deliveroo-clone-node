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
  location: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  closesAt: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        // Custom validation logic for time format (HH:mm AM/PM)
        const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/;
        return regex.test(value);
      },
      message: "Invalid time format. Please use HH:mm AM/PM.",
    },
  },
  minimumPrice: {
    type: String,
    required: true,
  },
  deliveryFee: {
    type: String,
    required: true,
  },
});

module.exports = new model(DB_NAMES.RESTAURANTS, restaurantDetailsSchema);
