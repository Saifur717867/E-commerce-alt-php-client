// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGfdsWEOrqTHnEtCXz4pCHq7Z_HUpy-TQ",
  authDomain: "ecommerce-php-alt.firebaseapp.com",
  projectId: "ecommerce-php-alt",
  storageBucket: "ecommerce-php-alt.appspot.com",
  messagingSenderId: "801919225167",
  appId: "1:801919225167:web:d082144ca6efe55e72093a",
  measurementId: "G-CMY3TY90D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;