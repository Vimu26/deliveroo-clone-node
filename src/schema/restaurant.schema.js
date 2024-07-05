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
      pattern: "^(1[012]|0?[1-9]):([0-5][0-9]) (AM|PM)$",
    },
    closes_at: {
      type: "string",
      pattern: "^(1[012]|0?[1-9]):([0-5][0-9]) (AM|PM)$",
    },
    distance: {
      type: "number",
    },
    minimumPrice: {
      type: "number",
    },
    deliveryFee: {
      type: "number",
    },
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
    tag_list: {
      type: "array",
      items: {
        type: "string",
      },
    },
    rating : {
      type: "number",
    }
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
    "tag_list",
    "rating"
  ],
  additionalProperties: false,
};

module.exports = { createRestaurant };
