
import users from './users';
import {combineReducers} from "redux";
import { routerReducer } from "react-router-redux"

export const reducers = combineReducers({
  routing: routerReducer,
  users: users
});

export default function reducerCall(state, action, reducerClass) {
  // get the action classs method
  const [, method] = action.type.split('.');


  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if (['name', 'length', 'prototype'].indexOf(name) === -1) {
      return name;
    }
  });

  // check if the action methods exists in this class
  if (methods.find(x => x === method)) {;
    const new_state = cloneObject(state);
    return reducerClass[method](new_state, action);
  }else {
    return state;
  }
};

function cloneObject(o) {
  return JSON.parse(JSON.stringify(o));

}
