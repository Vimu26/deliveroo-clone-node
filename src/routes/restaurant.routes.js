const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.get("/", restaurantController.getAllRestaurantsController);
router.post("/", restaurantController.createRestaurantController);
router.patch("/:id", restaurantController.updateRestaurantController);
router.delete("/:id", restaurantController.deleteRestaurantController);
router.get("/:id", restaurantController.getSingleRestaurantController);

module.exports = router;
