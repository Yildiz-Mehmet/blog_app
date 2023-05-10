import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnyueVhhPG5-1usAB9nb2UNIYPBiHUSZg",
  authDomain: "blogproject-4d35d.firebaseapp.com",
  projectId: "blogproject-4d35d",
  storageBucket: "blogproject-4d35d.appspot.com",
  messagingSenderId: "853379442339",
  appId: "1:853379442339:web:244834a7c2ec8afee40116",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
