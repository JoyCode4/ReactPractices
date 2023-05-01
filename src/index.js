import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7k1KQaKT935gGV7HOi2QY2FE4yfodayY",
  authDomain: "cart-d63df.firebaseapp.com",
  projectId: "cart-d63df",
  storageBucket: "cart-d63df.appspot.com",
  messagingSenderId: "697652786394",
  appId: "1:697652786394:web:4ea3674b73aeb0df50a1e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
