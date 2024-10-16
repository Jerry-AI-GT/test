import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEP7WP3wezeMjsgUqYZJ2JOVnrLtIdfTE",
  authDomain: "simplify-242c5.firebaseapp.com",
  projectId: "simplify-242c5",
  storageBucket: "simplify-242c5.appspot.com",
  messagingSenderId: "6736340909",
  appId: "1:6736340909:web:ed91d61fb0468f1fe82324",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
