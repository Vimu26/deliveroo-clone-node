const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const tokenValidationMiddleware = require("../middleware/token.validation.middleware");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const authSchemaFormat = require("../schema/auth.schema");

router.post(
  "/login",
  schemaValidationMiddleware.userLoginFormatValidation(
    authSchemaFormat.loginUser,
  ),
  authController.login,
);
router.get(
  "/profile",
  tokenValidationMiddleware.validateToken,
  authController.currentUser,
);
router.post(
  "/register",
  schemaValidationMiddleware.userRegisterFormatValidation(
    authSchemaFormat.registerUser,
  ),
  authController.registerUser,
);

module.exports = router;
