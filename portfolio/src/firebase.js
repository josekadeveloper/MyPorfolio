import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLRBFa_A68xF8O9PHpnSmBooRO2qIPFGY",
  authDomain: "react-portfolio-dashboar-e457f.firebaseapp.com",
  projectId: "react-portfolio-dashboar-e457f",
  storageBucket: "react-portfolio-dashboar-e457f.appspot.com",
  messagingSenderId: "126509245370",
  appId: "1:126509245370:web:d490cff16183fb4914b383"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);