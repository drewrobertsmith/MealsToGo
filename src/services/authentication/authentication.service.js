import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5x17EDjG930x94YWhs1scF-48Aitrhw",
  authDomain: "mealstogo-eb46a.firebaseapp.com",
  projectId: "mealstogo-eb46a",
  storageBucket: "mealstogo-eb46a.appspot.com",
  messagingSenderId: "42832315318",
  appId: "1:42832315318:web:beb67a4baee7ef8c593717",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
