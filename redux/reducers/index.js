import {combineReducers} from "redux";
import CartReducer from "./cartReducer";

let reducers = combineReducers({
    cartReducer: CartReducer,
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer;