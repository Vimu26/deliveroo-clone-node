const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.route("/user/get-all-users").get(userController.getAllUsersController);
router.route("/user/create-user").post(userController.createUserController);
router
  .route("/user/update-user/:id")
  .patch(userController.updateUserController);
router
  .route("/user/delete-user/:id")
  .delete(userController.deleteUserController);

module.exports = router;
