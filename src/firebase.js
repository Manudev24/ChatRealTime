// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKUtOOUjCazn1wh807Mi7AdZZAw--pQmc",
    authDomain: "chatrealtime-8b123.firebaseapp.com",
    projectId: "chatrealtime-8b123",
    storageBucket: "chatrealtime-8b123.appspot.com",
    messagingSenderId: "1076114085918",
    appId: "1:1076114085918:web:a435b0c5278eb74824b60f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();