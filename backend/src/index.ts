import express from "express";
import cors from 'cors';
import config from '@config/global-vars'
import { connectDB } from "@database/database";
import { router } from "@routes/index.route";
import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import { ApiService } from "@services/planet.service";

const apiService = new ApiService();
const app = express();
const PORT = config.port || 8080;

connectDB();

setInterval(async() => {
  const response = await apiService.saveData();
  console.log(response);
}, 24 * 60 * 60 * 1000);


const swaggerOption: Options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Welcome to the star wars planets api",
      description: "Here you can find all the routes for our planets API",
      version: '1.0.0',
    },
  },
  apis: [`${__dirname}/docs/*.yaml`],
};
const specs = swaggerJSDoc(swaggerOption);

app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT , () => console.log(`runnig on port ${PORT}`));