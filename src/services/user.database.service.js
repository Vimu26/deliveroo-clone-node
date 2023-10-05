const userDetailsModel = require("../models/user.model");
const hashPassword = require("./password.database.service");

const getAllUsers = async () => {
  const users = await userDetailsModel.find();
  return users;
};

const getSingleUser = async (id) => {
  const user = await userDetailsModel.findById(id);
  return user;
};

const createUser = async (userDetails) => {
  const password = await hashPassword.hashPassword(userDetails.password);

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
    userDetails.password = await hashPassword.hashPassword(
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
    userDetails.password = await hashPassword.hashPassword(
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
  const existingUser = userDetailsModel.findOne({
    email: userDetails.email,
  });
  return existingUser;
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
