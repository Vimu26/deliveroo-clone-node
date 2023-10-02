const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.status(200).json({
    success: true,
    message: `API Successfully in Port ${process.env.PORT}`,
  });
});

// when any route tht not declared it shows page not found
router.all("*", (req, res) => {
  res.status(404).json({
    success: true,
    message: "Page Not Found!",
  });
});

module.exports = router;
