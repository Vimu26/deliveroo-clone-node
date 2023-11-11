const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const restaurantSchema = require("../schema/restaurant.schema");

//get all restaurants
router.get("/", restaurantController.getAllRestaurants);

//create restaurants
router.post(
  "/",
  schemaValidationMiddleware.createRestaurantFormatValidation(
    restaurantSchema.createRestaurant
  ),
  restaurantController.createRestaurant
);

//update restaurants partially
router.patch("/:id", restaurantController.updateRestaurant);

//update entire restaurant data
router.put("/:id", restaurantController.updateRestaurantData);

//delete restaurants
router.delete("/:id", restaurantController.deleteRestaurant);

//get single restaurants
router.get("/:id", restaurantController.getSingleRestaurant);

module.exports = router;
