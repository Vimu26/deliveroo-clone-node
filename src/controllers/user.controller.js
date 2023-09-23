const userService = require("../services/user.database.service");

const getAllUsersController = async (req, res) => {
  try {
    const userDetails = await userService.getAllUsersFromDBService();
    if (userDetails) {
      res
        .status(200)
        .json({ status: true, message: "Users Found", data: userDetails });
    } else {
      res.status(404).json({ status: false, message: " Users Not Found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Can't Find Users" });
  }
};

const getSingleUsersController = async (req, res) => {
  try {
    const user = await userService.getSingleUserDBService(req.params.id);
    if (user) {
      res.status(200).json({ status: true, message: "User Found", data: user });
    } else {
      res.status(404).json({ status: false, message: " User Not Found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Can't Find User" });
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
      res.json({ status: false, message: " User Not Created" });
    }
  } catch (error) {
    if (error.code === "conflict") {
      res.status(409).json({
        status: false,
        message: "An error occurred Because of Duplicate Creation",
      });
    } else {
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
    console.error("An error occurred");
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsersController,
  createUserController,
  updateUserController,
  deleteUserController,
  getSingleUsersController,
};
