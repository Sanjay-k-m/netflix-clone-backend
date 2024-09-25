import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { ENV_VARS } from "./config/envVars.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Netflix-clone API",
      version: "1.0.0",
      description: "API information for Netflix application",
    },
    servers: [
      {
        url: `http://localhost:${ENV_VARS.PORT}/api`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    "./routes/auth.route.js",
    "./routes/movie.route.js",
    "./routes/tv.route.js",
  ],
};

const swaggerSpec = swaggerJsDoc(options);

const configureSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default configureSwagger;
