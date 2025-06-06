import { noContent, ok } from "../utils/http-helper";


export const getQuestionsList = async () => {
    const data = null;
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}