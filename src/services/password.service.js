const bcryptjs = require("bcryptjs");

module.exports.hashPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcryptjs.genSalt(saltRounds);
  const hashPassword = await bcryptjs.hash(password, salt);
  return hashPassword;
};

module.exports.comparePassword = async (password, hashPassword) => {
  return bcryptjs.compare(password, hashPassword);
};
