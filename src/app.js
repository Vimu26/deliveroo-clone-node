require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/deliveroo-clone-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database Connected Successfully!!"))
.catch((err) => {
  console.error(err);
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Api Started Successfully in Port ${process.env.PORT}!`);
  }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use(cors());
app.use(userRoutes);
app.use(express.json());

