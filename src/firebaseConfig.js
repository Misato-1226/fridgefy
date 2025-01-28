// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlMaGisyIIeUwgw22xPWNUAP_QVS9oxgw",
  authDomain: "fridgefy-9bcbd.firebaseapp.com",
  projectId: "fridgefy-9bcbd",
  storageBucket: "fridgefy-9bcbd.firebasestorage.app",
  messagingSenderId: "1042776355050",
  appId: "1:1042776355050:web:204d07cd54d83a65dfe793",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
