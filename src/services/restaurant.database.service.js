const restaurantDetailsModel = require("../models/restaurant.model");

const getAllRestaurantsFromDBService = () => {
  return restaurantDetailsModel
    .find()
    .then((restaurants) => {
      if (restaurants.length === 0) {
        console.log("No Restaurants found");
      }
      return restaurants;
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
    }
    else {
      console.log("No restaurant Exists " );
      return;
    }
  }
  catch (err) {
    console.log("An error occurred during getting Restaurant");
    return;
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
    return true;
  } catch (error) {
    console.error(error);
    return false;
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
    console.error("An error occurred during user update:", error);
    return;
  }
};

const deleteRestaurantDBService = async (id) => {
  try {
    await restaurantDetailsModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.error("An error occurred during user Delete:", error);
    return false;
  }
};

module.exports = {
  getAllRestaurantsFromDBService,
  createRestaurantDBService,
  updateRestaurantDBService,
  deleteRestaurantDBService,
  getSingleRestaurantDBService
};
