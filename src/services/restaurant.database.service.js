const restaurantDetailsModel = require("../models/restaurant.model");

const getAllRestaurantsFromDBService = () => {
  return restaurantDetailsModel
    .find()
    .then((restaurants) => {
      if (restaurants.length === 0) {
        console.log("No Restaurants found");
      } else {
        return restaurants;
      }
    })
    .catch((err) => {
      throw err;
    });
};

const getSingleRestaurantDBService = async (id) => {
  try {
    const restaurant = await restaurantDetailsModel.findById(id);
    if (restaurant) {
      return restaurant;
    } else {
      console.log("No restaurant Exists ");
      return;
    }
  } catch (err) {
    console.log("An error occurred during getting Restaurant");
    throw err;
  }
};

const createRestaurantDBService = async (restaurantDetails) => {
  try {
    const restaurantModelData = new restaurantDetailsModel({
      name: restaurantDetails.name,
      contact_number: restaurantDetails.contact_number,
      email: restaurantDetails.email,
      address: restaurantDetails.address,
    });

    await restaurantModelData.save();
    return restaurantModelData;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Restaurant already Exists" };
    } else {
      throw error;
    }
  }
};

const updateRestaurantDBService = async (id, restaurantDetails) => {
  try {
    const updatedRestaurant = await restaurantDetailsModel.findByIdAndUpdate(
      id,
      restaurantDetails,
      { new: true },
    );
    return updatedRestaurant;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "Restaurant already Exists" };
    } else {
      throw error;
    }
  }
};

const deleteRestaurantDBService = async (id) => {
  try {
    const restaurant = await restaurantDetailsModel.findByIdAndDelete(id);
    if (restaurant) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("An error occurred during Restaurant Delete ");
    throw error;
  }
};

module.exports = {
  getAllRestaurantsFromDBService,
  createRestaurantDBService,
  updateRestaurantDBService,
  deleteRestaurantDBService,
  getSingleRestaurantDBService,
};
