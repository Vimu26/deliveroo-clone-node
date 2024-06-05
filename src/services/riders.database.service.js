const Rider = require("../models/rider.model");
const passwordService = require("../services/password.service");

//get all riders
const getAllRiders = async () => {
  return await Rider.find();
};
// Create a new rider
const createRider = async (riderDetails) => {
  const hashedPassword = await passwordService.hashPassword(
    riderDetails.password,
  );
  const riderModelData = new Rider({
    first_name: riderDetails.first_name,
    last_name: riderDetails.last_name,
    contact_number: riderDetails.contact_number,
    address: riderDetails.address,
    nic: riderDetails.nic,
    email: riderDetails.email,
    password: hashedPassword,
    orders: riderDetails.orders,
    riderID: riderDetails.riderID,
  });

  await riderModelData.save();
  return riderModelData;
};

// Get a rider by ID
const getRiderById = async (id) => {
  return await Rider.findById(id);
};

// Update a rider by ID
const updateRider = async (id, updateData) => {
  return await Rider.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a rider by ID
const deleteRider = async (id) => {
  return await Rider.findByIdAndDelete(id);
};

module.exports = {
  getAllRiders,
  createRider,
  getRiderById,
  updateRider,
  deleteRider,
};
