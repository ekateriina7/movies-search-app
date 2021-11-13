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
} from "../actions/";
const initialState = {
  error: null,
  loading: false,
  movies: [],
  movie: "",
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
      return { loading: true };

    case MARK_FAVORITE_SUCCESS:
      return { ...state, loading: false, favorite: action.payload };

    case MARK_FAVORITE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SEARCH_MOVIES_BY_TITLE:
      return { loading: true };

    case SEARCH_MOVIES_BY_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.data.results,
      };

    case SEARCH_MOVIES_BY_TITLE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
