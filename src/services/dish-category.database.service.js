const dishCategoryDetailsModel = require("../models/dish-category.model");

const getAllDishCategories = async () => {
  const dish = await dishCategoryDetailsModel.find();
  return dish;
};

const createDishCategory = async (dishCategory) => {
  const category = new dishCategoryDetailsModel({
    name: dishCategory.name,
    image: dishCategory.image,
  });
  await category.save();
  return category;
};

const updateDishCategory = async (id, category) => {
  const dishCategory = await dishCategoryDetailsModel.findByIdAndUpdate(
    id,
    category,
    { new: true },
  );
  return dishCategory;
};

const deleteDishCategory = async (id) => {
  const dish = await dishCategoryDetailsModel.findByIdAndDelete(id);
  return dish;
};

const getSingleDishCategory = async (id) => {
  const category = await dishCategoryDetailsModel.findById(id);
  return category;
};

module.exports = {
  getAllDishCategories,
  createDishCategory,
  updateDishCategory,
  deleteDishCategory,
  getSingleDishCategory,
};
