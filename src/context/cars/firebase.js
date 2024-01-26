// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx09ub7s3Bsh2CvHZ2BvyKwxYiWUqVhuY",
  authDomain: "umrah-ride.firebaseapp.com",
  projectId: "umrah-ride",
  storageBucket: "umrah-ride.appspot.com",
  messagingSenderId: "602393523330",
  appId: "1:602393523330:web:d2e41466f693759450309b",
  measurementId: "G-VZHPYCJQQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);