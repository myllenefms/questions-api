import express from "express";
import router from "./routes";

function createApp()
{
    const app = express();

    app.use(express.json()); //middleware

    app.use("/api", router);

    return app;
}

export default createApp;