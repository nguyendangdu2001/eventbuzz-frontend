import rootReducer from "../reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;

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
export default createStore(rootReducer, initialState, middleware);
