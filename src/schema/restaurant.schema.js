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
    location: {
      type: "string",
    },
    opensAt: {
      type: "string",
      pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$",
    },
    distance : {
      type: "number",
    }
  },
  required: ["name", "email", "contact_number", "location", "opensAt","distance"],
  additionalProperties: false,
};

module.exports = { createRestaurant };
