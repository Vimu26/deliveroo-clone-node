const dishDetailsModel = require("../models/dish.model");

const getAllDishes = async () => {
  const dishes = await dishDetailsModel.find();
  return dishes;
};

const getSingleDish = async (id) => {
  const dish = await dishDetailsModel.findById(id);
  return dish;
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
  const updatedDish = await dishDetailsModel.findByIdAndUpdate(
    id,
    dishDetails,
    { new: true },
  );
  return updatedDish;
};

const deleteDish = async (id) => {
  const dish = await dishDetailsModel.findByIdAndDelete(id);
  return dish;
};

module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish,
  getSingleDish,
};
