import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  //movies: moviesReducer,
  auth: authReducer,
});
