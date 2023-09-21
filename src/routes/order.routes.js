const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

// router.get("/", orderController.getAllOrdersController);
router.post("/", orderController.createOrderController);
// // router.patch("/:id", userController.updateUserController);
// // router.delete("/:id", userController.deleteUserController);

module.exports = router;
