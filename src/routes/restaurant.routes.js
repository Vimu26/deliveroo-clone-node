const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const restaurantSchema = require("../schema/restaurant.schema");
// const tokenValidationMiddleware = require("../middleware/token.validation.middleware");

// router.use(tokenValidationMiddleware.validateToken);

//get all restaurants
router.get("/", restaurantController.getAllRestaurants);

//get all for Cards
router.get("/view-restaurants", restaurantController.getAllRestaurantCards);

//check Restaurant Details
router.post(
  "/check-restaurant-details",
  schemaValidationMiddleware.createRestaurantFormatValidation(
    restaurantSchema.createRestaurant,
  ),
  restaurantController.checkRestaurantDetails,
);

//create restaurants
router.post(
  "/",
  schemaValidationMiddleware.createRestaurantFormatValidation(
    restaurantSchema.createRestaurant,
  ),
  restaurantController.createRestaurant,
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
