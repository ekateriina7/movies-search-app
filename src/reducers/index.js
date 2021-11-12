import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { authReducer } from "./auth";
import { paginationReducer } from "./pagination";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  pagination: paginationReducer
});
