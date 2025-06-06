import {Request, Response} from "express";

export const getQuestions = (request: Request, response:Response) => {
        response.status(200).json({message: "hello world"});
}