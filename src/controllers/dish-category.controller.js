const dishCategoryService = require("../services/dish-category.database.service");

const getAllDishCategoriesController = async (req, res) => {
  try {
    const dishCategory =
      await dishCategoryService.getAllDishCategoriesDBService();
    if (dishCategory) {
      res.json({
        status: true,
        message: "Dish Categories Found Successfully",
        data: dishCategory,
      });
    } else {
      res.json({ status: false, message: "Dish Categories Not Found" });
    }
  } catch (err) {
    console.error("An error occurred in Get All:", err);
    res
      .status(500)
      .json({ status: false, message: "An error occurred in Get All" });
  }
};

const createDishCategoryController = async (req, res) => {
  try {
    const category = await dishCategoryService.createDishCategoryDBService(
      req.body
    );
    if (category) {
      res.json({
        status: "true",
        message: "Dish category Created Successfully",
        data: category,
      });
    } else {
      res.json({ status: false, message: "Dish Category Not Created" });
    }
  } catch (err) {
    console.error("An Error Occurred", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};
// updateDishCategoryController
// deleteDishCategoryController
// getSingleDishCategoryController

module.exports = {
  getAllDishCategoriesController,
  createDishCategoryController,
  // updateDishCategoryController,
  // deleteDishCategoryController,
  // getSingleDishCategoryController,
};
