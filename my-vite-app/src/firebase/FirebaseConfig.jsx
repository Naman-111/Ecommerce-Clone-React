// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-I2vGiH3xqxuw86TeNlpdd9BXbnXzgeQ",
  authDomain: "my-project-695e7.firebaseapp.com",
  projectId: "my-project-695e7",
  storageBucket: "my-project-695e7.appspot.com",
  messagingSenderId: "1071584426017",
  appId: "1:1071584426017:web:5e6ef0ff9fa799a2a84b60",
  measurementId: "G-K479XRP9L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;