const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

//get all restaurants
router.get("/", restaurantController.getAllRestaurants);

//create restaurants
router.post("/", restaurantController.createRestaurant);

//update restaurants partially
router.patch("/:id", restaurantController.updateRestaurant);

//delete restaurants
router.delete("/:id", restaurantController.deleteRestaurant);

//get single restaurants
router.get("/:id", restaurantController.getSingleRestaurant);

module.exports = router;
