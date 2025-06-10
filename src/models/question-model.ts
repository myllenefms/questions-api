export interface QuestionModel {
    id: number,
    pergunta: string,
    alternativas: string[],
    resposta_correta: number,
    categoria: number,
    nivel: number
}