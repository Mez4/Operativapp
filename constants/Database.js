// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCptoZVGqKaaP6B1gk_YCUcJ5epQwA0I18",
  authDomain: "operativapp-2b332.firebaseapp.com",
  projectId: "operativapp-2b332",
  storageBucket: "operativapp-2b332.appspot.com",
  messagingSenderId: "9033693742",
  appId: "1:9033693742:web:09860ce48869a22c467dbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();