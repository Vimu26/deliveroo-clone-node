const jwt = require("jsonwebtoken");

module.exports.userTokenGenerator = async (user) => {
  const accessToken = jwt.sign(
    {
      sub: user._id, //subject Claim
      iss: user.first_name + " " + user.last_name, // Issuer claim
      iat: Math.floor(Date.now() / 1000), // Issued At claim
      email: user.email,
    },
    process.env.SECRET_ACCESS_TOKEN,
    { expiresIn: "1d" },
  );
  return accessToken;
};
