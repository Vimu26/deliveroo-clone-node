const createOrder = {
  type: "object",
  properties: {
    user_id: {
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
    quantity: {
      type: "integer",
      minimum: 1,
    },
    order_code: {
      type: "string",
      minLength: 1,
    },
    total_price: {
      type: "number",
      minimum: 0,
    },
    placed_on: {
      type: "string",
      format: "date-time",
    },
  },
  required: [
    "user_id",
    "restaurant_id",
    "quantity",
    "order_code",
    "total_price",
  ],
  additionalProperties: false,
};

module.exports = { createOrder };
