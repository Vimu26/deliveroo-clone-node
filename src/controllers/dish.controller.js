const dishService = require("../services/dish.database.service");

const getAllDishes = async (req, res) => {
  try {
    const dishDetails = await dishService.getAllDishes();
    res.status(200).json({
      status: true,
      message: "Dishes Found successfully",
      data: dishDetails,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const getSingleDish = async (req, res) => {
  try {
    const dishDetails = await dishService.getSingleDish(req.params.id);

    res.status(200).json({
      status: true,
      message: "Dish Found Successfully",
      data: dishDetails,
    });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({ status: false, message: "Dish Does Not Exist" });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

const createDish = async (req, res) => {
  try {
    const dish = await dishService.createDish(req.body);
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
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateDish = async (req, res) => {
  try {
    const dish = await dishService.updateDish(req.params.id, req.body);

    res.status(200).json({
      status: true,
      message: "Dish Updated Successfully",
      data: dish,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else if (error.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Dish Does Not Exist",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const deleteDish = async (req, res) => {
  try {
    const deleteDish = await dishService.deleteDish(req.params.id);
    res
      .status(200)
      .json({
        status: true,
        message: "Dish Deleted Successfully",
        data: deleteDish,
      });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Dish Does Not Exist",
      });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish,
  getSingleDish,
};
