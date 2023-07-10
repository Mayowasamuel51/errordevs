import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBXfIXiAc6msK9os_Wk_a1Of0fDnF15-8",
  authDomain: "errordeveonline.firebaseapp.com",
  projectId: "errordeveonline",
  storageBucket: "errordeveonline.appspot.com",
  messagingSenderId: "260415101998",
  appId: "1:260415101998:web:c4fe09e47dd3ac4ab153bf",
  measurementId: "G-MWTTQT13T8"
}
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);


export default app;