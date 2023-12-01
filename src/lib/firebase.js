// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "blog-4e644.firebaseapp.com",
  projectId: "blog-4e644",
  storageBucket: "blog-4e644.appspot.com",
  messagingSenderId: "502919473793",
  appId: "1:502919473793:web:69c999c8d8d05dabcffb80",
  measurementId: "G-HWSG8Y60C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
