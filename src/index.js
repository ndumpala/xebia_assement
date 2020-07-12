import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducer";
import thunk from "redux-thunk";
import "./styles/styles.scss";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
