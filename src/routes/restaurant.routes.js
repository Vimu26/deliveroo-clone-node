const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.route("/user/get-all-restaurants").get(restaurantController.getAllRestaurantsController);
router.route("/user/create-restaurant").post(restaurantController.createRestaurantController);
router
  .route("/user/update-restaurant/:id")
  .patch(restaurantController.updateRestaurantController);
router
  .route("/user/delete-restaurant/:id")
  .delete(restaurantController.deleteRestaurantController);

module.exports = router;
