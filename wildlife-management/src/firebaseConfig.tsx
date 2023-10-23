// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmEZfrZhJOlnBjpGnMHdk321tdzDP4uqw",
    authDomain: "cr-wildlife-management.firebaseapp.com",
    projectId: "cr-wildlife-management",
    storageBucket: "cr-wildlife-management.appspot.com",
    messagingSenderId: "299211485667",
    appId: "1:299211485667:web:ba477da69230ef90a7f0d6",
    measurementId: "G-C3M1GT9LPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }