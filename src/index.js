import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './components/firebase/fireconfigKey';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
      <App />
      </Router>
    
    </FirebaseAppProvider>
  </React.StrictMode>
);

