// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIgeh5TETkeQ_J7fccd1_aKXfUYs8euls",
    authDomain: "kassandra-6830d.firebaseapp.com",
    projectId: "kassandra-6830d",
    storageBucket: "kassandra-6830d.appspot.com",
    messagingSenderId: "717575668638",
    appId: "1:717575668638:web:ed0a9a9992a2bf2f490c8f",
    measurementId: "G-G3DRYNGVV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);