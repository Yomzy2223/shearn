import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADrhpUXa-Fcx4baaodOvlQrQbaumHRhkY",
  authDomain: "shareearn-9ff6e.firebaseapp.com",
  projectId: "shareearn-9ff6e",
  storageBucket: "shareearn-9ff6e.appspot.com",
  messagingSenderId: "86826862319",
  appId: "1:86826862319:web:ad9ee98ea0f5f65efa3d1a",
  measurementId: "G-HN6CSWF51V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
