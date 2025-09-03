// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ7tDcw7Z2VF8jdafv_vLvN9BydBGUobo",
    authDomain: "surfscot-2b29c.firebaseapp.com",
    projectId: "surfscot-2b29c",
    storageBucket: "surfscot-2b29c.firebasestorage.app",
    messagingSenderId: "452014169194",
    appId: "1:452014169194:web:dac40e0965b67fef67be13",
    measurementId: "G-T6RW42M84K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
const analytics = getAnalytics(app);