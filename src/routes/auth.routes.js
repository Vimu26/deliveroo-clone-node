const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const tokenValidationMiddleware = require("../middleware/token.validation.middleware");

router.post("/login", authController.login);
router.get(
  "/current-user",
  tokenValidationMiddleware.validateToken,
  authController.currentUser
);
router.post("/register", authController.registerUser);

module.exports = router;
