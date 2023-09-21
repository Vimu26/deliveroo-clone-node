const orderService = require("../services/order.database.service");
const createOrderController = async (req, res) => {
  try {
    const status = await orderService.createOrderDBService(req.body);
    console.log("Order creation status:", status);

    if (status) {
      res.json({
        status: true,
        message: "Order Created Successfully",
        data: req.body,
      });
    } else {
      res.json({ status: false, message: "Order Not Created" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  createOrderController,
};
