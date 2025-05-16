// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWb7JYOjJPi79QMwdtmxqZ1o-5NZaHa8U",
  authDomain: "mac-auth-c4a76.firebaseapp.com",
  projectId: "mac-auth-c4a76",
  storageBucket: "mac-auth-c4a76.firebasestorage.app",
  messagingSenderId: "589127423858",
  appId: "1:589127423858:web:345b91ba1c79fcf4222feb",
  measurementId: "G-SQ7RTYPZB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;