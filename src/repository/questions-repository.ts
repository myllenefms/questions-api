import {QuestionModel, QuestionPlayModel, QuestionPresentModel} from "../models/question-model";
import fs from "fs";
import path from "path";
import { getDataBaseCategory, getDataBaseLevel } from "../services/categories-service";
import { CategoryModel } from "../models/category-model";
import { LevelModel } from "../models/level-model";

const pathData = path.join(__dirname, "../data/questions.json");

const getDataBaseQuestion = async () =>{
    //recuperar o json
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    return jsonFile;
}

export const getAllQuestionsRepo = async () : Promise<QuestionModel[]> => {
    return await getDataBaseQuestion();
}

export const getQuestionsByCategoryRepo = async (category: number): Promise<QuestionPresentModel[]> => {
    let dataq = await getDataBaseQuestion();
    let datac = await getDataBaseCategory();
    let datal = await getDataBaseLevel();

    if(dataq){
        dataq = dataq.filter((q: QuestionModel) => q.categoria === category);
    }
    let response : QuestionPresentModel[] = [];
    dataq.forEach((q: QuestionModel) => {
        let dbcategoria = datac.find((c: CategoryModel) => c.id === q.categoria);
        let dbnivel = datal.find((l: LevelModel) => l.id === q.nivel);

        let r : QuestionPresentModel = {
            id : q.id,
            pergunta : q.pergunta,
            alternativas : q.alternativas,
            categoria : dbcategoria ? dbcategoria.descricao : "",
            nivel : dbnivel ? dbnivel.descricao : ""
        }
        response.push(r);
    });

    return response;
}
