const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.route("/restaurant/get-all-restaurants").get(restaurantController.getAllRestaurantsController);
router.route("/restaurant/create-restaurant").post(restaurantController.createRestaurantController);
router
  .route("/restaurant/update-restaurant/:id")
  .patch(restaurantController.updateRestaurantController);
router
  .route("/restaurant/delete-restaurant/:id")
  .delete(restaurantController.deleteRestaurantController);

module.exports = router;
