const restaurantService = require("../services/restaurant.database.service");

const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurantDetails =
      await restaurantService.getAllRestaurantsFromDBService();
    if (restaurantDetails) {
      res.json({
        status: true,
        message: "Restaurants Found Successfully",
        data: restaurantDetails,
      });
    } else {
      res.json({ status: false, message: "Restaurants Not Found" });
    }
  } catch (err) {
    console.error("Error occurs while getting All Restaurants", err);
    res.status(500).json({ status: false, message: "Can't Find Restaurants" });
  }
};

const getSingleRestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantService.getSingleRestaurantDBService(
      req.params.id,
    );
    if (restaurant) {
      res.json({
        status: true,
        message: "Restaurant Found Successfully",
        data: restaurant,
      });
    } else {
      res.json({ status: false, message: "Restaurant Does not Exist" });
    }
  } catch (err) {
    console.error("Error occurs while getting Restaurant", err);
    res.status(500).json({ status: false, message: "Can't Find Restaurant" });
  }
};

const createRestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurantDBService(
      req.body,
    );
    if (restaurant) {
      res.json({
        status: true,
        message: "Restaurant Created Successfully",
        data: restaurant,
      });
    } else {
      res.json({ status: false, message: "Restaurant Not Created" });
    }
  } catch (error) {
    console.error("An error occurred");
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const updateRestaurantController = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurantDBService(
      req.params.id,
      req.body,
    );

    if (restaurant) {
      res.json({
        status: true,
        message: "Restaurant Updated Successfully",
        data: restaurant,
      });
    } else {
      res.json({ status: false, message: "Restaurant Not Updated" });
    }
  } catch (err) {
    console.error("An error occurred");
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteRestaurantController = async (req, res) => {
  try {
    const deleteRestaurant = await restaurantService.deleteRestaurantDBService(
      req.params.id,
    );

    if (deleteRestaurant) {
      res.json({ status: true, message: "Restaurant Deleted Successfully" });
    } else {
      res.json({ status: false, message: "Restaurant Not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred");
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  getAllRestaurantsController,
  createRestaurantController,
  updateRestaurantController,
  deleteRestaurantController,
  getSingleRestaurantController,
};
