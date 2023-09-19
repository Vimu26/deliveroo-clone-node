const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.get("/", restaurantController.getAllRestaurantsController);
router.post("/", restaurantController.createRestaurantController);
router.patch("/:id", restaurantController.updateRestaurantController);
router.delete("/:id", restaurantController.deleteRestaurantController);

module.exports = router;
