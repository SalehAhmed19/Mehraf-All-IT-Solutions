// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzBNWEa0arUoV04VUbUtVUSmkPTBMAurE",
  authDomain: "mehraf-all-it-solution.firebaseapp.com",
  projectId: "mehraf-all-it-solution",
  storageBucket: "mehraf-all-it-solution.appspot.com",
  messagingSenderId: "981375254118",
  appId: "1:981375254118:web:fb76a9ea36d296cbe1b7a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
