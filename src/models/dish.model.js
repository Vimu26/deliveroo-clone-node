const {Schema,model} = require("mongoose");
const {DB_NAMES} = require("../constants");

const dishDetailsSchema = new Schema({
  restaurant_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.RESTAURANTS,
  },
  order_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.ORDERS,
  },
  dish_category_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.DISH_CATEGORIES,
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

module.exports = new model(DB_NAMES.DISHES, dishDetailsSchema);
