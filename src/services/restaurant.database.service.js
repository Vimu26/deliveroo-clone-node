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

const createRestaurantDBService = async (restaurantDetails) => {
  try {
    const restaurantModelData = new restaurantDetailsModel({
      first_name: restaurantDetails.first_name,
      last_name: restaurantDetails.last_name,
      contact_number: restaurantDetails.contact_number,
      email: restaurantDetails.email,
      password: restaurantDetails.password,
    });

    await restaurantModelData.save();
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateRestaurantDBService = async (id, restaurantDetails) => {
  try {
    const updatedRestaurant = await restaurantDetailsModel.findByIdAndUpdate(
      id,
      restaurantDetails,
      { new: true }
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
};
