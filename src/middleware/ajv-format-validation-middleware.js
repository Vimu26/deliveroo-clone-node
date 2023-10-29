const ajvFormatService = require("../services/ajv-schema-format.service");

const userLoginFormatValidation = (schema) => {
  const validateLoginSchema = ajvFormatService.ajv.compile(schema);
  return (req, res, next) => {
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
};

const userRegisterFormatValidation = (schema) => {
  const validateRegisterSchema = ajvFormatService.ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validateRegisterSchema(req.body);
    if (!isValid) {
      return res.status(400).json({
        status: false,
        message: "Error Occurs In Validation of the Request body",
        error: validateRegisterSchema.errors,
      });
    }
    next();
  };
};

module.exports = { userLoginFormatValidation, userRegisterFormatValidation };
