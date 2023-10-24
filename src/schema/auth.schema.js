const loginUser = {
  type: "object",

  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      minLength: 6,
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=]).{6,}$",
    },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

module.exports = { loginUser };
