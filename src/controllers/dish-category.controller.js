const dishCategoryService = require("../services/dish-category.database.service");

const getAllDishCategories = async (req, res) => {
  try {
    const dishCategory = await dishCategoryService.getAllDishCategories();
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
      name: req.body.name,
      image: req.body.image,
    });
    res.status(201).json({
      status: true,
      message: "Dish category Created Successfully",
      data: category,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateDishCategory = async (req, res) => {
  try {
    const updatedDishCategory = await dishCategoryService.updateDishCategory(
      req.params.id,
      {
        name: req.body.name,
        image: req.body.image,
      },
    );
    res.status(200).json({
      status: true,
      message: "Dish Category updated successfully",
      data: updatedDishCategory,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else if (error.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Dish Category Does Not Exist",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
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
    if (err.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Dish Category Does Not Exist",
      });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
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
    if (err.messageFormat == undefined) {
      res
        .status(404)
        .json({ status: false, message: "Dish Category Does Not Exist" });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

module.exports = {
  getAllDishCategories,
  createDishCategory,
  updateDishCategory,
  deleteDishCategory,
  getSingleDishCategory,
};
