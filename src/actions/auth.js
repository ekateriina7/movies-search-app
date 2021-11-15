import { getFirestore, setDoc, doc, getDoc,  } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../firebase";

const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();
const id = localStorage.getItem("userId");

export const REGISTER_USER = "Register user";
export const REGISTER_USER_SUCCESS = "Register user success";
export const REGISTER_USER_ERROR = "Register user error";
export const registerUser = (user, date, gender ) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER });
    const data = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    localStorage.setItem("userId", data.user.uid);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    const userObj = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender:gender.value,
      dateOfBirth: date,
      username: user.username,
      favorites: [],
    };
    const dbRef = doc(db, `users/${data.user.uid}/user/${data.user.uid}`);
    await setDoc(dbRef, userObj);
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
    localStorage.setItem("userId", data.user.uid);
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

export const GET_USER_DATA = "Get user data";
export const GET_USER_DATA_SUCCESS = "Get user data success";
export const GET_USER_DATA_ERROR = "Get user data error";
export const getUserData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_DATA });
    const docRef = doc(db, "users", id, "user", id);
    let data = await getDoc(docRef);
    dispatch({ type: GET_USER_DATA_SUCCESS, payload: data });
    return data.data();
  } catch (error) {
    dispatch({
      type: GET_USER_DATA_ERROR,
      payload: error.message,
    });
  }
};

export const GET_USER_IMAGE = "Get user image";
export const GET_USER_IMAGE_SUCCESS = "Get user image";
export const GET_USER_IMAGE_ERROR = "Get user image error";
export const getUserImage = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_IMAGE });
    const imgRef = ref(storage, id);
    const url = await getDownloadURL(imgRef)
    const userRef = doc(db, 'users', id, 'user', id);
    let data = await setDoc(userRef, { photo: url}, { merge: true });
    dispatch({ type: GET_USER_IMAGE_SUCCESS, payload: data });
    return data
  } catch (error) {
    dispatch({
      type: GET_USER_IMAGE_ERROR,
      payload: error.message,
    });
  }
};