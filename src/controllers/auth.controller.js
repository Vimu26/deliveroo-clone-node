const userService = require("../services/user.database.service");
const passwordService = require("../services/password.database.service");
const tokenService = require("../services/token.database.service");

const authLogin = async (req, res) => {
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
        const checkPassword = await passwordService.comparePassword(
          req.body.password,
          foundUser.password,
        );
        if (checkPassword) {
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
      res.status(409).json({
        status: false,
        message: "Email and Password are Both Required",
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = { authLogin };
