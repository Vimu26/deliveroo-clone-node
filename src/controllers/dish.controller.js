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
    console.error("An error occurred", err.message);
    return res.status(500).json({ status: false, message: err.message });
  }
};

const createDish = async (req, res) => {
  try {
    const dish = await dishService.createDish({
      name: req.body.name,
      dish_code: req.body.dish_code,
      price: req.body.price,
      image: req.body.image,
    });
    if (!dish) {
      return res
        .status(404)
        .json({ status: false, message: "Dish Not Created" });
    }
    res.status(201).json({
      status: true,
      message: "Dish Created Successfully",
      data: dish,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message,
    });
  }
};

const updateDish = async (req, res) => {
  try {
    const dish = await dishService.updateDish(req.params.id, {
      name: req.body.name,
      dish_code: req.body.dish_code,
      price: req.body.price,
      image: req.body.image,
    });

    res.status(200).json({
      status: true,
      message: "Dish Updated Successfully",
      data: dish,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
    });
  }
};

const updateDishData = async (req, res) => {
  try {
    const dish = await dishService.updateDishData(req.params.id, req.body);

    res.status(200).json({
      status: true,
      message: "Dish Updated Successfully",
      data: dish,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
    });
  }
};

const deleteDish = async (req, res) => {
  try {
    const deleteDish = await dishService.deleteDish(req.params.id);
    res.status(200).json({
      status: true,
      message: "Dish Deleted Successfully",
      data: deleteDish,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    return res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  updateDishData,
  deleteDish,
  getSingleDish,
};
