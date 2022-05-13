import { initializeApp } from 'firebase/app';
//import dotenv from "dotenv";
//dotenv.config();

let firebaseConfig = {
  apiKey: "AIzaSyAv5-mRz6kbBjjmEpFN2uBIe-cMwMSwfJI",
  authDomain: "search-movies-31d62.firebaseapp.com",
  projectId: "search-movies-31d62",
  storageBucket: "search-movies-31d62.appspot.com",
  messagingSenderId: "408485356800",
  appId: "1:408485356800:web:5fd9c02811725f01637fe5"
};


  const app = initializeApp(firebaseConfig);

export default app;