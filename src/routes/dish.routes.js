const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");

router.get("/", dishController.getAllDishes);
router.post("/", dishController.createDish);
router.patch("/:id", dishController.updateDish);
router.delete("/:id", dishController.deleteDish);
router.get("/:id", dishController.getSingleDish);

module.exports = router;
