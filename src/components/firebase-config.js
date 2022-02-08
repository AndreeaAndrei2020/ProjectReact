import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCvTSQyQzuaSGV0fvNBoKUOtQ-4aV3D4d0",
    authDomain: "authentication-13e20.firebaseapp.com",
    projectId: "authentication-13e20",
    storageBucket: "authentication-13e20.appspot.com",
    messagingSenderId: "176947341895",
    appId: "1:176947341895:web:a8ec99476783c24b161f62",
    measurementId: "G-YR9T7W028J"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)