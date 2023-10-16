const mongoose = require("mongoose");
const db_name = require("../constants/db.names");

const dishCategoryDetailsSchema = new mongoose.Schema({
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "restaurant",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model(
  db_name.DB_NAMES.DISH_CATEGORIES,
  dishCategoryDetailsSchema,
);
