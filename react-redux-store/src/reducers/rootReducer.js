import { combineReducers } from "redux";
import productReducer from './productReducer'
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
    productReducer,
});

export default rootReducer;
