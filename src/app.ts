import express, {Request, Response} from "express";
import {getQuestions} from "./controllers/questions-controller";
import { getCategories } from "./controllers/categories-controller";

function createApp()
{
    const app = express();

    app.use(express.json()); //middleware

    app.get("/questions", getQuestions);

    app.get("/categories", getCategories);

    return app;
}

export default createApp;