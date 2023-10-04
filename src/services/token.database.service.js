const jwt = require("jsonwebtoken");

module.exports.userTokenGenerator = async (existingUser) => {
  const accessToken = await jwt.sign(
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
    { expiresIn: "30m" },
  );
  return accessToken;
};
