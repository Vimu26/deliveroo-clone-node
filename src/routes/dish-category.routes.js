const express = require("express");
const router = express.Router();

const dishCategoryController = require("../controllers/dish-category.controller");

router.get("/", dishCategoryController.getAllDishCategories);
router.post("/", dishCategoryController.createDishCategory);
router.patch("/:id", dishCategoryController.updateDishCategory);
router.delete("/:id", dishCategoryController.deleteDishCategory);
router.get("/:id", dishCategoryController.getSingleDishCategory);

module.exports = router;
