// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXh3pin_i5pgTCEsGAAVaxSBnf5zf2p3M",
  authDomain: "discord-clone-ude.firebaseapp.com",
  projectId: "discord-clone-ude",
  storageBucket: "discord-clone-ude.appspot.com",
  messagingSenderId: "231689491043",
  appId: "1:231689491043:web:0e40c577d26864657ede56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
