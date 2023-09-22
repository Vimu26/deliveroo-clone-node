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
    console.error(err);
    return;
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
  } catch (err) {
    console.error(err);
    return;
  }
};

const updateDishCategoryDBService = async (id, category) => {
  try {
    const dishCategory = await dishCategoryDetailsModel.findByIdAndUpdate(
      id,
      category,
      { new: true }
    );
    return dishCategory;
  } catch (err) {
    console.error("An error occurred during Dish Category update:", err);
    return;
  }
};

const deleteDishCategoryDBService = async (id) => {
  try {
    await dishCategoryDetailsModel.findByIdAndDelete(id);
    return true;
  } catch (err) {
    console.error("An error occurred during Dish Category Delete:", err);
    return false;
  }
};

module.exports = {
  getAllDishCategoriesDBService,
  createDishCategoryDBService,
  updateDishCategoryDBService,
  deleteDishCategoryDBService,
};
