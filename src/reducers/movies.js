import {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR
  } from "../actions/";
  const initialState = {
    error: null,
    loading: false,
    movies: [],
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return { loading: true };
  
      case GET_MOVIES_SUCCESS:
        return { loading: false, movies: action.payload };
  
      case GET_MOVIES_ERROR:
        return { loading: false, error: action.payload };
      
      default:
        return state;
    }
  };
  