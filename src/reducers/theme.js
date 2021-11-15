import {
    CHANGE_THEME,
   
  } from "../actions";
  export const initialState = {
    darkMode: false,
  };
  
  export function themeReducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_THEME:
        return {
          ...state,
          darkMode: !state.darkMode,
        };
    
      default:
        return state;
    }
  }
  