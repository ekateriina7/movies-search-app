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
    dispatch({ type: SEARCH_MOVIES_BY_TITLE_SUCCESS, payload: {data, query} });
     return data
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIES_BY_TITLE_ERROR,
      payload: error.message,
    });
  }
};

export const GET_GENRES = "Get genres";
export const GET_GENRES_SUCCESS = "Get genres success";
export const GET_GENRES_ERROR = "Get genres error";
export const getGenres = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GENRES });
    let data = await api.getGenres()
    dispatch({ type: GET_GENRES_SUCCESS, payload: data });
     return data
  } catch (error) {
    dispatch({
      type: GET_GENRES_ERROR,
      payload: error.message,
    });
  }
};

export const GET_LANGUAGES = "Get languages";
export const GET_LANGUAGES_SUCCESS = "Get languages success";
export const GET_LANGUAGES_ERROR = "Get languages error";
export const getLanguages = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LANGUAGES });
    let data = await api.getLanguages()
    dispatch({ type: GET_LANGUAGES_SUCCESS, payload: data });
     return data
  } catch (error) {
    dispatch({
      type: GET_LANGUAGES_ERROR,
      payload: error.message,
    });
  }
};

export const SEARCH_MOVIES_BY_GENRES_LANGUAGE = "Search movies by genres and language";
export const SEARCH_MOVIES_BY_GENRES_LANGUAGE_SUCCESS = "Search movies by genres and language success";
export const SEARCH_MOVIES_BY_GENRES_LANGUAGE_ERROR = "Search movies by genres and language error";
export const searchMoviesByGenresLanguage = (genre, language, page) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MOVIES_BY_GENRES_LANGUAGE });
    let data = await api.searchMoviesByGenreAndTitle( genre, language, page)
    dispatch({ type: SEARCH_MOVIES_BY_GENRES_LANGUAGE_SUCCESS, payload: data });
     return data
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIES_BY_GENRES_LANGUAGE_ERROR,
      payload: error.message,
    });
  }
};

export const SET_GENRES_SEARCH = 'Set genre criteria for search';
export const setGenres = (genre) => ({
  type: SET_GENRES_SEARCH,
  payload: genre,
});

export const SET_LANGUAGE_SEARCH = 'Set language criteria for search';
export const setLanguage = (lang) => ({
  type: SET_LANGUAGE_SEARCH,
  payload: lang,
});
