import { combineReducers } from "redux";
import productReducer from './productReducer'
import cartReducer from './cartReducer'
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
    productReducer,
    cartReducer,
});

export default rootReducer;
