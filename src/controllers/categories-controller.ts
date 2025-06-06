import {Request, Response} from "express";

export const getCategories = (request: Request, response:Response) => {
        response.status(200).json({message: "hello world 2"});
}