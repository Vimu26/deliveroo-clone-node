require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const dishRoutes = require("./routes/dish.routes");
const orderRoutes = require("./routes/order.routes");
const dishCategories = require("./routes/dish-category.routes");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/users", userRoutes);
server.use("/restaurants", restaurantRoutes);
server.use("/dishes", dishRoutes);
server.use("/orders", orderRoutes);
server.use("/dishCategories", dishCategories);
// server.use("/oauth", authRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/deliveroo-clone-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully!!"))
  .catch((err) => {
    console.error(err);
  });

server.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Api Started Successfully in Port ${process.env.PORT}!`);
  }
});

server.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Successfully in Port ${process.env.PORT}",
  });
});

server.all("*", (req, res) => {
  res.status(404).json({
    success: true,
    message: "Router Not Found!",
  });
});
