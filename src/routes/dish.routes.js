const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");

router.get("/", dishController.getAllDishesController);
router.post("/", dishController.createDishController);
router.patch("/:id", dishController.updateDishController);
router.delete("/:id", dishController.deleteDishController);
router.get("/:id", dishController.getSingleDishController);

module.exports = router;
