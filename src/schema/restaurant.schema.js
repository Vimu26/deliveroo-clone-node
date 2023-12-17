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
    opens_at: {
      type: "string",
      pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$",
    },
    closes_at: {
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
    tags: {
      type: "object",
      properties: {
        delivery_time: {
          type: "object",
          properties: {
            from: {
              type: "number",
            },
            to: {
              type: "number",
            },
          },
          required: ["from", "to"],
        },
        tag1: {
          type: "string",
        },
        tag2: {
          type: "string",
        },
        tag3: {
          type: "string",
        },
      },
      required: ["delivery_time", "tag1", "tag2", "tag3"],
    },
  },
  required: [
    "name",
    "email",
    "contact_number",
    "location",
    "opens_at",
    "closes_at",
    "distance",
    "minimumPrice",
    "deliveryFee",
  ],
  additionalProperties: false,
};

module.exports = { createRestaurant };
