// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd75P-9Pz1tSiWKCwUJ6YcHxoRAeeYNzk",
  authDomain: "van-life-1ee5d.firebaseapp.com",
  projectId: "van-life-1ee5d",
  storageBucket: "van-life-1ee5d.firebasestorage.app",
  messagingSenderId: "419163280424",
  appId: "1:419163280424:web:0b9011c23cd3b43c47911d"
};

// ✅ Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Export Firestore instance so others can use it
export { db };
