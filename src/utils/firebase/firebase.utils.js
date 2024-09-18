import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAE39wcZsE60n-eEcTzY3HahMzXudj-o6M",
  authDomain: "crwn-clothing-db-a975c.firebaseapp.com",
  projectId: "crwn-clothing-db-a975c",
  storageBucket: "crwn-clothing-db-a975c.appspot.com",
  messagingSenderId: "41619548272",
  appId: "1:41619548272:web:02c8c6bba88a788a69ecb5",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists)
}
