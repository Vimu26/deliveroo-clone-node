const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const orderSchemaFormat = require("../schema/order.schema");

//get all orders
router.get("/", orderController.getAllOrders);

//create a new order
router.post(
  "/",
  schemaValidationMiddleware.createOrderCategoryFormatValidation(
    orderSchemaFormat.createOrder,
  ),
  orderController.createOrder,
);

//update order partially
router.patch("/:id", orderController.updateOrder);

//update entire order data
router.put("/:id", orderController.updateOrderData);

//delete order
router.delete("/:id", orderController.deleteOrder);

//get single orders
router.get("/:id", orderController.getSingleOrder);

module.exports = router;
