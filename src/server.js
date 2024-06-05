//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bearerToken = require("express-bearer-token");

//import from modules
const userRoutes = require("./routes/user.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const dishRoutes = require("./routes/dish.routes");
const orderRoutes = require("./routes/order.routes");
const dishCategories = require("./routes/dish-category.routes");
const commonRoutes = require("./routes/common.routes");
const authRoutes = require("./routes/auth.routes");
const riderRotes = require("./routes/rider.routes")

//use express
const server = express();

//connect to the api  with the port and if error show error and if no error program starts
server.use(express.json());
server.use(cors());
server.use(bearerToken());

//use routes
server.use("/users", userRoutes);
server.use("/restaurants", restaurantRoutes);
server.use("/dishes", dishRoutes);
server.use("/orders", orderRoutes);
server.use("/dish-categories", dishCategories);
server.use("/oauth", authRoutes);
server.use("/riders", riderRotes);
server.use(commonRoutes);

//connect to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/foodie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully!!"))
  .catch((err) => {
    console.error(err.message);
  });

//connect to the api  with the port and if error show error and if no error program starts
server.listen(process.env.PORT, (error) => {
  if (!error) {
    return console.log(`Api Started Successfully in Port ${process.env.PORT}!`);
  }
  return console.error(error.message);
});
