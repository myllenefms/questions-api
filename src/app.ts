import express, {Request, Response} from "express";

function createApp()
{
    const app = express();

    app.use(express.json()); //middleware

    app.get("/", (request: Request, response:Response) => {
        response.status(200).json({message: "hello world"});
    })

    return app;
}

export default createApp;