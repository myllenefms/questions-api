import {Request, Response} from "express";
import * as questService from "../services/questions-service";

export const getQuestions = async (request: Request, response:Response) => {
    const res = await questService.getQuestionsList();
    response.status(res.statusCode).json(res.body);
}

export const getQuestionsByCategory = async (request: Request, response:Response) => {
    const res = await questService.getQuestionsListByCategory(request);
    response.status(res.statusCode).json(res.body);
}