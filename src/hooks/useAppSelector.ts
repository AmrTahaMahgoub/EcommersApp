import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/store/configureStore";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
