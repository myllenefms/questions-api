import {Request, Response} from "express";
import { getCategoriesList } from "../services/categories-service";

export const getCategories = async (request: Request, response:Response) => {
    const data = await getCategoriesList();
    response.status(200).json(data);
}