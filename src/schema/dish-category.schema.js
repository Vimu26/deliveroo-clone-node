const createDishCategory = {
  type: "object",
  properties: {
    restaurant: {
      oneOf: [
        {
          type: "string",
        },
        {
          type: "string",
          format: "uuid",
        },
      ],
    },
    name: {
      type: "string",
    },
  },
  required: ["restaurant", "name"],
  additionalProperties: false,
};

module.exports = { createDishCategory };
