const createDishCategory = {
  type: "object",
  properties: {
    restaurant_id: {
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
    image: {
      type: "string",
    },
  },
  required: ["restaurant_id", "name", "image"],
  additionalProperties: false,
};

module.exports = { createDishCategory };
