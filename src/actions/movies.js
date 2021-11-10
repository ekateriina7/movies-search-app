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

export const GET_MOVIE = "Get movie";
export const GET_MOVIE_SUCCESS = "Get movie success";
export const GET_MOVIE_ERROR = "Get movie error";
export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE });
    let data = await api.getMovie(id)
    dispatch({ type: GET_MOVIE_SUCCESS, payload: data });
     return data
  } catch (error) {
    dispatch({
      type: GET_MOVIE_ERROR,
      payload: error.message,
    });
  }
};