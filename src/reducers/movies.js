import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  MARK_FAVORITE_ERROR,
  MARK_FAVORITE_SUCCESS,
  MARK_FAVORITE,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_TITLE_SUCCESS,
  SEARCH_MOVIES_BY_TITLE_ERROR,
  GET_GENRES,
  GET_GENRES_SUCCESS,
  GET_GENRES_ERROR,
  GET_LANGUAGES,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_ERROR,
  SEARCH_MOVIES_BY_GENRES_LANGUAGE,
  SEARCH_MOVIES_BY_GENRES_LANGUAGE_SUCCESS,
  SEARCH_MOVIES_BY_GENRES_LANGUAGE_ERROR,
  SET_GENRES_SEARCH,
  SET_LANGUAGE_SEARCH
} from "../actions/";
const initialState = {
  error: null,
  loading: false,
  movies: [],
  movie: "",
  genres: [],
  languages: [],
  genresQueries: [],
  language: "",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload.results };
    case GET_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_MOVIE:
      return { ...state, loading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, loading: false, movie: action.payload };
    case GET_MOVIE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case MARK_FAVORITE:
      return { ...state, loading: true };
    case MARK_FAVORITE_SUCCESS:
      return { ...state, loading: false, favorite: action.payload };
    case MARK_FAVORITE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SEARCH_MOVIES_BY_TITLE:
      return { ...state, loading: true };
    case SEARCH_MOVIES_BY_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.data.results,
      };
    case SEARCH_MOVIES_BY_TITLE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_GENRES:
      return { loading: true };
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.payload.genres,
      };
    case GET_GENRES_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_LANGUAGES:
      return { ...state, loading: true };
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        languages: action.payload,
      };
    case GET_LANGUAGES_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SEARCH_MOVIES_BY_GENRES_LANGUAGE:
      return { ...state, loading: true };
    case SEARCH_MOVIES_BY_GENRES_LANGUAGE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        movies: action.payload.results,
      };
    case SEARCH_MOVIES_BY_GENRES_LANGUAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SET_GENRES_SEARCH:
      return {
        ...state,
        genresQueries: state.genresQueries?[...state.genresQueries, action.payload]:[action.payload],
      };

      case SET_LANGUAGE_SEARCH:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
