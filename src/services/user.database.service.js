const userDetailsModel = require("../models/user.model");
const bcrypt = require('bcrypt');

const getAllUsersFromDBService = () => {
  return userDetailsModel
    .find()
    .then((users) => {
      if (users.length === 0) {
        console.log("No users found");
      } else {
        return users;
      }
    })
    .catch((err) => {
      throw err;
    });
};

const getSingleUserDBService = async (id) => {
  try {
    const user = await userDetailsModel.findById(id);
    if (user) {
      return user;
    } else {
      console.log("No user Exists");
      return;
    }
  } catch (err) {
    console.log("An error occurred during getting User");
    throw err;
  }
};

const createUserDBService = async (userDetails) => {
  try {
    const saltRounds = 10;
    const salt  = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(userDetails.password , salt);

    const userModelData = new userDetailsModel({
      first_name: userDetails.first_name,
      last_name: userDetails.last_name,
      contact_number: userDetails.contact_number,
      email: userDetails.email,
      password: hashPassword,
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
    if ('password' in userDetails) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      userDetails.password = await bcrypt.hash(userDetails.password, salt);
    }
    
    const updatedUser = await userDetailsModel.findByIdAndUpdate(
      id,
      userDetails,
      { new: true },
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
  getAllUsersFromDBService,
  createUserDBService,
  updateUserDBService,
  deleteUserDBService,
  getSingleUserDBService,
};
