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
    dish_category_name: {
      type: "string",
    },
  },
  required: ["restaurant_id", "dish_category_name"],
  additionalProperties: false,
};

module.exports = { createDishCategory };
