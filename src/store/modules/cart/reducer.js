import { ADD_PROD, DEL_PROD } from "./actionTypes";

const cartReducer = (state = {prods: []}, action) => {
switch (action.type) {
    case ADD_PROD:
        return action.updatedCart;
        
        case DEL_PROD:
            return action.updatedCart;
            
    default:
        return state;
}
};

export default cartReducer;
