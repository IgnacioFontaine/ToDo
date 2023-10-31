import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {
  getStorage,
  ref,
  uploadBytes,
  getDowloadURL,
  getBytes
} from "firebase/storage"
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  getDocs,
  query,
  setDoc,
  where,
  deleteDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDe7k2j1wqhPn91nkVK5SLjlV_1hdJTRYw",
  authDomain: "todo-754a5.firebaseapp.com",
  projectId: "todo-754a5",
  storageBucket: "todo-754a5.appspot.com",
  messagingSenderId: "120662675857",
  appId: "1:120662675857:web:564228a9dd235205778a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)