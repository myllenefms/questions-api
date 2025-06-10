import {Request, Response} from "express";
import * as questService from "../services/questions-service";

export const getQuestions = async (request: Request, response:Response) => {
    const res = await questService.getQuestionsListService();
    response.status(res.statusCode).json(res.body);
}

export const getQuestionsByCategory = async (request: Request, response:Response) => {
    const res = await questService.getQuestionsListByCategoryService(request);
    response.status(res.statusCode).json(res.body);
}