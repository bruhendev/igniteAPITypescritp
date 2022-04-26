import "reflect-metadata";
import express from 'express';
import swaggerUi from "swagger-ui-express"
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./shared/container"

// import "./database/data-source"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);


app.listen(3333, () => console.log('server running port 3333'));



