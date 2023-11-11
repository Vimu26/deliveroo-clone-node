const userDetailsModel = require("../models/user.model");
const passwordService = require("./password.service");

const getAllUsers = async () => {
  return await userDetailsModel.find();
};

const getSingleUser = async (id) => {
  return await userDetailsModel.findById(id);
};

const createUser = async (userDetails) => {
  const password = await passwordService.hashPassword(userDetails.password);
  const userModelData = new userDetailsModel({
    first_name: userDetails.first_name,
    last_name: userDetails.last_name,
    contact_number: userDetails.contact_number,
    address: userDetails.address,
    email: userDetails.email,
    password: password,
  });
  await userModelData.save();
  return userModelData;
};

const updateUser = async (id, userDetails) => {
  if (userDetails.password !== undefined) {
    userDetails.password = await passwordService.hashPassword(
      userDetails.password,
    );
  }
  return await userDetailsModel.findByIdAndUpdate(id, userDetails, {
    new: true,
  });
};

const updateUserData = async (id, userData) => {
  userData.password = await passwordService.hashPassword(userData.password);
  return await userDetailsModel.findByIdAndUpdate(id, userData, {
    new: true,
  });
};

const deleteUser = async (id) => {
  return userDetailsModel.findByIdAndDelete(id);
};

const findUserByEmail = async (userDetails) => {
  return userDetailsModel.findOne({
    email: userDetails.email,
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  updateUserData,
  findUserByEmail,
};
