import * as api from '../apis';

export const GET_MOVIES = "Get movies";
export const GET_MOVIES_SUCCESS = "Get movies success";
export const GET_MOVIES_ERROR = "Get movies error";
export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIES });
    let data = await api.getMovies()
    dispatch({ type: GET_MOVIES_SUCCESS, payload: data });
     return data
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: error.message,
    });
  }
};