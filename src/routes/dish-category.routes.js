const express = require("express");
const router = express.Router();

const dishCategoryController = require("../controllers/dish-category.controller");

router.get("/", dishCategoryController.getAllDishCategoriesController);
router.post("/", dishCategoryController.createDishCategoryController);
// router.patch("/:id", dishCategoryController.updateDishCategoryController);
// router.delete("/:id", dishCategoryController.deleteDishCategoryController);
// router.get("/:id", dishCategoryController.getSingleDishCategoryController);

module.exports = router;
