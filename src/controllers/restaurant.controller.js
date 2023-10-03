const restaurantService = require("../services/restaurant.database.service");

const getAllRestaurants = async (req, res) => {
  try {
    const restaurantDetails = await restaurantService.getAllRestaurants();
    res.status(200).json({
      status: true,
      message: "Restaurants Found Successfully",
      data: restaurantDetails,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const getSingleRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.getSingleRestaurant(
      req.params.id,
    );
    res.status(200).json({
      status: true,
      message: "Restaurant Found Successfully",
      data: restaurant,
    });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res
        .status(404)
        .json({ status: false, message: "Restaurant Does Not Exist" });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

const createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurant({
      name: req.body.name,
      contact_number: req.body.contact_number,
      email: req.body.email,
      address: req.body.address,
    });
    res.status(201).json({
      status: true,
      message: "Restaurant Created Successfully",
      data: restaurant,
    });
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

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurant(req.params.id, {
      name: req.body.name,
      contact_number: req.body.contact_number,
      email: req.body.email,
      address: req.body.address,
    });
    res.status(200).json({
      status: true,
      message: "Restaurant Updated Successfully",
      data: restaurant,
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
        message: "Restaurant Does Not Exist",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateRestaurantData = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurantData(
      req.params.id,
      {
        name: req.body.name,
        contact_number: req.body.contact_number,
        email: req.body.email,
        address: req.body.address,
      },
    );
    res.status(200).json({
      status: true,
      message: "Restaurant Updated Successfully",
      data: restaurant,
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
        message: "Restaurant Does Not Exist",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deleteRestaurant = await restaurantService.deleteRestaurant(
      req.params.id,
    );
    res.status(200).json({
      status: true,
      message: "Restaurant Deleted Successfully",
      data: deleteRestaurant,
    });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "Restaurant Does Not Exist",
      });
    } else {
      console.error("An error occurred", err);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  updateRestaurantData,
  getSingleRestaurant,
};
