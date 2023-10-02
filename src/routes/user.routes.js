const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

//get all users
router.get("/", userController.getAllUsers);

//get single user
router.get("/:id", userController.getSingleUser);

//create a new user
router.post("/", userController.createUser);

//update user partially
router.patch("/:id", userController.updateUser);

// delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
