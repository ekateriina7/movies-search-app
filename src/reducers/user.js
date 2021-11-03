import { userActions } from "../actions";

export const initialState = {
  currentUser: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  },
  isLoggedIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.LOG_IN:
      return {
        ...state,
        currentUser: { ...action.payload.user },
        isLoggedIn: true,
      };
    default:
      return state;
  }
}
