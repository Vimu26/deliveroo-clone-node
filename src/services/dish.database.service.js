const dishDetailsModel = require("../models/dish.model");

const getAllDishesService = () => {
  return dishDetailsModel
    .find()
    .then((dish) => {
      if (dish.length === 0) {
        console.log("No Dishes Found");
      } else {
        return dish;
      }
    })
    .catch((err) => {
      throw err;
    });
};

const getSingleDishService = async (id) => {
  try {
    const dish = await dishDetailsModel.findById(id);
    if (dish) {
      return dish;
    } else {
      console.log("No Dish Exist");
      return;
    }
  } catch (err) {
    console.error("An error occurred during getting a Dish");
    throw err;
  }
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
    return dishModelData;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Dish already Exists" };
    } else {
      throw error;
    }
  }
};

const updateDishService = async (id, dishDetails) => {
  try {
    const updatedDish = await dishDetailsModel.findByIdAndUpdate(
      id,
      dishDetails,
      { new: true },
    );
    return updatedDish;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Dish already Exists" };
    } else {
      throw error;
    }
  }
};

const deleteDishService = async (id) => {
  try {
    const dish = await dishDetailsModel.findByIdAndDelete(id);
    if (dish) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("An error occurred during Dish Delete");
    throw error;
  }
};

module.exports = {
  getAllDishesService,
  createDishService,
  updateDishService,
  deleteDishService,
  getSingleDishService,
};
