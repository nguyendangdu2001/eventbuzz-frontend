import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "@config/theme";
import store from "./redux/store/store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { configAxios } from "@config/axios";
import "./config/timeago";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
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
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
