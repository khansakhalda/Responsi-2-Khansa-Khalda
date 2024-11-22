// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// modifikasi src/utils/firebase.ts
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC25sU1tA0VLgUA2ksr_hBp7bkNCY2JQ28",
  authDomain: "vue-firebase-f2358.firebaseapp.com",
  projectId: "vue-firebase-f2358",
  storageBucket: "vue-firebase-f2358.firebasestorage.app",
  messagingSenderId: "741001870155",
  appId: "1:741001870155:web:d70f1be4cd5be3ff6886ce",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
