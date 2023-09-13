const dishDetailsModel = require("../models/dish.model")

const getAllDishesDBservice = () => {
 return dishDetailsModel.find().then((dish) =>{
    if(dish.length === 0){
        console.log("No Dishes Found")
    }
    return dish;
 }).catch((err) => {
    throw err;
  });
}

module.exports = {
    getAllDishesDBservice,
  };