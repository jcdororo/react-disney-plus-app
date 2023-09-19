// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA02ljnDfHRDjbCdZUxN6m2xke2B4eIdmA",
  authDomain: "react-disney-plus-app-d2821.firebaseapp.com",
  projectId: "react-disney-plus-app-d2821",
  storageBucket: "react-disney-plus-app-d2821.appspot.com",
  messagingSenderId: "862665724816",
  appId: "1:862665724816:web:7304744bd80ae019451915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;