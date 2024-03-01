// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAIbU3WgdgvmLV1U6GH-E6H2UTPYr7fTw",
  authDomain: "umrah-ride-bbcba.firebaseapp.com",
  projectId: "umrah-ride-bbcba",
  storageBucket: "umrah-ride-bbcba.appspot.com",
  messagingSenderId: "719159743497",
  appId: "1:719159743497:web:8344a578d1aa80823d94d8",
  measurementId: "G-7BN5NQXX31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);