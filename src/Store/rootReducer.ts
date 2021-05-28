import { combineReducers } from "redux";
import { allPizzasReducer } from "./reducers/allPizzasReducer";
import { modalReducer } from "./reducers/modalReducer";

const reducers = combineReducers({
    allPizzas: allPizzasReducer,
    modal: modalReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;