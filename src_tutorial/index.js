import React from"react";
import ReactDOM from "react-dom"
import App from "./components/App";

import {createStore} from "redux"
import {reducers} from "./reducers/index";
import {Provider} from "react-redux";

import "./stylesheet/main.scss"

// build users list
let users = [];
for (let i=1; i < 12; i++) {
  users.push({
    id: i,
    username: "JK " + i,
    job: "Emp " + i
  });
}

const initial_state = {
  users: users
};

const store = createStore(reducers, initial_state);

// render te main component
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
