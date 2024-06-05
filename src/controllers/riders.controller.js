const riderService = require("../services/riders.database.service");

//get all riders
exports.getAllRiders = async (req, res) => {
  try {
    const riders = await riderService.getAllRiders();
    res.status(200).json({
      status: true,
      message: "Riders Found Successfully",
      data: riders,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message,
    });
  }
};

// Create a new rider
exports.createRider = async (req, res) => {
  try {
    const rider = await riderService.createRider(req.body);
    res.status(201).json({
      status: true,
      message: "Riders created Successfully",
      data: rider,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

// Get a rider by ID
exports.getRiderById = async (req, res) => {
  try {
    const rider = await riderService.getRiderById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Riders Found Successfully",
      data: rider,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

// Update a rider by ID
exports.updateRider = async (req, res) => {
  try {
    const rider = await riderService.updateRider(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "Rider Updated Successfully",
      data: rider,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

// Delete a rider by ID
exports.deleteRider = async (req, res) => {
  try {
    const result = await riderService.deleteRider(req.params.id);
    res.status(200).json({
      status: true,
      message: "Riders Deleted Successfully",
      data: result,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};
