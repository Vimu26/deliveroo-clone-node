const express = require("express");
const router = express.Router();


const userController = require("../controllers/user.controller");

router.route("/user/getAllUsers").get(userController.getAllUsersController);
router.route("/user/create-user").post(userController.createUserController);
// router.route('./user/deleteUser').delete(userController.deleteUser);
// router.route('./user/updateUser').patch(userController.updateUser);


module.exports = router;