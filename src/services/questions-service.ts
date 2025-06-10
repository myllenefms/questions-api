import { HttpResponse } from "../models/http-response-model";
import * as questRepo from "../repository/questions-repository";
import { noContent, ok } from "../utils/http-helper";
import {Request} from "express";


export const getQuestionsListService = async ():Promise<HttpResponse> => {
    const data = await questRepo.getAllQuestionsRepo();
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}

export const getQuestionsListByCategoryService = async (request: Request) :Promise<HttpResponse> => {
    const category = request.params.category
    const data = await questRepo.getQuestionsByCategoryRepo(parseInt(category));
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}