import {Request, Response} from "express";
import { getCategoriesListService } from "../services/categories-service";

export const getCategories = async (request: Request, response:Response) => {
    const res = await getCategoriesListService();
    response.status(res.statusCode).json(res.body);
}