const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.get(
  "/get-all-restaurants",
  restaurantController.getAllRestaurantsController,
);
router.post(
  "create-restaurant",
  restaurantController.createRestaurantController,
);
router.patch(
  "/update-restaurant/:id",
  restaurantController.updateRestaurantController,
);
router.delete(
  "/delete-restaurant/:id",
  restaurantController.deleteRestaurantController,
);

module.exports = router;
