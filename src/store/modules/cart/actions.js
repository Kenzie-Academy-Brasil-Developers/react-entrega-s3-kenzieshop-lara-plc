import { ADD_PROD, DEL_PROD } from "./actionTypes";

export const addProd = (updatedCart) => ({
type: ADD_PROD,
updatedCart,
});
 
export const delProd = (updatedCart) => ({
    type: DEL_PROD,
    updatedCart,
    });