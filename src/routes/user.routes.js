const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/get-all-users", userController.getAllUsersController);
router.post("/create-user", userController.createUserController);
router.patch("/update-user/:id", userController.updateUserController);
router.delete("/delete-user/:id", userController.deleteUserController);

module.exports = router;
