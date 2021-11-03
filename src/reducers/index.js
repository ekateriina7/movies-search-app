import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  //movies: moviesReducer,
  user: userReducer,
});
