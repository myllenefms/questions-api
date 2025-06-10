import { json } from "stream/consumers";
import {QuestionModel} from "../models/question-model";
import { Category, Level } from "./categories-repository";
import fs from "fs";
import path from "path";

const pathData = path.join(__dirname, "../data/questions.json");

const getDataBase = async () =>{
    //recuperar o json
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    return jsonFile;
}



export const getAllQuestionsRepo = async () : Promise<QuestionModel[]> => {
    return await getDataBase();
}

export const getQuestionsByCategoryRepo = async (category: number): Promise<QuestionModel[]> => {
    let data = await getDataBase();
    if(data){
        data = data.filter((q: QuestionModel) => q.categoria === category);
    }
    return data;
}