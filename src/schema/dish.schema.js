const addOnsItemSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    price: { type: "number" },
    checked: {type: "boolean"}
  },
  required: ["name", "price"],
  additionalProperties: false,
};

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
    addOns: {
      type: "array",
      items: addOnsItemSchema,
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
    "addOns",
  ],
  additionalProperties: false,
};

module.exports = { createOrder };
