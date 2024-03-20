const createOrder = {
  type: "object",
  properties: {
    user: {
      oneOf: [
        {
          type: "string"
        },
        {
          type: "string",
          format: "uuid"
        }
      ]
    },
    restaurant: {
      oneOf: [
        {
          type: "string"
        },
        {
          type: "string",
          format: "uuid"
        }
      ]
    },
    order_items: {
      type: "array"
    },
    payment_method: {
      type: "string",
      enum: ["CASH", "CARD"]
    },
    total_amount: {
      type: "number",
      minimum: 0
    },
    user_details: {
      type: "object",
      properties: {
        name: {
          type: "string",
          minLength: 1
        },
        address: {
          type: "string",
          minLength: 1
        },
        contact_number: {
          type: "string",
          minLength: 1
        }
      },
      required: ["name", "address", "contact_number"]
    },
    selected_option: {
      type: "string",
      enum: ["TakeAway", "Delivery"]
    },
    placed_on: {
      type: "string",
      format: "date-time"
    }
  },
  required: [
    "user",
    "restaurant",
    "order_items",
    "payment_method",
    "total_amount",
    "user_details",
    "selected_option"
  ],
  additionalProperties: false
};

module.exports = { createOrder };
