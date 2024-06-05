const express = require("express");
const router = express.Router();
const riderController = require("../controllers/riders.controller");

const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const ridersSchema = require("../schema/rider.schema");

// Get all riders
router.get("/", riderController.getAllRiders);

// Create a new rider
router.post("/",schemaValidationMiddleware.createRestaurantFormatValidation(
    ridersSchema,
  ), riderController.createRider);

// Get a rider by ID
router.get("/:id", riderController.getRiderById);

// Update a rider by ID
router.put("/:id", riderController.updateRider);

// Delete a rider by ID
router.delete("/:id", riderController.deleteRider);

module.exports = router;
