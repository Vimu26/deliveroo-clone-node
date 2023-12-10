const dishDetailsModel = require("../models/dish.model");

const getAllDishes = async () => {
  return await dishDetailsModel.find();
};

const getCategoryDishes = async (restaurantId,dishCategoryId) => {
  const allDishes = await dishDetailsModel.find();
  const restaurantDishes = allDishes.filter((dishes)=>{
    dishes.restaurant_id.toString() === restaurantId.toString()
  })
  if(restaurantDishes.length > 0){
    const categoryDishes =restaurantDishes.filter((dishes)=>{
      dishes.dish_category_id.toString() === dishCategoryId.toString()
    })
    return categoryDishes
  }
};

const getSingleDish = async (id) => {
  return await dishDetailsModel.findById(id);
};

const createDish = async (dishDetails) => {
  const dishModelData = new dishDetailsModel({
    restaurant_id: dishDetails.restaurant_id,
    order_id: dishDetails.order_id,
    dish_category_id: dishDetails.dish_category_id,
    name: dishDetails.name,
    description : dishDetails.description,
    price: dishDetails.price,
    image: dishDetails.image,
    calories: dishDetails.calories,
  });
  await dishModelData.save();
  return dishModelData;
};

const updateDish = async (id, dishDetails) => {
  return await dishDetailsModel.findByIdAndUpdate(id, dishDetails, {
    new: true,
  });
};

const updateDishData = async (id, dishDetails) => {
  return await dishDetailsModel.findByIdAndUpdate(id, dishDetails, {
    new: true,
  });
};

const deleteDish = async (id) => {
  return await dishDetailsModel.findByIdAndDelete(id);
};

module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish,
  getSingleDish,
  updateDishData,
  getCategoryDishes
};
