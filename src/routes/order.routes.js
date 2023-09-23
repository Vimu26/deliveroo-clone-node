const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

router.get("/", orderController.getAllOrdersController);
router.post("/", orderController.createOrderController);
router.patch("/:id", orderController.updateOrderController);
router.delete("/:id", orderController.deleteOrderController);
router.get("/:id", orderController.getSingleOrderController);

module.exports = router;
