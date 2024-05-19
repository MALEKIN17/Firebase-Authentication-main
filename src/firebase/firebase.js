import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsQsGk24y1dZRVSnr6Z1zReWOCTfvhMtA",
  authDomain: "nemesis-874c8.firebaseapp.com",
  projectId: "nemesis-874c8",
  storageBucket: "nemesis-874c8.appspot.com",
  messagingSenderId: "1083746457460",
  appId: "1:1083746457460:web:b460615c059a10b8d5fe21",
  measurementId: "G-KF23REJ5W9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
