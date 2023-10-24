const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const tokenValidationMiddleware = require("../middleware/token.validation.middleware");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");

router.post(
  "/login",
  schemaValidationMiddleware.userLoginFormatValidation,
  authController.login
);
router.get(
  "/profile",
  tokenValidationMiddleware.validateToken,
  authController.currentUser
);
router.post("/register", authController.registerUser);

module.exports = router;
