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
        .status(200)
        .json({ status: false, message: "Order Details Not Found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ status: false, message: "Can't Find Order Details" });
  }
};

const createOrderController = async (req, res) => {
  try {
    const order = await orderService.createOrderDBService(req.body);
    console.log("Order creation status: true");

    if (order) {
      res.json({
        status: true,
        message: "Order Created Successfully",
        data: order,
      });
    } else {
      res.json({ status: false, message: "Order Not Created" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const updateOrderController = async (req, res) => {
  try {
    const UpdatedOrder = await orderService.updateOrderDBService(
      req.params.id,
      req.body,
    );
    if (UpdatedOrder) {
      res.json({
        status: true,
        message: "Order updated successfully",
        data: UpdatedOrder,
      });
    } else {
      res.json({ status: false, message: "Order not updated successfully" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteOrderController = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrderDBService(req.params.id);
    if (deletedOrder) {
      res.json({ status: true, message: "Order Deleted successfully" });
    } else {
      res.json({ status: false, message: "Order Not Deleted successfully" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await orderService.getSingleUserDBService(req.params.id);
    if (order) {
      res.json({
        status: true,
        message: "Order Found successfully",
        data: order,
      });
    } else {
      res.status(500).json({ status: false, message: "Order Doesn't Exist" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  createOrderController,
  getAllOrdersController,
  updateOrderController,
  deleteOrderController,
  getSingleOrder,
};
