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
    closesAt: {
      type: "string",
      pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$",
    },
    distance: {
      type: "string",
    },
    minimumPrice: {
      type: "string",
    },
    deliveryFee: {
      type: "string",
    },
  },
  required: [
    "name",
    "email",
    "contact_number",
    "location",
    "closesAt",
    "distance",
    "minimumPrice",
    "deliveryFee",
  ],
  additionalProperties: false,
};

module.exports = { createRestaurant };
