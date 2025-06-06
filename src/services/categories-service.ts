import { ok } from "../utils/http-helper";


export const getCategoriesList = async () => {
    const data = await ok({message: "hello world 2"});
    return data;
}