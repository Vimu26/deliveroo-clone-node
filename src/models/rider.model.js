const { Schema, model } = require("mongoose");
const { DB_NAMES } = require("../constants");

const riderDetailsSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact_number: {
    type: String,
    min: [10],
    max: [10],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  orders: [
    {
      type: {
        type: Schema.Types.ObjectId,
        ref: DB_NAMES.ORDERS
      }
    }
  ]
});

module.exports = new model(DB_NAMES.RIDERS, riderDetailsSchema);
