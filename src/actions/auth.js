import { getFirestore, setDoc, doc, } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth();
const db = getFirestore(app);

export const REGISTER_USER = "Register user";
export const REGISTER_USER_SUCCESS = "Register user success";
export const REGISTER_USER_ERROR = "Register user error";
export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER });
    const data = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    localStorage.setItem('userId',data.user.uid)
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    const userObj = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      sex: user.sex,
      dateOfBirth: user.dateOfBirth,
      username: user.username,
      favorites:[]
    }
    const dbRef = doc(db,`users/${data.user.uid}/user/${data.user.uid}`)
     await setDoc(dbRef,userObj);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: error.message,
    });
  }
};

export const LOGIN_USER = "Login user";
export const LOGIN_USER_SUCCESS = "Login user success";
export const LOGIN_USER_ERROR = "Login user error";

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER });
    const data = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    localStorage.setItem('userId',data.user.uid)
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: error.message,
    });
  }
};

export const LOGOUT = "Log out";
export const LOGOUT_SUCCESS = "Log out success";
export const LOGOUT_ERROR = "Log out error";

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    let data = await signOut(auth);
    dispatch({ type: LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGOUT_ERROR,
      payload: error.message,
    });
  }
};
