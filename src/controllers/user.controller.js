const userService = require("../services/user.database.service");

const getAllUsersController = async (req, res) => {
  try {
    const userDetails = await userService.getAllUsersFromDBService();
    if (userDetails) {
      res.json({ status: true, message: "Users Found", data: userDetails });
    } else {
      res.json({ status: false, message: " User Not Found" });
    }
  } catch (err) {
    console
      .error(err)
      .status(500)
      .json({ status: false, message: "Can't Find Users" });
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
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const updateUserController = async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await userService.updateUserDBService(req.params.id, req.body);

    if (user) {
      res.json({ status: true, message: "User Updated Successfully" });
    } else {
      res.json({ status: false, message: "User Not Updated" });
    }
  } catch (err) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  getAllUsersController,
  createUserController,
  updateUserController,
};
