// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "codemasters-blog.firebaseapp.com",
    projectId: "codemasters-blog",
    storageBucket: "codemasters-blog.appspot.com",
    messagingSenderId: "952804572456",
    appId: "1:952804572456:web:d3d4a9333a4afea544241d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
