const orderService = require("../services/order.database.service");

const getAllOrders = async (req, res) => {
  try {
    const orderDetails = await orderService.getAllOrders();
    res.status(200).json({
      status: true,
      message: "Order Details Found",
      data: orderDetails,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.json({
      status: true,
      message: "Order Created Successfully",
      data: order,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateOrder = async (req, res) => {
  try {
    const UpdatedOrder = await orderService.updateOrder(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      status: true,
      message: "Order updated successfully",
      data: UpdatedOrder,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else if (error.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Order Does Not Exist",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrder(req.params.id);
    res.status(200).json({
      status: true,
      message: "Order Deleted successfully",
      data: deletedOrder,
    });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Restaurant Does Not Exist",
      });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await orderService.getSingleUser(req.params.id);
    res.status(200).json({
      status: true,
      message: "Order Found successfully",
      data: order,
    });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({ status: false, message: "Order Does Not Exist" });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getSingleOrder,
};
