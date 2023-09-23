const restaurantService = require("../services/restaurant.database.service");

const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurantDetails =
      await restaurantService.getAllRestaurantsFromDBService();
    if (restaurantDetails) {
      res.status(200).json({
        status: true,
        message: "Restaurants Found Successfully",
        data: restaurantDetails,
      });
    } else {
      res.status(404).json({ status: false, message: "Restaurants Not Found" });
    }
  } catch (err) {
    console.error("An error occurred", err);
    res.status(500).json({ status: false, message: "Can't Find Restaurants" });
  }
};

const getSingleRestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantService.getSingleRestaurantDBService(
      req.params.id,
    );
    if (restaurant) {
      res.status(200).json({
        status: true,
        message: "Restaurant Found Successfully",
        data: restaurant,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Restaurant Does not Exist" });
    }
  } catch (err) {
    console.error("An error occurred", err);
    res.status(500).json({ status: false, message: "Can't Find Restaurant" });
  }
};

const createRestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurantDBService(
      req.body,
    );
    if (restaurant) {
      res.status(201).json({
        status: true,
        message: "Restaurant Created Successfully",
        data: restaurant,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Restaurant Not Created" });
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

const updateRestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurantDBService(
      req.params.id,
      req.body,
    );
    if (restaurant) {
      res.status(200).json({
        status: true,
        message: "Restaurant Updated Successfully",
        data: restaurant,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Restaurant Not Updated" });
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

const deleteRestaurantController = async (req, res) => {
  try {
    const deleteRestaurant = await restaurantService.deleteRestaurantDBService(
      req.params.id,
    );
    if (deleteRestaurant) {
      res
        .status(200)
        .json({ status: true, message: "Restaurant Deleted Successfully" });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Restaurant Not Deleted" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllRestaurantsController,
  createRestaurantController,
  updateRestaurantController,
  deleteRestaurantController,
  getSingleRestaurantController,
};
