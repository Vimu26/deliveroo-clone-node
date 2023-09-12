const userService = require("../services/restaurant.database.service");

const getAllRestaurantsController = async (req, res) => {
  try {
    const userDetails = await userService.getAllRestaurantsFromDBService();
    if (userDetails) {
      res.json({ status: true, message: "Restaurants Found", data: userDetails });
    } else {
      res.json({ status: false, message: " Restaurants Not Found" });
    }
  } catch (err) {
    console
      .error(err)
      .status(500)
      .json({ status: false, message: "Can't Find Restaurants" });
  }
};

const createRestaurantController = async (req, res) => {
  try {
    const status = await userService.createRestaurantDBService(req.body);
    console.log("Restaurant creation status:", status);

    if (status) {
      res.json({
        status: true,
        message: "Restaurant Created Successfully",
        data: req.body,
      });
    } else {
      res.json({ status: false, message: "Restaurant Not Created" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const updateRestaurantController = async (req, res) => {
  try {
    const user = await userService.updateRestaurantDBService(req.params.id, req.body);

    if (user) {
      res.json({
        status: true,
        message: "Restaurant Updated Successfully",
        data: user,
      });
    } else {
      res.json({ status: false, message: "Restaurant Not Updated" });
    }
  } catch (err) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteRestaurantController = async (req, res) => {
  try {
    const deleteUser = await userService.deleteRestaurantDBService(req.params.id);

    if (deleteUser) {
      res.json({ status: true, message: "Restaurant Deleted Successfully" });
    } else {
      res.json({ status: false, message: "Restaurant Not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  getAllRestaurantsController,
  createRestaurantController,
  updateRestaurantController,
  deleteRestaurantController,
};
