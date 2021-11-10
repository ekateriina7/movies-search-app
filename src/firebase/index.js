import { initializeApp } from 'firebase/app';
//import dotenv from "dotenv";
//dotenv.config();

let firebaseConfig = {
  apiKey: "AIzaSyDkmb_bY55Yte4An5iTGCLcEpfZ--hdbzY",
  authDomain: "movies-search-1c281.firebaseapp.com",
  projectId: "movies-search-1c281",
  storageBucket: "movies-search-1c281.appspot.com",
  messagingSenderId: "292908955545",
  appId: "1:292908955545:web:435e196455d64044774508",
  measurementId: "G-BDGFF4EQGD"
};

  const app = initializeApp(firebaseConfig);

export default app;