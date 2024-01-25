// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGzV3OeNV3oLAybyLLKuFnvj9dhLmQlU0",
    authDomain: "notification-349f0.firebaseapp.com",
    projectId: "notification-349f0",
    storageBucket: "notification-349f0.appspot.com",
    messagingSenderId: "353237332153",
    appId: "1:353237332153:web:fce25c3f4a7af430786b68",
    measurementId: "G-F2QMDT38GS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
