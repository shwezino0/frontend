import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

//   firebase.initializeApp({
//     apiKey: "AIzaSyCdAS0q_5-KsNKjggMAX0JfXALVp6Xe9Kc",
//     authDomain: "hl-dev-logisticscenterapp.firebaseapp.com",
//     projectId: "hl-dev-logisticscenterapp",
//     storageBucket: "hl-dev-logisticscenterapp.appspot.com",
//     messagingSenderId: "1017398679554",
//     appId: "1:1017398679554:web:15248dde627756e7506f1b",
//     measurementId: "G-P726HTF7P0"
//   });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
