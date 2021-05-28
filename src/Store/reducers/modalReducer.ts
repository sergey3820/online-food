import * as types from "../types";
import { IModalAction, IModalState } from "./reducerInterfaces/modal.interface";

const initialState: IModalState = {
   isOpen: false,
};

export const modalReducer = (state = initialState, action: IModalAction) => {
    switch(action.type) {
        case types.TOGGLE_MODAL:
            return {
                ...state,
                isOpen: action.payload
            };
        default:
            return {
                ...state
            }    
    }
}