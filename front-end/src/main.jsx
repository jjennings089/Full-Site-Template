import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9flePWWBTO2xc36KMapL_Oeh9vyTIj90",
  authDomain: "full-site-template.firebaseapp.com",
  projectId: "full-site-template",
  storageBucket: "full-site-template.firebasestorage.app",
  messagingSenderId: "185026590800",
  appId: "1:185026590800:web:ab0eaf10633444129df955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
