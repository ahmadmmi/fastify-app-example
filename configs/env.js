module.exports = {
  confKey: "env",
  schema: {
    type: "object",
    required: ["DATABASE_URL"],
    properties: {
      PORT: {
        type: "string",
      },
      DATABASE_URL: {
        type: "string",
      },
    },
  },
  dotenv: true,
};
