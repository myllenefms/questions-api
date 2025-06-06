import express, {Request, Response} from "express";
import {getQuestions} from "./controllers/questions-controller";
import { getCategories } from "./controllers/categories-controller";
import router from "./routes";

function createApp()
{
    const app = express();

    app.use(express.json()); //middleware

    app.use("/api", router);

    return app;
}

export default createApp;