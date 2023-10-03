const restaurantDetailsModel = require("../models/restaurant.model");

const getAllRestaurants = async () => {
  const restaurants = await restaurantDetailsModel.find();
  return restaurants;
};

const getSingleRestaurant = async (id) => {
  const restaurants = await restaurantDetailsModel.findById(id);
  return restaurants;
};

const createRestaurant = async (restaurantDetails) => {
  const restaurantModelData = new restaurantDetailsModel({
    name: restaurantDetails.name,
    contact_number: restaurantDetails.contact_number,
    email: restaurantDetails.email,
    address: restaurantDetails.address,
  });
  await restaurantModelData.save();
  return restaurantModelData;
};

const updateRestaurant = async (id, restaurantDetails) => {
  const updatedRestaurant = await restaurantDetailsModel.findByIdAndUpdate(
    id,
    restaurantDetails,
    { new: true },
  );
  return updatedRestaurant;
};

const updateRestaurantData = async (id, restaurantDetails) => {
  const updatedRestaurant = await restaurantDetailsModel.findByIdAndUpdate(
    id,
    restaurantDetails,
    { new: true },
  );
  return updatedRestaurant;
};

const deleteRestaurant = async (id) => {
  const restaurant = await restaurantDetailsModel.findByIdAndDelete(id);
  return restaurant;
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getSingleRestaurant,
  updateRestaurantData,
};
