const mongoose = require("mongoose");
const db_name = require("../constants/db.names");

const dishDetailsSchema = new mongoose.Schema({
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "restaurant",
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "order",
  },
  dish_category_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "dish-category",
  },
  name: {
    type: String,
    required: true,
  },
  dish_code: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model(db_name.DB_NAMES.DISHES, dishDetailsSchema);
