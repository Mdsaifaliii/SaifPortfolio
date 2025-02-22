// Import the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnRxsT8LaHeuUeiIMWsbZdyFTYe0VGuo0",
  authDomain: "portfoliocontact-ec6a6.firebaseapp.com",
  projectId: "portfoliocontact-ec6a6",
  storageBucket: "portfoliocontact-ec6a6.appspot.com",
  messagingSenderId: "624509064658",
  appId: "1:624509064658:web:8f6120f8bd1170e725a40b",
  measurementId: "G-0J3XLJL2BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app); // Firestore

export { app, firestoreDB };
