const { Schema, model } = require("mongoose");
const { DB_NAMES } = require("../constants");

const orderDetailsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.USERS,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.RESTAURANTS,
  },
  order_items: {
    type: Array,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
    enum: ["CASH", "CARD"],
  },
  selected_option: {
    type: String,
    required: true,
    enum: ["TakeAway", "Delivery"],
  },
  user_details: {
    type: Object,
    required: true,
    properties: {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      contact_number: {
        type: String,
        required: true,
      },
    },
  },
  total_amount: {
    type: Number,
    required: true,
  },
  placed_on: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new model(DB_NAMES.ORDERS, orderDetailsSchema);
