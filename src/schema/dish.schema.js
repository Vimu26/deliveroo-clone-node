const createOrder = {
  type: "object",
  properties: {
    order_id: {
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
    dish_category_id: {
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
      type: "string",
    },
    image: {
      type: "string",
    },
    calories: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  required: [
    "restaurant_id",
    "dish_category_id",
    "price",
    "name",
    "image",
    "calories",
    "description",
  ],
  additionalProperties: false,
};

module.exports = { createOrder };
