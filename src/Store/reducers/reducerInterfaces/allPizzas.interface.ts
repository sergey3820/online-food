export interface IAllpizzasState {
    allPizzas: Array<object | number | string>;
    selectedPizzas: Array<object | number | string>;
    num: number;
};

export interface IAllPizzasAction {
    type: string;
    payload?: Array<object | string | number>;
};