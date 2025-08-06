// În src/index.jsx sau src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // S-a schimbat importul
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Utilizează noua metodă createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);