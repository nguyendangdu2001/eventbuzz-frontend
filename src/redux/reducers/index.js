import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import darkModeReducer from "./darkModeReducer";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { modalReducer } from "./modalReducer";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";

export const Reducer = combineReducers({
  darkMode: darkModeReducer,
  userStatus: userReducer,
  error: errorReducer,
  loading: loadingReducer,
  modal: modalReducer,
});
export const persistedReducer = persistReducer(
  { key: "EventBuzzReduxPersist", storage: storage, blacklist: ["userStatus"] },
  Reducer
);
export default Reducer;
