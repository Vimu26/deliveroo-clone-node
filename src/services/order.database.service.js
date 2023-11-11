const orderDetailsModel = require("../models/order.model");

const getAllOrders = async () => {
  return await orderDetailsModel.find();
};

const createOrder = async (orderDetails) => {
  console.log(orderDetails)
  const orderModelData = new orderDetailsModel({
    user_id : orderDetails.user_id,
    restaurant_id : orderDetails.restaurant_id,
    quantity: orderDetails.quantity,
    order_code: orderDetails.order_code,
    total_price: orderDetails.total_price,
  });
  await orderModelData.save();
  return orderModelData;
};

const updateOrder = async (orderId, orderDetails) => {
  return await orderDetailsModel.findByIdAndUpdate(orderId, orderDetails, {
    new: true,
  });
};

const updateOrderData = async (orderId, orderDetails) => {
  return await orderDetailsModel.findByIdAndUpdate(orderId, orderDetails, {
    new: true,
  });
};

const deleteOrder = async (orderId) => {
  return await orderDetailsModel.findByIdAndDelete(orderId);
};

const getSingleUser = async (orderId) => {
  return await orderDetailsModel.findById(orderId);
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getSingleUser,
  updateOrderData,
};
