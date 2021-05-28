import AllPizas from "../../Components/AllPizzas/AllPizzasMain/AllPizas";
import * as types from "../types";


export const setAllPizzas = (dispatch: Function, getState: Function, id: number) => {
    const { allPizzas, selectedPizzas }= getState().allPizzas;

    const pizza = allPizzas.find((pizza: any) => pizza.id === id);

    dispatch({
        type: types.SET_ALL_PIZZAS,
        payload: [...selectedPizzas, pizza]
    });

};

export const buyPizza = (dispatch: Function, payload: []) => {
    dispatch({
       type: types.SET_ALL_PIZZAS,
       payload
    });
};

export const removePizzas = (dispatch: Function, getState: Function, id: number) => {
    const { selectedPizzas } = getState().allPizzas;

    const payload = selectedPizzas.filter((el: any) => el.id !== id);

    dispatch({
        type: types.SET_ALL_PIZZAS,
        payload: [...payload]
    });
};