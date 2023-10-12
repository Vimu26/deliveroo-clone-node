const userDetailsModel = require("../models/user.model");
const passwordService = require("./password.service");

const getAllUsers = async () => {
  const users = await userDetailsModel.find();
  return users;
};

const getSingleUser = async (id) => {
  const user = await userDetailsModel.findById(id);
  return user;
};

const createUser = async (userDetails) => {
  const password = await passwordService.hashPassword(userDetails.password);

  const userModelData = new userDetailsModel({
    first_name: userDetails.first_name,
    last_name: userDetails.last_name,
    contact_number: userDetails.contact_number,
    email: userDetails.email,
    password: password,
  });
  await userModelData.save();
  return userModelData;
};

const updateUser = async (id, userDetails) => {
  if ("password" in userDetails) {
    userDetails.password = await passwordService.hashPassword(
      userDetails.password,
    );
  }
  const updatedUser = await userDetailsModel.findByIdAndUpdate(
    id,
    userDetails,
    { new: true },
  );
  return updatedUser;
};

const updateUserData = async (id, userDetails) => {
  if ("password" in userDetails) {
    userDetails.password = await passwordService.hashPassword(
      userDetails.password,
    );
  }
  const updatedUser = await userDetailsModel.findByIdAndUpdate(
    id,
    userDetails,
    { new: true },
  );
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await userDetailsModel.findByIdAndDelete(id);
  return user;
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
