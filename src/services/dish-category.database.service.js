const dishCategoryDetailsModel = require("../models/dish-category.model");

const getAllDishCategoriesDBService = async () => {
  try {
    const dish = await dishCategoryDetailsModel.find();
    if (dish.length > 0) {
      return dish;
    } else {
      console.log("No dish categories Found");
      return;
    }
  } catch (err) {
    console.log("An error occurred during getting Dish Categories");
    throw err;
  }
};

const createDishCategoryDBService = async (dishCategory) => {
  try {
    const category = new dishCategoryDetailsModel({
      name: dishCategory.name,
      image: dishCategory.image,
    });
    await category.save();
    return category;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Dish Category already exists" };
    } else {
      throw error;
    }
  }
};

const updateDishCategoryDBService = async (id, category) => {
  try {
    const dishCategory = await dishCategoryDetailsModel.findByIdAndUpdate(
      id,
      category,
      { new: true },
    );
    return dishCategory;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Dish Category already exists" };
    } else {
      throw error;
    }
  }
};

const deleteDishCategoryDBService = async (id) => {
  try {
    const dish = await dishCategoryDetailsModel.findByIdAndDelete(id);
    if (dish) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("An error occurred during Dish Category Delete : ", err);
    throw err;
  }
};

const getSingleDishCategory = async (id) => {
  try {
    const category = await dishCategoryDetailsModel.findById(id);
    if (category) {
      return category;
    } else {
      console.log("No Dish Category Found ");
      return;
    }
  } catch (error) {
    console.log("An error occurred during getting Dish Category");
    throw error;
  }
};

module.exports = {
  getAllDishCategoriesDBService,
  createDishCategoryDBService,
  updateDishCategoryDBService,
  deleteDishCategoryDBService,
  getSingleDishCategory,
};
