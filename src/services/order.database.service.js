const orderDetailsModel = require("../models/order.model");

const getAllOrderDetailsFromDBService = async () => {
  return orderDetailsModel
    .find()
    .then((orders) => {
      if (orders.length > 0) {
        return orders;
      } else {
        console.log("No Orders found");
      }
    })
    .catch((err) => {
      throw err;
    });
};

const createOrderDBService = async (orderDetails) => {
  try {
    const orderModelData = new orderDetailsModel({
      quantity: orderDetails.quantity,
      order_code: orderDetails.order_code,
      total_price: orderDetails.total_price,
    });

    await orderModelData.save();
    return orderModelData;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Order already Exists" };
    } else {
      throw error;
    }
  }
};

const updateOrderDBService = async (orderId, orderDetails) => {
  try {
    const order = await orderDetailsModel.findByIdAndUpdate(
      orderId,
      orderDetails,
      { new: true },
    );
    return order;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Order already Exists" };
    } else {
      throw error;
    }
  }
};

const deleteOrderDBService = async (orderId) => {
  try {
    const order = await orderDetailsModel.findByIdAndDelete(orderId);
    if (order) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("An error occurred during user Delete ");
    throw error;
  }
};

const getSingleUserDBService = async (orderId) => {
  try {
    const order = await orderDetailsModel.findById(orderId);
    if (order) {
      return order;
    } else {
      console.log("No Order found");
      return;
    }
  } catch (error) {
    console.error("An error occurred during Getting A Order");
    throw error;
  }
};

module.exports = {
  createOrderDBService,
  getAllOrderDetailsFromDBService,
  updateOrderDBService,
  deleteOrderDBService,
  getSingleUserDBService,
};
