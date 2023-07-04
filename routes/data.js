module.exports = async (fastify, options) => {
  fastify.get(
    "/v1/data",
    {
      schema: {
        description: "Get Data",
        tags: ["Data"],
        summary: "Get Data",
      },
    },
    async (request, reply) => {
      try {
        const result = { id: 1, attribut: "Atribut 1", value: 1 };
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(result);
      } catch (error) {}
    }
  );
};
