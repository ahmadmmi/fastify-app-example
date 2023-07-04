const fastify = require(`fastify`)({ logger: true });
require(`dotenv`).config();
// fastify.register(require("@fastify/postgres"), require("./configs/postgres"));
fastify.register(require("@fastify/swagger"), require("./configs/swagger"));
fastify.register(
  require("@fastify/swagger-ui"),
  require("./configs/swagger-ui")
);
fastify.register(require("@fastify/cors"), require("./configs/cors"));
fastify.register(require("@fastify/jwt"), require("./configs/jwt"));

fastify.get("/", (req, res) => {
  res.send({ API: "Fastify" });
});
fastify.register(require("./routes/data"), { prefix: "/data" });

const start = async (options) => {
  try {
    await fastify.listen({ port: process.env.PORT || 5000, host: "0.0.0.0" });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
