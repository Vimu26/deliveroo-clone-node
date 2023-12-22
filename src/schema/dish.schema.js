const createOrder = {
  type: "object",
  properties: {
    order: {
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
    dish_category: {
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
    price: {
      type: "number",
    },
    image: {
      type: "string",
    },
    calories: {
      type: "number",
    },
    description: {
      type: "string",
    },
  },
  required: [
    "restaurant",
    "dish_category",
    "price",
    "name",
    "image",
    "calories",
    "description",
  ],
  additionalProperties: false,
};

module.exports = { createOrder };
