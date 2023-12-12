const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const dishSchemaFormat = require("../schema/dish.schema");

//get all dishes
router.get("/", dishController.getAllDishes);

//get dishes by restaurant_id and dish-category_Id
router.get(
  "/dish-categories/:restaurantId/:dishCategoryId",
  dishController.getCategoryDishes,
);

//create a new dish
router.post(
  "/",
  schemaValidationMiddleware.createDishFormatValidation(
    dishSchemaFormat.createOrder,
  ),
  dishController.createDish,
);

//update a dish partially
router.patch("/:id", dishController.updateDish);

//update entire dish data
router.put("/:id", dishController.updateDishData);

//delete a dish
router.delete("/:id", dishController.deleteDish);

//get single dish
router.get("/:id", dishController.getSingleDish);

module.exports = router;
