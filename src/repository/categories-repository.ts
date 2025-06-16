import fs from "fs";
import path from "path";
import { CategoryModel } from "../models/category-model";

const pathData = path.join(__dirname, "../data/categories.json");

const getDataBase = async () =>{
    //recuperar o json
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    return jsonFile;
}


export const getAllCategoriesRepo = async () : Promise<CategoryModel[]> => {
    return await getDataBase();
}

export const getCategoryByIdRepo = async (id: number): Promise<string> => {
    let data = await getDataBase();
    if(data){
        data = data.filter((q: CategoryModel) => q.id === id);
    }
    return data.descricao;
}