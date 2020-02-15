import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

export default function configureStore(initialState = {}) {
  return createStore(combineReducers(Reducers), initialState, applyMiddleware(thunk));
}
