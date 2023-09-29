const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.get("/", restaurantController.getAllRestaurants);
router.post("/", restaurantController.createRestaurant);
router.patch("/:id", restaurantController.updateRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);
router.get("/:id", restaurantController.getSingleRestaurant);

module.exports = router;
