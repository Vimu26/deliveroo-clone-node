const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/login", authController.authLogin);
// router.get("/register", authController.authRegister);

module.exports = router;
