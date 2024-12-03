// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// modifikasi src/utils/firebase.ts
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUhGtgI4ivNKRgmTpsBPhDBrrPiHrQX00",
  authDomain: "vue-firebaseresponsi.firebaseapp.com",
  projectId: "vue-firebaseresponsi",
  storageBucket: "vue-firebaseresponsi.firebasestorage.app",
  messagingSenderId: "471109481949",
  appId: "1:471109481949:web:1ad11da19ac39751a83234"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
