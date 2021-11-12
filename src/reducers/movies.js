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
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
} from "../actions/";
const initialState = {
  error: null,
  loading: false,
  movies: [],
  movie: "",
  userData: "",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { loading: true };

    case GET_MOVIES_SUCCESS:
      return { loading: false, movies: action.payload };

    case GET_MOVIES_ERROR:
      return { loading: false, error: action.payload };
    case GET_MOVIE:
      return { loading: true };

    case GET_MOVIE_SUCCESS:
      return { loading: false, movie: action.payload };

    case GET_MOVIE_ERROR:
      return { loading: false, error: action.payload };
    case MARK_FAVORITE:
      return { loading: true };

    case MARK_FAVORITE_SUCCESS:
      return { loading: false, favorite: action.payload };

    case MARK_FAVORITE_ERROR:
      return { loading: false, error: action.payload };
    case GET_USER_DATA:
      return { loading: true };

    case GET_USER_DATA_SUCCESS:
      return { loading: false, userData: action.payload };

    case GET_USER_DATA_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
