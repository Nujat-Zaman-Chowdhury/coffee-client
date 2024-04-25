// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkbYnQ-W4YhqJjhQQSX20wJlU8lXC1YGM",
  authDomain: "coffee-auth-ed421.firebaseapp.com",
  projectId: "coffee-auth-ed421",
  storageBucket: "coffee-auth-ed421.appspot.com",
  messagingSenderId: "618625605495",
  appId: "1:618625605495:web:5d8dbe7ef4a00f11d5cb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;