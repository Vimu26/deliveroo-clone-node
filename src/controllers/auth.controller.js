const userService = require("../services/user.database.service");
const passwordService = require("../services/password.service");
const tokenService = require("../services/token.service");

const login = async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      //check the email do exist
      const foundUser = await userService.findUserByEmail({
        email: req.body.email,
      });
      if (!foundUser) {
        res
          .status(401)
          .json({ status: false, message: "Email Does Not Exist" });
      } else {
        //check the password
        const isPasswordValid = await passwordService.comparePassword(
          req.body.password,
          foundUser.password
        );
        if (isPasswordValid) {
          //if password is correct generate the access token
          const accessToken = await tokenService.userTokenGenerator(foundUser);
          res.status(200).json({
            status: true,
            message: "User Login Successful",
            data: accessToken,
          });
        } else {
          res.status(401).json({
            status: false,
            message: "Password is Wrong , Enter the Correct Password!",
          });
        }
      }
    } else {
      res.status(400).json({
        status: false,
        message: "Email and Password are Both Required",
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const currentUser = async (req, res) => {
  try {
    const foundUser = await userService.getSingleUser(req.userId);
    if (!foundUser) {
      res.status(404).json({ status: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "User found", data: foundUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

const registerUser = async (req, res) => {
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
      message: "User Registered Successfully",
      data: user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = { login, currentUser, registerUser };
