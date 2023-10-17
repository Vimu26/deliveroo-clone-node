const {Schema,model} = require("mongoose");
const {DB_NAMES} = require("../constants");

const orderDetailsSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.USERS,
  },
  restaurant_id: {
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
    required: true,
    default: new Date(),
  },
});

module.exports = new model(
  DB_NAMES.ORDERS,
  orderDetailsSchema,
);
