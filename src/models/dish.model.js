const { Schema, model } = require("mongoose");
const { DB_NAMES } = require("../constants");

const dishDetailsSchema = new Schema({
  restaurant_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.RESTAURANTS,
  },
  order_id: {
    type: Schema.Types.ObjectId,
    ref: DB_NAMES.ORDERS,
    defaultValue: '-'
  },
  dish_category_id: {
    type: Schema.Types.ObjectId,
    ref: DB_NAMES.DISH_CATEGORIES,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
});

module.exports = new model(DB_NAMES.DISHES, dishDetailsSchema);
