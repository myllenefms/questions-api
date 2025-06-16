import { noContent, ok } from "../utils/http-helper";
import fs from "fs";
import path from "path";
const pathDataCat = path.join(__dirname, "../data/categories.json");
const pathDataLev = path.join(__dirname, "../data/levels.json");

export const getDataBaseCategory = async () =>{
    //recuperar o json
    const rawData = fs.readFileSync(pathDataCat, "utf-8");
    let jsonFile = JSON.parse(rawData);

    return jsonFile;
}

export const getDataBaseLevel = async () =>{
    //recuperar o json
    const rawData = fs.readFileSync(pathDataLev, "utf-8");
    let jsonFile = JSON.parse(rawData);

    return jsonFile;
}

export const getCategoriesListService = async () => {
    let data = await getDataBaseCategory();
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}

export const getLevelsListService = async () => {
    let data = await getDataBaseLevel();
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}