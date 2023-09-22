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
      req.body,
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

const updateDishCategoryController = async (req, res) => {
  try {
    const updatedDishCategory =
      await dishCategoryService.updateDishCategoryDBService(
        req.params.id,
        req.body,
      );
    if (updatedDishCategory) {
      res.json({
        status: true,
        message: "Dish Category updated successfully",
        data: updatedDishCategory,
      });
    } else {
      res.json({ status: false, message: "Dish Category not updated" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteDishCategoryController = async (req, res) => {
  try {
    const deletedDishCategory =
      await dishCategoryService.deleteDishCategoryDBService(
        req.params.id,
        req.body,
      );
    if (deletedDishCategory) {
      res.json({
        status: true,
        message: "Dish Category Deleted successfully",
        data: deletedDishCategory,
      });
    } else {
      res.json({ status: false, message: "Dish Category not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const getSingleDishCategoryController = async (req, res) => {
  try {
    const category = await dishCategoryService.getSingleDishCategory(
      req.params.id,
    );
    if (category) {
      res.json({
        status: true,
        message: "Dish Category Found Successfully",
        data: category,
      });
    } else {
      res.json({ status: false, message: "Dish Category Not Found" });
    }
  } catch (err) {
    console.error("An error occurred :", err);
    return;
  }
};

module.exports = {
  getAllDishCategoriesController,
  createDishCategoryController,
  updateDishCategoryController,
  deleteDishCategoryController,
  getSingleDishCategoryController,
};
