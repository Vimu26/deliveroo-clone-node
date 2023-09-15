const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");

router.route("/dish/get-all-dishes").get(dishController.getAllDishesController);
router.route("/dish/create-dish").post(dishController.createDishController);
// router
//   .route("/dish/update-dish/:id")
//   .patch(dishController.updateDishController);
// router
//   .route("/dish/delete-dish/:id")
//   .delete(dishController.deleteDishController);

module.exports = router;
