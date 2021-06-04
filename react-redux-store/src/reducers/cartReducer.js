import {ADDTOCART} from '../ActionTypes/cartActionTypes'
const initialState = [];


function cartReducer(state = initialState, action) {
    switch (action.type){
        case ADDTOCART:
            const newCart = [...state]
            newCart.push(action.payload)
            return newCart;
        default:
            return state;

    }
}

export default cartReducer;



