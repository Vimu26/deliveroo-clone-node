const mongoose = require("mongoose");

const dishCategoryDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("dish_category", dishCategoryDetailsSchema);
