const orderService = require("../services/order.database.service");

const getAllOrders = async (req, res) => {
  try {
    const orderDetails = await orderService.getAllOrders();
    res.status(200).json({
      status: true,
      message: "Order Details Found",
      data: orderDetails
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    return res.status(201).json({
      status: true,
      message: "Order Created Successfully",
      data: order
    });
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      return res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
        error: error.message
      });
    } else {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateOrder = async (req, res) => {
  try {
    const UpdatedOrder = await orderService.updateOrder(req.params.id, {
      quantity: req.body.quantity,
      total_price: req.body.total_price
    });

    res.status(200).json({
      status: true,
      message: "Order updated successfully",
      data: UpdatedOrder
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message
    });
  }
};

const updateOrderData = async (req, res) => {
  try {
    const UpdatedOrder = await orderService.updateOrderData(req.params.id, {
      quantity: req.body.quantity,
      total_price: req.body.total_price
    });

    res.status(200).json({
      status: true,
      message: "Order updated successfully",
      data: UpdatedOrder
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrder(req.params.id);
    res.status(200).json({
      status: true,
      message: "Order Deleted successfully",
      data: deletedOrder
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    return res.status(500).json({ status: false, message: err.message });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await orderService.getSingleUser(req.params.id);
    res.status(200).json({
      status: true,
      message: "Order Found successfully",
      data: order
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  updateOrderData
};
