//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const dishRoutes = require("./routes/dish.routes");
const orderRoutes = require("./routes/order.routes");
const dishCategories = require("./routes/dish-category.routes");
const commonRoutes = require("./routes/common.routes");
const authRoutes = require("./routes/auth.routes");

const server = express();

//connect to the api  with the port and if error show error and if no error program starts
server.use(express.json());
server.use(cors());

//use routes
server.use("/users", userRoutes);
server.use("/restaurants", restaurantRoutes);
server.use("/dishes", dishRoutes);
server.use("/orders", orderRoutes);
server.use("/dish-categories", dishCategories);
server.use("/oauth", authRoutes);
server.use(commonRoutes);

//connect to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/deliveroo-clone-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully!!"))
  .catch((err) => {
    console.error(err.message);
  });

//connect to the api  with the port and if error show error and if no error program starts
server.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(`Api Started Successfully in Port ${process.env.PORT}!`);
  }
});
