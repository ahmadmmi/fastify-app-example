module.exports = {
  openapi: {
    info: {
      title: "Fastify REST API",
      description: "Fastify REST API",
      version: "0.0.1",
      contact: {
        name: "Braga Tech Support",
        url: "https://braga.co.id/contact",
        email: "ahmadmaulana@braga.co.id",
      },
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
  exposeRoute: true,
};
