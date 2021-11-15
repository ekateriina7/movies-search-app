import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { authReducer } from "./auth";
import { paginationReducer } from "./pagination";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  pagination: paginationReducer,
  theme: themeReducer
});
