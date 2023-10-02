const express = require("express");
const router = express.Router();

const dishCategoryController = require("../controllers/dish-category.controller");

//get all dish categories
router.get("/", dishCategoryController.getAllDishCategories);

//create a new dish category
router.post("/", dishCategoryController.createDishCategory);

//update a dish category partially
router.patch("/:id", dishCategoryController.updateDishCategory);

//delete a dish category
router.delete("/:id", dishCategoryController.deleteDishCategory);

//get single dish category
router.get("/:id", dishCategoryController.getSingleDishCategory);

module.exports = router;
