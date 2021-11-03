import { userActions } from '../actions';

export const initialState = {
  currentUser: {},
  isLoggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state
}