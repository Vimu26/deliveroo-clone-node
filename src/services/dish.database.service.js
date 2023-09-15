const dishDetailsModel = require("../models/dish.model");

const getAllDishesDBservice = () => {
  return dishDetailsModel
    .find()
    .then((dish) => {
      if (dish.length === 0) {
        console.log("No Dishes Found");
      }
      return dish;
    })
    .catch((err) => {
      throw err;
    });
};

const createDishDBService = async (dishDetails) => {
  try {
    const dishModelData = new dishDetailsModel({
      name: dishDetails.name,
      dish_code: dishDetails.dish_code,
      price: dishDetails.price,
      image: dishDetails.image,
    });

    await dishModelData.save();
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


module.exports = {
  getAllDishesDBservice,createDishDBService,
};
