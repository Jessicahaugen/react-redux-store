import ADDTOCART from '../ActionTypes/cartActionTypes'

export const addToCart = (dispatch, products) => {
    return dispatch({
        type:"ADDTOCART",
        payload:products,
    })
}