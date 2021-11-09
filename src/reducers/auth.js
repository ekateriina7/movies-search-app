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
} from "../actions/";
const initialState = {
  error: null,
  loading: false,
  user: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { loading: true };

    case REGISTER_USER_SUCCESS:
      return { loading: false, user: action.payload };

    case REGISTER_USER_ERROR:
      return { loading: false, error: action.payload };
    case LOGIN_USER:
      return { loading: true };

    case LOGIN_USER_SUCCESS:
      return { loading: false, user: action.payload };

    case LOGIN_USER_ERROR:
      return { loading: false, error: action.payload };
    case LOGOUT:
      return { loading: true };

    case LOGOUT_SUCCESS:
      return { loading: false, user: action.payload };

    case LOGOUT_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
