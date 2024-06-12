// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Tg3vA1wqfEXpwPMB_bJ0I3iPTXcMiOI",
  authDomain: "namebranch-66f26.firebaseapp.com",
  databaseURL: "https://namebranch-66f26-default-rtdb.firebaseio.com",
  projectId: "namebranch-66f26",
  storageBucket: "namebranch-66f26.appspot.com",
  messagingSenderId: "162779486962",
  appId: "1:162779486962:web:1dfec06a0e2ce308994e6b",
  measurementId: "G-MFS131G8LQ"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)