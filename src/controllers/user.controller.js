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

const createUserController = async (req, res) => {
  try {
    const user = await userService.createUserDBService(req.body);
    if (user) {
      res.status(201).json({
        status: true,
        message: " User Created Successfully",
        data: user,
      });
    } else {
      res.status(404).json({ status: false, message: " User Not Created" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await userService.updateUserDBService(req.params.id, req.body);
    if (user) {
      res.status(200).json({
        status: true,
        message: "User Updated Successfully",
        data: user,
      });
    } else {
      res.status(404).json({ status: false, message: "User Not Updated" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
      console.error("An error occurred", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }
};

const deleteUserController = async (req, res) => {
  try {
    const deleteUser = await userService.deleteUserDBService(req.params.id);
    if (deleteUser) {
      res
        .status(200)
        .json({ status: true, message: "User Deleted Successfully" });
    } else {
      res.status(404).json({ status: false, message: "User Not Found" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
  createUserController,
  updateUserController,
  deleteUserController,
  getSingleUser,
};
