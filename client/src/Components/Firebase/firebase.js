import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export async function userExists(uid) {
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);

  return res.exists;
}

export async function registerNewUser(user) {
  try {
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, user.uid), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function logout() {
  await auth.signOut();

}