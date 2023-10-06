const jwt = require("jsonwebtoken");

module.exports.userTokenGenerator = async (existingUser) => {
  const accessToken = jwt.sign(
    {
      sub: existingUser._id, //subject Claim
      iss : existingUser.first_name + " " + existingUser.last_name, // Issuer claim
      exp: Math.floor(Date.now() / 1000) + (30 * 60), // Expiration time in seconds (30 minutes)
      aud : "System Login",// Audience claim
      iat: Math.floor(Date.now() / 1000), // Issued At claim
      existingUser: {
        email: existingUser.email,
      },
    },
    process.env.SECRET_ACCESS_TOKEN,
  );
  return accessToken;
};
