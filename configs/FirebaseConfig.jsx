// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-forge-logo.firebaseapp.com",
  projectId: "ai-forge-logo",
  storageBucket: "ai-forge-logo.firebasestorage.app",
  messagingSenderId: "367960091554",
  appId: "1:367960091554:web:f8ceb6476fd38eb59860fb",
  measurementId: "G-ZERFGYY97L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
// const analytics = getAnalytics(app);