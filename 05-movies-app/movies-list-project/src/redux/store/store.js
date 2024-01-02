import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import moviesReducer from "../reducers/moviesReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// 1- Create store
const store = createStore(
  moviesReducer,
  applyMiddleware(thunk)
  //   composeWithDevTools(),
);

export default store;
