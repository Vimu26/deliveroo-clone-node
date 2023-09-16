const userService = require("../services/user.database.service");

const getAllUsersController = async (req, res) => {
  try {
    const userDetails = await userService.getAllUsersFromDBService();
    if (userDetails) {
    res.status(200).json({ status: true, message: "Users Found", data: userDetails });
    } else {
      res.status(200).json({ status: false, message: " User Not Found" });
    }
  } catch (err) {
    console.error(err);

    res.status(500).json({ status: false, message: "Can't Find Users" });
  }
};

const createUserController = async (req, res) => {
  try {
    const status = await userService.createUserDBService(req.body);
    console.log("User creation status:", status);

    if (status) {
      res.json({
        status: true,
        message: " User Created Successfully",
        data: req.body,
      });
    } else {
      res.json({ status: false, message: " User Not Created" });
    }
  } catch (error) {
    // if(error == conflict) {
    //   res.status(500).json({ status: false, message: "An error occurred" });
    // }else {
    //   res.status(500).json({ status: false, message: "An error occurred" });
    // }
    console.error("An error occurred:", error);
    
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await userService.updateUserDBService(req.params.id, req.body);

    if (user) {
      res.json({
        status: true,
        message: "User Updated Successfully",
        data: user,
      });
    } else {
      res.json({ status: false, message: "User Not Updated" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const deleteUser = await userService.deleteUserDBService(req.params.id);

    if (deleteUser) {
      res.json({ status: true, message: "User Deleted Successfully" });
    } else {
      res.json({ status: false, message: "User Not Deleted" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  getAllUsersController,
  createUserController,
  updateUserController,
  deleteUserController,
};
