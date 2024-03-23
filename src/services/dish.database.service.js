const dishDetailsModel = require("../models/dish.model");

const getAllDishes = async (query) => {
  return await dishDetailsModel
    .find(query)
    .populate("restaurant")
    .populate("dish_category");
};

const getSingleDish = async (id) => {
  return await dishDetailsModel.findById(id);
};

const createDish = async (dishDetails) => {
  const dishModelData = new dishDetailsModel({
    restaurant: dishDetails.restaurant,
    order: dishDetails.order,
    dish_category: dishDetails.dish_category,
    name: dishDetails.name,
    description: dishDetails.description,
    price: dishDetails.price,
    image: dishDetails.image,
    calories: dishDetails.calories,
    addOns: dishDetails.addOns,
    size: dishDetails.size,
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
