const orderDetailsModel = require("../models/order.model");

const getAllOrders = async () => {
  return await orderDetailsModel.find();
};

const createOrder = async (orderDetails) => {
  const orderModelData = new orderDetailsModel({
    user: orderDetails.user,
    order_items: orderDetails.order_items,
    restaurant: orderDetails.restaurant,
    selected_option: orderDetails.selected_option,
    user_details: {
      name: orderDetails.user_details.name,
      address: orderDetails.user_details.address,
      contact_number: orderDetails.user_details.contact_number,
    },
    payment_method: orderDetails.payment_method,
    total_amount: orderDetails.total_amount,
  });
  return await orderModelData.save();
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
