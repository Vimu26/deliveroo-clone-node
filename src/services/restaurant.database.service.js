const restaurantDetailsModel = require("../models/restaurant.model");

const getAllRestaurants = async (params) => {
  return await restaurantDetailsModel.find(params);
};

const getAllRestaurantCards = async () => {
  const page = 1;
  const limit = 2;
  // return await restaurantDetailsModel.find();
  return await restaurantDetailsModel.aggregate([
    {
      $project: {
        _id: 1,
        name: 1,
        image: 1,
        distance: 1,
        minimumPrice: 1,
        deliveryFee: 1,
        rating: 1
      }
    },
    {
      $skip: (page - 1) * limit
    },
    {
      $limit: limit
    }
  ]);
};

const getSingleRestaurant = async (id) => {
  return await restaurantDetailsModel.findById(id);
};

const createRestaurant = async (restaurantDetails) => {
  const restaurantModelData = new restaurantDetailsModel({
    name: restaurantDetails.name,
    contact_number: restaurantDetails.contact_number,
    email: restaurantDetails.email,
    location: restaurantDetails.location,
    opens_at: restaurantDetails.opens_at,
    closes_at: restaurantDetails.closes_at,
    distance: restaurantDetails.distance,
    minimumPrice: restaurantDetails.minimumPrice,
    deliveryFee: restaurantDetails.deliveryFee,
    delivery_time: {
      from: restaurantDetails.delivery_time.from,
      to: restaurantDetails.delivery_time.to
    },
    tags: restaurantDetails.tags,
    rating: restaurantDetails.rating,
    image: restaurantDetails.image
  });
  await restaurantModelData.save();
  return restaurantModelData;
};

const updateRestaurant = async (id, restaurantDetails) => {
  return await restaurantDetailsModel.findByIdAndUpdate(id, restaurantDetails, {
    new: true
  });
};

const updateRestaurantData = async (id, restaurantDetails) => {
  return await restaurantDetailsModel.findByIdAndUpdate(id, restaurantDetails, {
    new: true
  });
};

const deleteRestaurant = async (id) => {
  return await restaurantDetailsModel.findByIdAndDelete(id);
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getSingleRestaurant,
  updateRestaurantData,
  getAllRestaurantCards
};
