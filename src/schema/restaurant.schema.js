const createRestaurant = {
  type: "object",

  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
      format: "email",
    },
    contact_number: {
      type: "string",
      minLength: 10,
      maxLength: 10,
    },
    address: {
      type: "string",
    },
  },
  required: ["name", "email", "contact_number", "address"],
  additionalProperties: false,
};

module.exports = { createRestaurant };
