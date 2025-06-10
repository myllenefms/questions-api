import {QuestionModel} from "../models/question-model";
import { Category, Level } from "./categories-repository";

const database: QuestionModel[] = [
    {
        id: 1, 
        pergunta: "qual seu nome",
        alternativas: ["beltrano", "ciclano"],
        resposta_correta: 1,
        categoria: Category.Gerais,
        nivel: Level.Facil
    },
    {
        id: 2, 
        pergunta: "qual sua idade",
        alternativas: ["20", "25"],
        resposta_correta: 2,
        categoria: Category.Gerais,
        nivel: Level.Facil
    }
]

export const getAllQuestions = async () : Promise<QuestionModel[]> => {
    return database;
}

export const getQuestionsByCategory = async (category: number): Promise<QuestionModel | undefined> => {
    const data = database.find( q => q.categoria === category);
    return data;
}