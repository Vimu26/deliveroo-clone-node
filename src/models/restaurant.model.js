const { Schema, model } = require("mongoose");
const { DB_NAMES, ROLES } = require("../constants");

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
  image : {
    type: String,
    required:true,
  },
  distance: {
    type: Number,
    required: true,
  },
  opens_at: {
    type: String,
    required: true,
  },
  closes_at: {
    type: String,
    required: true,
  },
  minimumPrice: {
    type: Number,
    required: true,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
  delivery_time: {
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
  },
  tag_list: {
    type: [String],
    required: true,
  },
  rating : {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: ROLES.RESTAURANT,
    enum: ROLES,
  },
});

module.exports = new model(DB_NAMES.RESTAURANTS, restaurantDetailsSchema);
