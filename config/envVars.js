import dotenv from "dotenv";

dotenv.config();

const ENV_VARS = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
};

export { ENV_VARS };
