import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  GET_USER_IMAGE,
  GET_USER_IMAGE_SUCCESS,
  GET_USER_IMAGE_ERROR
} from "../actions/";
const initialState = {
  error: null,
  loading: false,
  user: "",
  pic:''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case REGISTER_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, loading: true };

    case LOGOUT_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case LOGOUT_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_USER_DATA:
      return { ...state, loading: true };

    case GET_USER_DATA_SUCCESS:
      return { ...state, loading: false, userData: action.payload };

    case GET_USER_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };

      case GET_USER_IMAGE:
      return { ...state, loading: true };

    case GET_USER_IMAGE_SUCCESS:
      return { ...state, loading: false, pic: action.payload };

    case GET_USER_IMAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
