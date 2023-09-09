const userDetailsModel = require("../models/user.model");

const getAllUsersFromDBService = () => {
  return userDetailsModel
    .find()
    .then((users) => {
      if (users.length === 0) {
        console.log("No users found");
      }
      return users;
    })
    .catch((err) => {
      throw err;
    });
};

const createUserDBService = async (userDetails) => {
  try {
    const userModelData = new userDetailsModel({
      first_name: userDetails.first_name,
      last_name: userDetails.last_name,
      contact_number: userDetails.contact_number,
      email: userDetails.email,
      password: userDetails.password,
    });

    await userModelData.save();
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateUserDBService = async (id, userDetails) => {
  try {
    const updatedUser = await userDetailsModel.findByIdAndUpdate(id, userDetails , { new: true });
    return true;
  } catch (error) {
    console.error("An error occurred during user update:", error);
    return false;
  }
};

module.exports = {
  getAllUsersFromDBService,
  createUserDBService,
  updateUserDBService,
};
