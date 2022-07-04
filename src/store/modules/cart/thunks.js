import { addProd } from "./actions";

export const addProdThunk = (prod) => {

return (dispatch, getState) => {

const {cart} = getState();


localStorage.clear()

if (cart.prods.includes(prod)){
    prod.qtd = 2
}

if (!cart.prods.includes(prod)){
prod.qtd = 1
const updatedCart = {prods:[ ...cart.prods, prod] };
localStorage.setItem('CartProd', {updatedCart})

dispatch(addProd(updatedCart));
}
};
};


export const delProdThunk = (prod) => {

    return (dispatch, getState) => {
    
    const {cart} = getState();

    console.log(cart.prods.splice(cart.prods.indexOf(prod),1))
    localStorage.clear()
    const updatedCart = {prods:[ cart.prods.splice(cart.prods.indexOf(prod),1)] };
    console.log(updatedCart)
    localStorage.setItem('CartProd', {updatedCart})
    
    dispatch(addProd(updatedCart));
    };
    };
    