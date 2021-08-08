import { combineReducers } from "redux";
import  charactersReducer  from "./charactersReducer";
import characterReducer from "./characterReducer";

const reducers = combineReducers({
    characters : charactersReducer,
    character : characterReducer
})

export default reducers