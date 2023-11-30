const dishDetailsModel = require("../models/dish.model");

const getAllDishes = async () => {
  return await dishDetailsModel.find();
};

const getSingleDish = async (id) => {
  return await dishDetailsModel.findById(id);
};

const createDish = async (dishDetails) => {
  const dishModelData = new dishDetailsModel({
    restaurant_id: dishDetails.restaurant_id,
    order_id: dishDetails.order_id,
    name: dishDetails.name,
    dish_category_id: dishDetails.dish_category_id,
    dish_code: dishDetails.dish_code,
    price: dishDetails.price,
    image: dishDetails.image,
    calories: dishDetails.calories,
  });
  await dishModelData.save();
  return dishModelData;
};

const updateDish = async (id, dishDetails) => {
  return await dishDetailsModel.findByIdAndUpdate(id, dishDetails, {
    new: true,
  });
};

const updateDishData = async (id, dishDetails) => {
  return await dishDetailsModel.findByIdAndUpdate(id, dishDetails, {
    new: true,
  });
};

const deleteDish = async (id) => {
  return await dishDetailsModel.findByIdAndDelete(id);
};

module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish,
  getSingleDish,
  updateDishData,
};
