const userDetailsModel = require("../models/user.model");
const hashPassword = require("./password-hash.database.service");

const getAllUsers = async () => {
  const users = await userDetailsModel.find();
  return users;
};

const getSingleUser = async (id) => {
  const user = await userDetailsModel.findById(id);
  return user;
};

const createUserDBService = async (userDetails) => {
  try {
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
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "User already exists" };
    } else {
      throw error;
    }
  }
};

const updateUserDBService = async (id, userDetails) => {
  try {
    if ("password" in userDetails) {
      userDetails.password = await hashPassword.hashPassword(
        userDetails.password
      );
    }

    const updatedUser = await userDetailsModel.findByIdAndUpdate(
      id,
      userDetails,
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    if (error.code === 11000) {
      throw { code: "conflict", message: "User already exists" };
    } else {
      throw error;
    }
  }
};

const deleteUserDBService = async (id) => {
  try {
    const user = await userDetailsModel.findByIdAndDelete(id);
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("An error occurred during user Delete : ", error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  createUserDBService,
  updateUserDBService,
  deleteUserDBService,
  getSingleUser,
};
