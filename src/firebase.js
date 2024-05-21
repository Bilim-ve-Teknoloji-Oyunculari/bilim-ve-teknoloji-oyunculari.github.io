// Firebase SDK
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5r0S1nJ5AibfjmAX0uXs7EbGjufOmjyQ",
    authDomain: "bto-preview.firebaseapp.com",
    projectId: "bto-preview",
    storageBucket: "bto-preview.appspot.com",
    messagingSenderId: "881356958831",
    appId: "1:881356958831:web:f1d93a02ad6e864069b19a",
    databaseURL: "https://bto-preview-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
