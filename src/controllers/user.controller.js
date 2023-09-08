const userService = require("../services/user.database.service");

const getAllUsers = async (req, res) => {
  try {
    const userDetails = await userService.getAllUsersFromDBService();
    console.log("User creation status:", userDetails);

    if (userDetails) {
      res.json({ status: true , message: " Users Not Found" , data: userDetails });
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

const createUser = async (req,res) => {
    console.log(req.body);
    try{
        const status = await userService.createUserDBService(req.body);
        console.log("User creation status:", status);

    if (status) {
      res.json({ status: true, message: " User Created Successfully" });
    } else {
      res.json({ status: false, message: " User Not Created" });
    }
    }
    catch(error){
        console.error("An error occurred:", error);
        res.status(500).json({ status: false, message: "An error occurred" });
    }
};

module.exports = {
  getAllUsers,createUser,
};
