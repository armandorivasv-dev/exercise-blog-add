import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcEfDRpZUZTWs71iLk7NhIknloeZb-dss",
  authDomain: "blog-post-react-app.firebaseapp.com",
  projectId: "blog-post-react-app",
  storageBucket: "blog-post-react-app.appspot.com",
  messagingSenderId: "37359693994",
  appId: "1:37359693994:web:bbc7317be95faa9261e0d3"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
