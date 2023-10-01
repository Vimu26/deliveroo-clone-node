const orderDetailsModel = require("../models/order.model");

const getAllOrders = async () => {
  const orders = await orderDetailsModel.find();
  return orders;
};

const createOrder = async (orderDetails) => {
  const orderModelData = new orderDetailsModel({
    quantity: orderDetails.quantity,
    order_code: orderDetails.order_code,
    total_price: orderDetails.total_price,
  });
  await orderModelData.save();
  return orderModelData;
};

const updateOrder = async (orderId, orderDetails) => {
  const order = await orderDetailsModel.findByIdAndUpdate(
    orderId,
    orderDetails,
    { new: true },
  );
  return order;
};

const deleteOrder = async (orderId) => {
  const order = await orderDetailsModel.findByIdAndDelete(orderId);
  return order;
};

const getSingleUser = async (orderId) => {
  const order = await orderDetailsModel.findById(orderId);
  return order;
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getSingleUser,
};
