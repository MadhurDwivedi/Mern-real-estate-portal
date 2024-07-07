// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-real-estate-portal.firebaseapp.com',
  projectId: 'mern-real-estate-portal',
  storageBucket: 'mern-real-estate-portal.appspot.com',
  messagingSenderId: '120153867524',
  appId: '1:120153867524:web:084cc282a923a49904fc51'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);