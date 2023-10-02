const express = require("express");
const router = express.Router();

const dishController = require("../controllers/dish.controller");

//get all dishes
router.get("/", dishController.getAllDishes);

//create a new dish
router.post("/", dishController.createDish);

//update a dish partially
router.patch("/:id", dishController.updateDish);

//update entire dish data
router.put("/:id", dishController.updateDish);


//delete a dish
router.delete("/:id", dishController.deleteDish);

//get single dish
router.get("/:id", dishController.getSingleDish);

module.exports = router;
