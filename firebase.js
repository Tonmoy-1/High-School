// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYKrn26nLqx3ic5XvUkk7mRuL8ePrTACU",
  authDomain: "readymate-project.firebaseapp.com",
  projectId: "readymate-project",
  storageBucket: "readymate-project.firebasestorage.app",
  messagingSenderId: "193426581650",
  appId: "1:193426581650:web:6c2ecf7b57e5ad76a29e4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
