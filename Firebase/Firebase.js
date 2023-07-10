// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnMKZJ1cC8Amgt6OjFu7g2NXZeqXb6-ZU",
  authDomain: "nextjsking.firebaseapp.com",
  projectId: "nextjsking",
  storageBucket: "nextjsking.appspot.com",
  messagingSenderId: "1047054924425",
  appId: "1:1047054924425:web:a6eeafdb8d6c2fd526e458",
  measurementId: "G-EXKHGHPTY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
// export const intiFirebase = () => {
//     return analytics;
// }