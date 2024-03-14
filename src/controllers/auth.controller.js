const userService = require("../services/user.database.service");
const passwordService = require("../services/password.service");
const tokenService = require("../services/token.service");

//login user
const login = async (req, res) => {
  try {
    //check the email do exist
    const foundUser = await userService.findUserByEmail({
      email: req.body.email,
    });
    if (!foundUser) {
      return res
        .status(404)
        .json({ status: false, message: "Invalid credentials" });
    }
    //check the password
    const isPasswordValid = await passwordService.comparePassword(
      req.body.password,
      foundUser.password,
    );
    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    //if password is correct generate the access token
    const accessToken = await tokenService.userTokenGenerator(foundUser);
    res.status(200).json({
      status: true,
      message: "User Login Successful",
      data: {
        token: accessToken,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

//get the logged user details
const currentUser = async (req, res) => {
  try {
    const foundUser = await userService.getSingleUser(req.userId);
    if (!foundUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "User found", data: foundUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

//register user
const registerUser = async (req, res) => {
  try {
    const user = await userService.createUser({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      contact_number: req.body.contact_number,
      address: req.body.address,
      password: req.body.password,
    });
    res.status(201).json({
      status: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    if (!error.code == 11000) {
      console.error("An error occurred", error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
    res.status(409).json({
      status: false,
      message: "An error occurred Because of Duplicate Creation",
      error: error.message,
    });
  }
};

module.exports = { login, currentUser, registerUser };
