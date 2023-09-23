const orderService = require("../services/order.database.service");

const getAllOrdersController = async (req, res) => {
  try {
    const orderDetails = await orderService.getAllOrderDetailsFromDBService();
    if (orderDetails) {
      res.status(200).json({
        status: true,
        message: "Order Details Found",
        data: orderDetails,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Order Details Not Found" });
    }
  } catch (err) {
    console.error("An error occurred", err);
    res
      .status(500)
      .json({ status: false, message: "Can't Find Order Details" });
  }
};

const createOrderController = async (req, res) => {
  try {
    const order = await orderService.createOrderDBService(req.body);
    if (order) {
      res.json({
        status: true,
        message: "Order Created Successfully",
        data: order,
      });
    } else {
      res.status(404).json({ status: false, message: "Order Not Created" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};

const updateOrderController = async (req, res) => {
  try {
    const UpdatedOrder = await orderService.updateOrderDBService(
      req.params.id,
      req.body,
    );
    if (UpdatedOrder) {
      res.status(200).json({
        status: true,
        message: "Order updated successfully",
        data: UpdatedOrder,
      });
    } else {
      res.status(404).json({ status: false, message: "Order not updated" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};

const deleteOrderController = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrderDBService(req.params.id);
    if (deletedOrder) {
      res
        .status(200)
        .json({ status: true, message: "Order Deleted successfully" });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Order Not Deleted successfully" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

const getSingleOrderController = async (req, res) => {
  try {
    const order = await orderService.getSingleUserDBService(req.params.id);
    if (order) {
      res.status(200).json({
        status: true,
        message: "Order Found successfully",
        data: order,
      });
    } else {
      res.status(404).json({ status: false, message: "Order Doesn't Exist" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "Can't Find Order" });
  }
};

module.exports = {
  createOrderController,
  getAllOrdersController,
  updateOrderController,
  deleteOrderController,
  getSingleOrderController,
};
