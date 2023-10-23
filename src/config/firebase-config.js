import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { aptData } from "../api-data";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: aptData.key,
    authDomain: "car-dealership-9b83d.firebaseapp.com",
    projectId: "car-dealership-9b83d",
    storageBucket: aptData.url,
    messagingSenderId: "834726499062",
    appId: "1:834726499062:web:bbd14dfa775bfafffa52d7",
    measurementId: "G-B43QTJW01D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const emailAuthProvider = new EmailAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy