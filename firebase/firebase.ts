// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app"
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOGF5gS7u9tnCwUX1jkMEhW3TCdOt-nfA",
  authDomain: "reactapp-b473e.firebaseapp.com",
  projectId: "reactapp-b473e",
  storageBucket: "reactapp-b473e.appspot.com",
  messagingSenderId: "693792135079",
  appId: "1:693792135079:web:0eca332020dce650a50882",
  measurementId: "G-VSY5P1TYWD"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP)

export {FIREBASE_APP,FIREBASE_AUTH,FIREBASE_DB};