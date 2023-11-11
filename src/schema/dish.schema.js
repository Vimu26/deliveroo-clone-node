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
    dish_code: {
      type: "string",
    },
    price: {
      type: "number",
      minimum: 0,
    },
    image: {
      type: "string",
    },
  },
  required: [
    "order_id",
    "restaurant_id",
    "dish_category_id",
    "dish_code",
    "price",
    "name",
    "image",
  ],
  additionalProperties: false,
};

module.exports = { createOrder };
