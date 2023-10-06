const bcrypt = require("bcrypt");

module.exports.hashPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

module.exports.comparePassword = async (requestedPassword, hashPassword) => {
  return bcrypt.compare(
    requestedPassword,
    hashPassword,
  );
};
