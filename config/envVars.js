import dotenv from "dotenv";

dotenv.config();

const ENV_VARS = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};

export { ENV_VARS };
