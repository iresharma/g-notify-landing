import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-1R0d9npZXt1k0uVK00MqjWET5aNuoIk",
    authDomain: "getrewards-e9615.firebaseapp.com",
    projectId: "getrewards-e9615",
    storageBucket: "getrewards-e9615.appspot.com",
    messagingSenderId: "504413765282",
    appId: "1:504413765282:web:221edbd89f0739fd9aa1fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;