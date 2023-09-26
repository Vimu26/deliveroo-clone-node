const dishService = require("../services/dish.database.service");

const getAllDishesController = async (req, res) => {
  try {
    const dishDetails = await dishService.getAllDishesService();
    if (dishDetails) {
      res
        .status(200)
        .json({ status: true, message: "Dishes Found", data: dishDetails });
    } else {
      res.status(404).json({ status: false, message: "Dishes Not Found" });
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
      res.status(200).json({
        status: true,
        message: "Dish Found Successfully",
        data: dishDetails,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Doesn't Exist" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: "Can't Find Dish" });
    console.error("An error occurred:", err);
  }
};

const createDishController = async (req, res) => {
  try {
    const dish = await dishService.createDishService(req.body);
    if (dish) {
      res.status(201).json({
        status: true,
        message: "Dish Created Successfully",
        data: dish,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Not Created" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};

const updateDishController = async (req, res) => {
  try {
    const dish = await dishService.updateDishService(req.params.id, req.body);

    if (dish) {
      res.status(200).json({
        status: true,
        message: "Dish Updated Successfully",
        data: dish,
      });
    } else {
      res.status(404).json({ status: false, message: "Dish Not Updated" });
    }
  } catch (err) {
    if (err.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", err);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};

const deleteDishController = async (req, res) => {
  try {
    const deleteDish = await dishService.deleteDishService(req.params.id);

    if (deleteDish) {
      res
        .status(200)
        .json({ status: true, message: "Dish Deleted Successfully" });
    } else {
      res.status(404).json({ status: false, message: "Dish Not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllDishesController,
  createDishController,
  updateDishController,
  deleteDishController,
  getSingleDishController,
};
