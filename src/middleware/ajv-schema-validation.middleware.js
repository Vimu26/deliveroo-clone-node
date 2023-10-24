const ajvFormatService = require("../services/ajv-schema-format.service");
const authSchemaFormat = require("../schema/auth.schema");

const validateLoginSchema = ajvFormatService.ajv.compile(
  authSchemaFormat.loginUser,
);
const userLoginFormatValidation = (req, res, next) => {
  const isValid = validateLoginSchema(req.body);
  if (!isValid) {
    return res.status(400).json({
      status: false,
      message: "Error Occurs In Validation of the Request body",
      error: validateLoginSchema.errors,
    });
  }
  next();
};

module.exports = { userLoginFormatValidation };
