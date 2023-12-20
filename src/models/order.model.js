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
  quantity: {
    type: Number,
    required: true,
  },
  order_code: {
    type: String,
    required: true,
    unique: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  placed_on: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new model(DB_NAMES.ORDERS, orderDetailsSchema);
