const dishService = require("../services/dish.database.service");

const getAllDishesController = async (req, res) => {
  try {
    const dishDetails = await dishService.getAllDishesService();
    if (dishDetails) {
      res.json({ status: true, message: "Dishes Found", data: dishDetails });
    } else {
      res.json({ status: false, message: "Dishes Not Found" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: "Can't Find Dishes" });
    console.error("An error occurred:", err);
  }
};

const getSingleDishController = async (req, res) => {
  try {
    const dishDetails = await dishService.getSingleDishService(req.params.id);
    if (dishDetails) {
      res.json({ status: true, message: "Dish Found", data: dishDetails });
    } else {
      res.json({ status: false, message: "Dish Not Found" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: "Can't Find Dish" });
    console.error("An error occurred:", err);
  }
};

const createDishController = async (req, res) => {
  try {
    const status = await dishService.createDishService(req.body);
    console.log("Dish creation status:", status);

    if (status) {
      res.json({
        status: true,
        message: "Dish Created Successfully",
        data: req.body,
      });
    } else {
      res.json({ status: false, message: "Dish Not Created" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const updateDishController = async (req, res) => {
  try {
    const dish = await dishService.updateDishService(req.params.id, req.body);

    if (dish) {
      res.json({
        status: true,
        message: "Dish Updated Successfully",
        data: dish,
      });
    } else {
      res.json({ status: false, message: "Dish Not Updated" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteDishController = async (req, res) => {
  try {
    const deleteDish = await dishService.deleteDishService(req.params.id);

    if (deleteDish) {
      res.json({ status: true, message: "Dish Deleted Successfully" });
    } else {
      res.json({ status: false, message: "Dish Not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  getAllDishesController,
  createDishController,
  updateDishController,
  deleteDishController,
  getSingleDishController,
};
