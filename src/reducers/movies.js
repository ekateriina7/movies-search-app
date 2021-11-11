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
  GET_FAVORITE,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_ERROR,
} from "../actions/";
const initialState = {
  error: null,
  loading: false,
  movies: [],
  movie: "",
  favorite: "",
};

export const authReducer = (state = initialState, action) => {
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
    case GET_FAVORITE:
      return { loading: true };

    case GET_FAVORITE_SUCCESS:
      return { loading: false, favorite: action.payload };

    case GET_FAVORITE_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
