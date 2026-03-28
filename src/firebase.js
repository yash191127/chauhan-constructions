// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firestore (DATABASE)
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0fFTnD6phMiE-ypxWss5CoF7Kl7-eOxc",
  authDomain: "chauhan-construction.firebaseapp.com",
  projectId: "chauhan-construction",
  storageBucket: "chauhan-construction.firebasestorage.app",
  messagingSenderId: "284464820003",
  appId: "1:284464820003:web:6c9d50763e3132b9eda696",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Initialize Firestore DB
export const db = getFirestore(app);