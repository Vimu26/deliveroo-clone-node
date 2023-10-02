const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

//get all orders
router.get("/", orderController.getAllOrders);

//create a new order
router.post("/", orderController.createOrder);

//update order partially
router.patch("/:id", orderController.updateOrder);

//delete order
router.delete("/:id", orderController.deleteOrder);

//get single orders
router.get("/:id", orderController.getSingleOrder);

module.exports = router;
