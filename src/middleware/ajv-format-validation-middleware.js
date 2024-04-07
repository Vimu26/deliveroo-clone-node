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

const createRestaurantFormatValidation = (schema) => {
  const validateRestaurantSchema = ajvFormatService.ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validateRestaurantSchema(req.body);
    if (!isValid) {
      return res.status(400).json({
        status: false,
        message: "Error Occurs In Validation of the Request body",
        error: validateRestaurantSchema.errors,
      });
    }
    next();
  };
};

const createDishFormatValidation = (schema) => {
  const validateDishSchema = ajvFormatService.ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validateDishSchema(req.body);
    if (!isValid) {
      return res.status(400).json({
        status: false,
        message: "Error Occurs In Validation of the Request body",
        error: validateDishSchema.errors,
      });
    }
    next();
  };
};

const createDishCategoryFormatValidation = (schema) => {
  const validateDishCategorySchema = ajvFormatService.ajv.compile(schema);
  return (req, res, next) => {
    const isCategoryValid = req.body.every((category) => {
      return validateDishCategorySchema(category);
    });
    console.log(isCategoryValid);
    if (!isCategoryValid) {
      return res.status(400).json({
        status: false,
        message: "Error Occurs In Validation of the Request body",
        error: validateDishCategorySchema.errors,
      });
    }
    next();
  };
};

const createOrderCategoryFormatValidation = (schema) => {
  const validateOrderCategorySchema = ajvFormatService.ajv.compile(schema);
  return (req, res, next) => {
    const isValid = validateOrderCategorySchema(req.body);
    if (!isValid) {
      return res.status(400).json({
        status: false,
        message: "Error Occurs In Validation of the Request body",
        error: validateOrderCategorySchema.errors,
      });
    }
    next();
  };
};

module.exports = {
  userLoginFormatValidation,
  userRegisterFormatValidation,
  createRestaurantFormatValidation,
  createDishFormatValidation,
  createDishCategoryFormatValidation,
  createOrderCategoryFormatValidation,
};
