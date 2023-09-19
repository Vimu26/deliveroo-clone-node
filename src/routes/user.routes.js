const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.getAllUsersController);
router.post("/", userController.createUserController);
router.patch("/:id", userController.updateUserController);
router.delete("/:id", userController.deleteUserController);

module.exports = router;
