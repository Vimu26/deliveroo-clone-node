const { Schema, model } = require("mongoose");
const { DB_NAMES } = require("../constants");

const dishDetailsSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.RESTAURANTS
  },
  dish_category: {
    type: Schema.Types.ObjectId,
    ref: DB_NAMES.DISH_CATEGORIES,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  addOns: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      checked: { type: Boolean, default: false }
    }
  ],
  size: [
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = new model(DB_NAMES.DISHES, dishDetailsSchema);
