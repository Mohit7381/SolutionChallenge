import express  from "express";
// import firebaseapp from "./firebase.js";
import { initializeApp } from "firebase/app";
const app = express();
const firebaseConfig = {
    apiKey: "AIzaSyD0PyyaE0SkQUxWkUHHcCCtGBqk_B3GoZ4",
    authDomain: "jobility-1a4eb.firebaseapp.com",
    projectId: "jobility-1a4eb",
    storageBucket: "jobility-1a4eb.appspot.com",
    messagingSenderId: "233271515298",
    appId: "1:233271515298:web:391958173ed18741f3dffb",
    measurementId: "G-NQP63ELS8H"
  };
  const appFirebase = initializeApp(firebaseConfig);
    console.log(appFirebase);
app.use(express.json());
app.listen(8080, () => console.log("Server is running on port 8080"));