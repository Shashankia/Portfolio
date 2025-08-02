import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // ya './style.css', jo bhi tu use kar raha hai

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
