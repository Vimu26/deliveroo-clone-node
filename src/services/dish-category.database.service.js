const dishCategoryDetailsModel = require("../models/dish-category.model");

const getAllDishCategoriesDBService = async () => {
  try {
    const dish = await dishCategoryDetailsModel.find();
    if (dish.length > 0) {
      return dish;
    } else {
      console.log("No dish categories Found");
      return;
    }
  } catch (err) {
    console.error(err);
    return;
  }
};

const createDishCategoryDBService = async (dishCategory) => {
    try{
       const category = new dishCategoryDetailsModel({
        name : dishCategory.name,
        image : dishCategory.image,
       });
       await category.save();
       return category;
    }
    catch (err) {
        console.error(err);
        return;
    }
}

module.exports = {
  getAllDishCategoriesDBService,createDishCategoryDBService,
};
