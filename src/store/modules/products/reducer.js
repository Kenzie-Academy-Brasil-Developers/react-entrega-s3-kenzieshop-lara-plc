import { productData } from "../../../products.js";



const productsReducer = (state = productData, action) => {
switch (action.type) {
        
    default:
        return state;
}
};

export default productsReducer;
