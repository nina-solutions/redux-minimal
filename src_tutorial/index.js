import React from"react";
import ReactDOM from "react-dom"
import App from "./components/App";

import {applyMiddleware, createStore} from "redux"
import {reducers} from "./reducers/index";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import "./stylesheet/main.scss"
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import NotFound from "./pages/NotFound";
import UserEdit from "./pages/UserEdit";
import Home from "./pages/Home";

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
  users: {
    list: users
  }
};

let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers, initial_state, middleware);//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(browserHistory, store);
// render te main component
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="user-edit(/:id)" component={UserEdit}/>
        <Route path="*" component={NotFound}/>
      </Route>
    <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
