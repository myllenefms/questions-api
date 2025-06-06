import {Request, Response} from "express";
import { getQuestionsList } from "../services/questions-service";

export const getQuestions = async (request: Request, response:Response) => {
    const data = await getQuestionsList();
    response.status(200).json(data);
}