const restaurantService = require("../services/restaurant.database.service");

const getAllRestaurants = async (req, res) => {
  try {
    const { restaurant_name } = req.query;
    let queryParams = {};
    if (restaurant_name) {
      queryParams = { name: { $regex: restaurant_name, $options: "i" } };
    }
    const restaurantDetails =
      await restaurantService.getAllRestaurants(queryParams);
    res.status(200).json({
      status: true,
      message: "Restaurants Found Successfully",
      data: restaurantDetails
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const getAllRestaurantCards = async (req, res) => {
  try {
    const {
      restaurant_name,
      page,
      limit,
      rating,
      minimum_price,
      maximum_price,
      delivery_fee,
      distance
    } = req.query;
    let queryParams = {};
    if (restaurant_name) {
      queryParams = {
        ...queryParams,
        name: { $regex: restaurant_name, $options: "i" }
      };
      if (rating) {
        queryParams = { ...queryParams, rating: rating };
      }
      if (minimum_price) {
        queryParams = { ...queryParams, minimumPrice: { $gt: minimum_price } };
      }
      if (maximum_price) {
        queryParams = { ...queryParams, minimumPrice: { $lt: minimum_price } };
      }
      if (delivery_fee) {
        queryParams = { ...queryParams, deliveryFee: { $lt: delivery_fee } };
      }
      if (distance) {
        queryParams = { ...queryParams, distance: { $lt: distance } };
      }
    }
    const restaurantDetails = await restaurantService.getAllRestaurantCards(
      queryParams,
      parseInt(page),
      parseInt(limit)
    );
    res.status(200).json({
      status: true,
      message: "Restaurants Found Successfully",
      data: restaurantDetails
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const checkRestaurantDetails = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      message: "Restaurants Details Checked Successfully",
      code: 201
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const getSingleRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.getSingleRestaurant(
      req.params.id
    );
    res.status(200).json({
      status: true,
      message: "Restaurant Found Successfully",
      data: restaurant
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    return res.status(500).json({ status: false, message: err.message });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurant({
      name: req.body.name,
      contact_number: req.body.contact_number,
      email: req.body.email,
      location: req.body.location,
      opens_at: req.body.opens_at,
      closes_at: req.body.closes_at,
      distance: req.body.distance,
      minimumPrice: req.body.minimumPrice,
      deliveryFee: req.body.deliveryFee,
      delivery_time: {
        from: req.body.delivery_time.from,
        to: req.body.delivery_time.to
      },
      tags: req.body.tags,
      rating: req.body.rating,
      image: req.body.image
    });
    res.status(201).json({
      status: true,
      message: "Restaurant Created Successfully",
      data: restaurant
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurant(req.params.id, {
      name: req.body.name,
      contact_number: req.body.contact_number,
      email: req.body.email,
      location: req.body.location,
      opens_at: req.body.opens_at,
      closes_at: req.body.closes_at,
      distance: req.body.distance,
      minimumPrice: req.body.minimumPrice,
      deliveryFee: req.body.deliveryFee,
      delivery_time: {
        from: req.body.tags.delivery_time.from,
        to: req.body.tags.delivery_time.to
      },
      tags: req.body.tags,
      rating: req.body.rating,
      image: req.body.image
    });
    res.status(200).json({
      status: true,
      message: "Restaurant Updated Successfully",
      data: restaurant
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message
    });
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
        location: req.body.location,
        opens_at: req.body.opens_at,
        closes_at: req.body.closes_at,
        distance: req.body.distance,
        minimumPrice: req.body.minimumPrice,
        deliveryFee: req.body.deliveryFee,
        delivery_time: {
          from: req.body.tags.delivery_time.from,
          to: req.body.tags.delivery_time.to
        },
        tags: req.body.tags,
        rating: req.body.rating,
        image: req.body.image
      }
    );
    res.status(200).json({
      status: true,
      message: "Restaurant Updated Successfully",
      data: restaurant
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message
    });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deleteRestaurant = await restaurantService.deleteRestaurant(
      req.params.id
    );
    res.status(200).json({
      status: true,
      message: "Restaurant Deleted Successfully",
      data: deleteRestaurant
    });
  } catch (err) {
    console.error("An error occurred", err);
    return res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  updateRestaurantData,
  getSingleRestaurant,
  checkRestaurantDetails,
  getAllRestaurantCards
};
