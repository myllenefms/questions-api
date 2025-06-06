import {Request, Response} from "express";
import { getQuestionsList } from "../services/questions-service";
import { ok } from "../utils/http-helper";

export const getQuestions = async (request: Request, response:Response) => {
    const res = await getQuestionsList();
    response.status(res.statusCode).json(res.body);
}