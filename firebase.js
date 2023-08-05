// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ3kFPD-mlIcW6rYEyLUKUqg9HWwbyjQU",
  authDomain: "fir-auth-bb8e8.firebaseapp.com",
  projectId: "fir-auth-bb8e8",
  storageBucket: "fir-auth-bb8e8.appspot.com",
  messagingSenderId: "797961016359",
  appId: "1:797961016359:web:18ef8f4cce42729dfd2a02"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };