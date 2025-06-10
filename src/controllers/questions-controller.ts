import {Request, Response} from "express";
import * as questRepo from "../services/questions-service";

export const getQuestions = async (request: Request, response:Response) => {
    const res = await questRepo.getQuestionsList();
    response.status(res.statusCode).json(res.body);
}

export const getQuestionsByCategory = async (request: Request, response:Response) => {
    const res = await questRepo.getQuestionsListByCategory(request);
    response.status(res.statusCode).json(res.body);
}