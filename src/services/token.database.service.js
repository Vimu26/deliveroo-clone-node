const jwt = require("jsonwebtoken");

module.exports.userTokenGenerator = async (existingUser) => {
  const accessToken = jwt.sign(
    {
      existingUser: {
        email: existingUser.email,
        id: existingUser._id,
      },
    },
    process.env.SECRET_ACCESS_TOKEN,
    { expiresIn: "30m" },
  );
  return accessToken;
};
