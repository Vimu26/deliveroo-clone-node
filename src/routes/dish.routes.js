const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const tokenValidationMiddleware = require("../middleware/token.validation.middleware");
const dishSchemaFormat = require("../schema/dish.schema");

// router.use(tokenValidationMiddleware.validateToken);

//get all dishes
router.get(
  "/",
  tokenValidationMiddleware.validateToken,
  dishController.getAllDishes,
);

//create a new dish
router.post(
  "/",
  schemaValidationMiddleware.createDishFormatValidation(
    dishSchemaFormat.createDish,
  ),
  dishController.createDish,
);

router.post(
  "/check-dishes-details",
  schemaValidationMiddleware.checkDishFormatValidation(
    dishSchemaFormat.createDish,
  ),
  dishController.checkDishDetails,
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
