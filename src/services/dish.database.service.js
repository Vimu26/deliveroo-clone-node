const dishDetailsModel = require("../models/dish.model");

const getAllDishesService = () => {
  return dishDetailsModel
    .find()
    .then((dish) => {
      if (dish.length === 0) {
        console.log("No Dishes Found");
      }
      return dish;
    })
    .catch((err) => {
      throw err;
    });
};

const createDishService = async (dishDetails) => {
  try {
    const dishModelData = new dishDetailsModel({
      name: dishDetails.name,
      dish_code: dishDetails.dish_code,
      price: dishDetails.price,
      image: dishDetails.image,
    });

    await dishModelData.save();
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateDishService = async (id, dishDetails) => {
  try {
    const updatedDish = await dishDetailsModel.findByIdAndUpdate(
      id,
      dishDetails,
      { new: true }
    );
    return updatedDish;
  } catch (error) {
    console.error("An error occurred during Dish update:", error);
    return;
  }
};

const deleteDishService = async (id) => {
  try {
    await dishDetailsModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.error("An error occurred during Dish Delete:", error);
    return false;
  }
};

module.exports = {
  getAllDishesService,
  createDishService,
  updateDishService,
  deleteDishService,
};
