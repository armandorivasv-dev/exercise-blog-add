import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyBcEfDRpZUZTWs71iLk7NhIknloeZb-dss",
  authDomain: "blog-post-react-app.firebaseapp.com",
  projectId: "blog-post-react-app",
  storageBucket: "blog-post-react-app.appspot.com",
  messagingSenderId: "37359693994",
  appId: "1:37359693994:web:bbc7317be95faa9261e0d3"
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);

reportWebVitals();
