import rootReducer, { persistedReducer } from "../reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import persistStore from "redux-persist/es/persistStore";

const userInfo = Cookie.getJSON("userInfo-bwd") || null;

const initialState = userInfo
  ? {
      userStatus: {
        auth: true,
        userInfo: { ...userInfo },
      },
    }
  : {};

const middleware = import.meta.env.PROD
  ? compose(applyMiddleware(thunk))
  : compose(
      applyMiddleware(thunk),
      //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const store = createStore(persistedReducer, initialState, middleware);
const persistor = persistStore(store);
export { store, persistor };
