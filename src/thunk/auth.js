/* import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { login } from '../actions';

export const auth = getAuth();

export const generateSessionAndGetUser = (requestToken) => {
    console.log('generating')
  return async (dispatch) => {
    const { session_id } = await api.generateSessionId(requestToken);
    localStorage.setItem('session_id', session_id);
    const user = await api.getAccount(session_id);
    dispatch(login(user));
  };
};



export const registerUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER });
    let data = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: error,
    });
  }
};
 */