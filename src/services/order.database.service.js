const orderDetailsModel = require("../models/order.model");

const getAllOrderDetailsFromDBService = async () => {
  return orderDetailsModel
    .find()
    .then((orders) => {
      if (orders.length > 0) {
        return orders;
      } else {
        console.log("No orders found");
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
    console.error(error);
    throw error;
  }
};

const updateOrderDBService = async (orderId, orderDetails) => {
  try {
    const order = await orderDetailsModel.findByIdAndUpdate(
      orderId,
      orderDetails,
      { new: true }
    );
    return order;
  } catch (error) {
    console.error(error);
    return;
  }
};

const deleteOrderDBService = async (orderId) => {
  try{
   await orderDetailsModel.findByIdAndDelete(orderId);
   return true;
  }
  catch (error) {
    console.error("An error occurred during user Delete:", error);
    return false;
  }
};

const getSingleUserDBService = async (orderId) => {
 try {
  const order = await orderDetailsModel.findById(orderId);
  if (order) {
    return order;
  } else {
    console.log("No Order found");
  }
 }
 catch (error) {
  console.error("An error occurred")
 }
};

module.exports = {
  createOrderDBService,
  getAllOrderDetailsFromDBService,
  updateOrderDBService,
  deleteOrderDBService,
  getSingleUserDBService,
};
