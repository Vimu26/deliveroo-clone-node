const express = require("express");
const router = express.Router();

const dishCategoryController = require("../controllers/dish-category.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const dishCategorySchemaFormat = require("../schema/dish-category.schema");
const tokenValidationMiddleware = require("../middleware/token.validation.middleware");

// router.use(tokenValidationMiddleware.validateToken);

//get all dish categories
router.get(
  "/",
  tokenValidationMiddleware.validateToken,
  dishCategoryController.getAllDishCategories,
);

//create a new dish category
router.post(
  "/",
  schemaValidationMiddleware.createDishCategoryFormatValidation(
    dishCategorySchemaFormat.createDishCategory,
  ),
  dishCategoryController.createDishCategory,
);

//check dish category
router.post(
  "/check-dish-categories-details",
  schemaValidationMiddleware.createDishCategoryFormatValidation(
    dishCategorySchemaFormat.checkDishCategory,
  ),
  dishCategoryController.checkDishCategoriesDetails,
);

//update a dish category partially
router.patch(
  "/:id",
  tokenValidationMiddleware.validateToken,
  dishCategoryController.updateDishCategory,
);

//update entire dish data
router.put(
  "/:id",
  tokenValidationMiddleware.validateToken,
  dishCategoryController.updateDishCategoryData,
);

//delete a dish category
router.delete(
  "/:id",
  tokenValidationMiddleware.validateToken,
  dishCategoryController.deleteDishCategory,
);

//get single dish category
router.get(
  "/:id",
  tokenValidationMiddleware.validateToken,
  dishCategoryController.getSingleDishCategory,
);

module.exports = router;
