const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");

router.get("/get-all-dishes", dishController.getAllDishesController);
router.post("/create-dish", dishController.createDishController);
router.patch("/update-dish/:id", dishController.updateDishController);
router.delete("/delete-dish/:id", dishController.deleteDishController);

module.exports = router;
