import { noContent, ok } from "../utils/http-helper";


export const getCategoriesList = async () => {
    const data = {message: "hello world 2"};
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}