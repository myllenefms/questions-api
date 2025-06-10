import { HttpResponse } from "../models/http-response-model";
import * as questRepo from "../repository/questions-repository";
import { noContent, ok } from "../utils/http-helper";
import {Request} from "express";


export const getQuestionsList = async ():Promise<HttpResponse> => {
    const data = await questRepo.getAllQuestions();
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}

export const getQuestionsListByCategory = async (request: Request) :Promise<HttpResponse> => {
    const category = request.query
    const data = await questRepo.getQuestionsByCategory(1);
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}