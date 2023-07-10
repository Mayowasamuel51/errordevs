
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAnMKZJ1cC8Amgt6OjFu7g2NXZeqXb6-ZU",
  authDomain: "nextjsking.firebaseapp.com",
  projectId: "nextjsking",
  storageBucket: "nextjsking.appspot.com",
  messagingSenderId: "1047054924425",
  appId: "1:1047054924425:web:a6eeafdb8d6c2fd526e458",
  measurementId: "G-EXKHGHPTY3"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);


export default app;