import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Store/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;