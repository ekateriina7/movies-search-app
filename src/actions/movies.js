import * as api from '../apis';
import { getFirestore, arrayUnion, setDoc, doc,  } from "firebase/firestore/lite";
import app from "../firebase";

const db = getFirestore(app);

export const GET_MOVIES = "Get movies";
export const GET_MOVIES_SUCCESS = "Get movies success";
export const GET_MOVIES_ERROR = "Get movies error";
export const getMovies = (page) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIES });
    let data = await api.getMovies(page)
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

export const MARK_FAVORITE = "Mark favorite";
export const MARK_FAVORITE_SUCCESS = "Mark favorite success";
export const MARK_FAVORITE_ERROR = "Mark favorite error";
export const markAsFavorite = (userId, id) => async (dispatch) => {
  try {
    dispatch({ type: MARK_FAVORITE });
    const userRef = doc(db, 'users', userId, 'user', userId);
    let data = await setDoc(userRef, { favorites: arrayUnion(id)}, { merge: true });
    dispatch({ type: MARK_FAVORITE_SUCCESS, payload: data });
     return data
  } catch (error) {
    dispatch({
      type: MARK_FAVORITE_ERROR,
      payload: error.message,
    });
  }
};

export const SEARCH_MOVIES_BY_TITLE = "Search movies by title";
export const SEARCH_MOVIES_BY_TITLE_SUCCESS = "Search movies by title success";
export const SEARCH_MOVIES_BY_TITLE_ERROR = "Search movies by title error";
export const searchMoviesByTitle = (query, page) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MOVIES_BY_TITLE });
    let data = await api.searchMovieByTitle(query,page)
    console.log(data, query,'here')
    dispatch({ type: SEARCH_MOVIES_BY_TITLE_SUCCESS, payload: {data, query} });
     return data
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIES_BY_TITLE_ERROR,
      payload: error.message,
    });
  }
};