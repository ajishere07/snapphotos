import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvEakW_1IONaNUVAwfes5gjD5Js3bFLyM",
  authDomain: "snapphotos-6ee9f.firebaseapp.com",
  projectId: "snapphotos-6ee9f",
  storageBucket: "snapphotos-6ee9f.appspot.com",
  messagingSenderId: "882220130368",
  appId: "1:882220130368:web:00f2b49cce20774232bfa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
