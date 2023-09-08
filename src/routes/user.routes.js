const express = require("express");
const router = express.Router();


const userController = require("../controllers/user.controller");

router.route("/user/getAllUsers").get(userController.getAllUsers);
router.route("/user/createUser").post(userController.createUser);
// router.route('./user/deleteUser').delete(userController.deleteUser);
// router.route('./user/updateUser').patch(userController.updateUser);


module.exports = router;