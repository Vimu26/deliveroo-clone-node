const userDetailsModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (userDetails) => {
  //checking wether user entered email and password
  if (userDetails.email && userDetails.password) {
    //find the user checking by the email
    const existingUser = await userDetailsModel.findOne({
      email: userDetails.email,
    });
    if (!existingUser) {
      return {
        status: 401,
        error: "Email Does Not Exist",
      };
    } else {
      //checking the password
      if (
        existingUser &&
        (await bcrypt.compare(userDetails.password, existingUser.password))
      ) {
        //creating the access token
        const accessToken = jwt.sign(
          {
            existingUser: {
              first_name: existingUser.first_name,
              last_name: existingUser.last_name,
              contact_number: existingUser.contact_number,
              email: existingUser.email,
              id: existingUser._id,
            },
          },
          process.env.SECRET_ACCESS_TOKEN,
          { expiresIn: "30m" }
        );
        return accessToken;
      } else {
        return {
          error: "Password is Wrong , Enter the Correct Password!",
          status: 401,
        };
      }
    }
  } else {
    return {
      error: "Email and Password are Both Required",
      status: 499,
    };
  }
};

module.exports = {
  loginUser,
};
