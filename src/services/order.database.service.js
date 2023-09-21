const orderDetailsModel = require("../models/order.model");

const createOrderDBService = async (orderDetails) => {
  try {
    const orderModelData = new orderDetailsModel({
      quantity: orderDetails.quantity,
      order_code: orderDetails.order_code,
      total_price: orderDetails.total_price,
    });

    await orderModelData.save();
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  createOrderDBService,
};
