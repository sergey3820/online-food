import * as types from "../types";

export const toggleModal = (dispatch: Function, payload: boolean) => {
   dispatch({
       type: types.TOGGLE_MODAL,
       payload
   });
};