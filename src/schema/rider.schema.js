const createRiderSchema = {
    type: "object",
    properties: {
      first_name: {
        type: "string",
      },
      last_name: {
        type: "string",
      },
      email: {
        type: "string",
        format: "email",
      },
      nic : {
        type: "string",
      },
      contact_number: {
        type: "string",
        minLength: 10,
        maxLength: 10,
      },
      address: {
        type: "string",
      },
      password: {
        type: "string",
      },
      orders: {
        type: "array",
        items: {
          type: "string",
          pattern: "^[a-fA-F0-9]{24}$" // Regular expression to match MongoDB ObjectId
        }
      }
    },
    required: [
      "first_name",
      "last_name",
      "email",
      "contact_number",
      "address",
      "password",
      "nic"
    ],
    additionalProperties: false,
  };
  
  module.exports = createRiderSchema;
  