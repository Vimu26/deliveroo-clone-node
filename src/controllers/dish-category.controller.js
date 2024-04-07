const dishCategoryService = require("../services/dish-category.database.service");

const getAllDishCategories = async (req, res) => {
  try {
    const { restaurant } = req.query;
    let query = {};
    if (restaurant) {
      query = { restaurant: restaurant };
    }
    const dishCategory = await dishCategoryService.getAllDishCategories(query);
    res.status(200).json({
      status: true,
      message: "Dish Categories Found Successfully",
      data: dishCategory,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const createDishCategory = async (req, res) => {
  try {
    const category = await dishCategoryService.createDishCategory({
      restaurant: req.body.restaurant,
      name: req.body.name,
    });
    res.status(201).json({
      status: true,
      message: "Dish category Created Successfully",
      data: category,
    });
  } catch (error) {
    if (!error?.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message,
    });
  }
};

const checkDishCategoriesDetails = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      message: "Dish Category Details Checked Successfully",
      code: 201,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const updateDishCategory = async (req, res) => {
  try {
    const updatedDishCategory = await dishCategoryService.updateDishCategory(
      req.params.id,
      {
        name: req.body.dish_category_name,
        image: req.body.image,
      },
    );
    res.status(200).json({
      status: true,
      message: "Dish Category updated successfully",
      data: updatedDishCategory,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message,
    });
  }
};

const updateDishCategoryData = async (req, res) => {
  try {
    const updatedDishCategory =
      await dishCategoryService.updateDishCategoryData(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "Dish Category updated successfully",
      data: updatedDishCategory,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message,
    });
  }
};

const deleteDishCategory = async (req, res) => {
  try {
    const dish = await dishCategoryService.deleteDishCategory(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      status: true,
      message: "Dish Category Deleted successfully",
      data: dish,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    return res.status(500).json({ status: false, message: err.message });
  }
};

const getSingleDishCategory = async (req, res) => {
  try {
    const category = await dishCategoryService.getSingleDishCategory(
      req.params.id,
    );
    res.status(200).json({
      status: true,
      message: "Dish Category Found Successfully",
      data: category,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    return res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = {
  getAllDishCategories,
  createDishCategory,
  updateDishCategory,
  deleteDishCategory,
  getSingleDishCategory,
  updateDishCategoryData,
  checkDishCategoriesDetails,
};
