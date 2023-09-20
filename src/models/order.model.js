const mongoose = require("mongoose");

const orderDetailsSchema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("orders", orderDetailsSchema);
