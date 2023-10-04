const authService = require("../services/auth.database.service");

const authLogin = async (req, res) => {
  try {
    const loginUser = await authService.loginUser({
      email: req.body.email,
      password: req.body.password,
    });
    if (loginUser.status) {
      res
        .status(loginUser.status)
        .json({ status: false, message: loginUser.error });
    } else {
      res
        .status(200)
        .json({
          status: true,
          message: "User Login Successful",
          data: loginUser,
        });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = { authLogin };
