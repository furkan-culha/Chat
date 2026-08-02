// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "first-project-3bf37.firebaseapp.com",
  projectId: "first-project-3bf37",
  storageBucket: "first-project-3bf37.firebasestorage.app",
  messagingSenderId: "997010268837",
  appId: "1:997010268837:web:bd12be1d551e11e23e634c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisi referansını al
export const auth = getAuth(app);

// gogogle sağlayıcıs kurulumu
export const provider = new GoogleAuthProvider();

// firestore service reference alma
export const db = getFirestore(app);
