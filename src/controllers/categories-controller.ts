import {Request, Response} from "express";
import { getCategoriesList } from "../services/categories-service";
import { ok } from "../utils/http-helper";

export const getCategories = async (request: Request, response:Response) => {
    const res = await getCategoriesList();
    response.status(res.statusCode).json(res.body);
}