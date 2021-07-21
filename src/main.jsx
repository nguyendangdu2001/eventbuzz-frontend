import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "@config/theme";
import { store, persistor } from "./redux/store/store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { configAxios } from "@config/axios";
import "./config/timeago";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { PersistGate } from "redux-persist/integration/react";
// console.log(store.);
configAxios(store);

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination("type"),
          userPosts: relayStylePagination("type"),
          commentsById: relayStylePagination(["postId", "commentId"]),
          myEvent: relayStylePagination(),
          suggestionTags: relayStylePagination(["key"]),
        },
      },
      Post: {
        fields: {
          comments: relayStylePagination(),
        },
      },
    },
  }),
  connectToDevTools: true,
  credentials: "include",
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter basename={import.meta.env.BASE_URL}>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
          </HashRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
