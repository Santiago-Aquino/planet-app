import * as dotenv from "dotenv";
import validateEnv from "@utils/validate-env";

dotenv.config();
validateEnv();

export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  externalApi: process.env.EXTERNARL_API,
};