import { ok } from "../utils/http-helper";


export const getQuestionsList = async () => {
    const data = await ok({message: "hello world"});
    return data;
}