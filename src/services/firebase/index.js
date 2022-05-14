import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa3l5XvgwPU9l15MJCIL3jccUyRxbiyd8",
  authDomain: "jade-mosaico.firebaseapp.com",
  projectId: "jade-mosaico",
  storageBucket: "jade-mosaico.appspot.com",
  messagingSenderId: "872696405274",
  appId: "1:872696405274:web:adaf89b1054e0ba4b720a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);