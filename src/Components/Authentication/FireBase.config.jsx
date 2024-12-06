// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEBeMBLdYxpWewB5PpCT_s3Ip_3xh8oMM",
  authDomain: "chattingapplication-7c028.firebaseapp.com",
  projectId: "chattingapplication-7c028",
  storageBucket: "chattingapplication-7c028.firebasestorage.app",
  messagingSenderId: "875331740130",
  appId: "1:875331740130:web:72f6e70104db6ab1d219bb",
  measurementId: "G-XNLF6XX0SD"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export default firebaseConfig