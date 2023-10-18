const dishDetailsModel = require("../models/dish.model");

const getAllDishes = async () => {
  return await dishDetailsModel.find();
};

const getSingleDish = async (id) => {
  return await dishDetailsModel.findById(id);
};

const createDish = async (dishDetails) => {
  const dishModelData = new dishDetailsModel({
    name: dishDetails.name,
    dish_code: dishDetails.dish_code,
    price: dishDetails.price,
    image: dishDetails.image,
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
