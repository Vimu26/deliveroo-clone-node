const userService = require("../services/user.database.service");

const getAllUsers = async (req, res) => {
  try {
    const userDetails = await userService.getAllUsers();
    res.status(200).json({
      status: true,
      message: "Users Found Successfully",
      data: userDetails,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(404).json({ status: false, message: err.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await userService.getSingleUser(req.params.id);
    res
      .status(200)
      .json({ status: true, message: "User Found Successfully", data: user });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({ status: false, message: "User Does Not Exist" });
    } else {
      console.error("An error occurred", err.message);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      contact_number: req.body.contact_number,
      password: req.body.password,
    });
    res.status(201).json({
      status: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error.message);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      contact: req.body.contact_number,
      password: req.body.password,
    });
    res.status(200).json({
      status: true,
      message: "User Updated Successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else if (error.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "User Does Not Exist",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const updateUserData = async (req, res) => {
  try {
    const user = await userService.updateUserData(req.params.id, {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      contact: req.body.contact_number,
      password: req.body.password,
    });
    res.status(200).json({
      status: true,
      message: "User Updated Successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else if (error.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "User Does Not Exist",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await userService.deleteUser(req.params.id);
    res.status(200).json({
      status: true,
      message: "User Deleted Successfully",
      data: deleteUser,
    });
  } catch (err) {
    if (err.messageFormat == undefined) {
      res.status(404).json({
        status: false,
        message: "User Does Not Exist",
      });
    } else {
      console.error("An error occurred", err);
      res.status(500).json({ status: false, message: err.message });
    }
  }
};

// const updateUserData = async (id , detais) => {

// }

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  updateUserData,
};
