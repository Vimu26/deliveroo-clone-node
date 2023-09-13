const dishService = require('../services/dish.database.service');


const getAllDishesController = () => async (req,res) => {
    console.log(res)
try{
 const dishDetails = await dishService.getAllDishesDBservice();
 if (dishDetails) {
    res.json({ status: true, message: "No Dishes Found", data: dishDetails });
  } else {
    res.json({ status: false, message: " Dishes Not Found" });
  }
}
catch(err){
    console
    .error(err)
    .status(500)
    .json({ status: false, message: "Can't Find Dishes" });
}
}

module.exports = {
    getAllDishesController,
}