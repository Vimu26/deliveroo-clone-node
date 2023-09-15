const dishService = require("../services/dish.database.service");

const getAllDishesController = async (req, res) => {
  try {
    const dishDetails = await dishService.getAllDishesDBservice();
    if (dishDetails) {
      res.json({ status: true, message: "No Dishes Found", data: dishDetails });
    } else {
      res.json({ status: false, message: " Dishes Not Found" });
    }
  } catch (err) {
    console
      .error(err)
      .status(500)
      .json({ status: false, message: "Can't Find Dishes" });
  }
};

const createDishController = async (req, res) => {
  try {
    const status = await dishService.createDishDBService(req.body);
    console.log("Dish creation status:", status);

    if (status) {
      res.json({
        status: true,
        message: " Dish Created Successfully",
        data: req.body,
      });
    } else {
      res.json({ status: false, message: "Dish Not Created" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};


module.exports = {
  getAllDishesController, createDishController,
};
