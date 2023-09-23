const dishCategoryService = require("../services/dish-category.database.service");

const getAllDishCategoriesController = async (req, res) => {
  try {
    const dishCategory =
      await dishCategoryService.getAllDishCategoriesDBService();
    if (dishCategory) {
      res.status(200).json({
        status: true,
        message: "Dish Categories Found Successfully",
        data: dishCategory,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Categories Not Found" });
    }
  } catch (err) {
    console.error("An error occurred :", err);
    res.status(500).json({
      status: false,
      message: "An error occurred in Get All Categories",
    });
  }
};

const createDishCategoryController = async (req, res) => {
  try {
    const category = await dishCategoryService.createDishCategoryDBService(
      req.body,
    );
    if (category) {
      res.status(201).json({
        status: true,
        message: "Dish category Created Successfully",
        data: category,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Category Not Created" });
    }
  } catch (err) {
    if (err.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", err);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
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
      res.status(200).json({
        status: true,
        message: "Dish Category updated successfully",
        data: updatedDishCategory,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Category Not updated" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
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
      res.status(200).json({
        status: true,
        message: "Dish Category Deleted successfully",
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Category not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({
      status: false,
      message: "An error occurred in Deleting Dish Category",
    });
  }
};

const getSingleDishCategoryController = async (req, res) => {
  try {
    const category = await dishCategoryService.getSingleDishCategory(
      req.params.id,
    );
    if (category) {
      res.status(200).json({
        status: true,
        message: "Dish Category Found Successfully",
        data: category,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Category Not Found" });
    }
  } catch (err) {
    console.error("An error occurred :", err);
    res.status(500).json({
      status: false,
      message: "An error occurred in Getting Dish Category",
    })
  }
};

module.exports = {
  getAllDishCategoriesController,
  createDishCategoryController,
  updateDishCategoryController,
  deleteDishCategoryController,
  getSingleDishCategoryController,
};
