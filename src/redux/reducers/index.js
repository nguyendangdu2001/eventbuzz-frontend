import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { modalReducer } from "./modalReducer";
import userReducer from "./userReducer";

export const Reducer = combineReducers({
  darkMode: darkModeReducer,
  userStatus: userReducer,
  error: errorReducer,
  loading: loadingReducer,
  modal: modalReducer,
});
export default Reducer;
