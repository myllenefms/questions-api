export interface QuestionModel {
    id: number,
    pergunta: string,
    alternativas: string[],
    resposta_correta: number,
    categoria: number,
    nivel: number
}

export interface QuestionPlayModel {
    pergunta: string,
    alternativas: string[]
}

export interface QuestionPresentModel {
    id: number,
    pergunta: string,
    alternativas: string[],
    categoria: string,
    nivel: string
}