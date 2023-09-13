const mongoose = require("mongoose");

const dishDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dish_code: {
    type: String,
    required: true,
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

module.exports = new mongoose.model("dishes", dishDetailsSchema);
