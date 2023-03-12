// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQS8oEZedJR16cMwTeFAnCKOHBKym5WaM",
  authDomain: "ecommerce-32e42.firebaseapp.com",
  projectId: "ecommerce-32e42",
  storageBucket: "ecommerce-32e42.appspot.com",
  messagingSenderId: "977533480354",
  appId: "1:977533480354:web:0aeae1f8df5104a297d6fb",
  measurementId: "G-4WR63LJKPB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
