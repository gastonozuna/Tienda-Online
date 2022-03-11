import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP74VvON4dWNvm9wrfgjqX_mjvQcptF-Q",
  authDomain: "tienda-online-coderhouse.firebaseapp.com",
  projectId: "tienda-online-coderhouse",
  storageBucket: "tienda-online-coderhouse.appspot.com",
  messagingSenderId: "320090123962",
  appId: "1:320090123962:web:37e7b1ab5817022f221c83",
  measurementId: "G-NG6R5FMVEF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);