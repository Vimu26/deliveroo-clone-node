const mongoose = require("mongoose");
const db_name = require("../constants/db.names");

const orderDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "restaurant",
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
    required: true,
    default: new Date(),
  },
});

module.exports = new mongoose.model(
  db_name.DB_NAMES.ORDERS,
  orderDetailsSchema,
);
