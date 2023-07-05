import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Pages/AuthContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <App />
  </AuthProvider>
);
reportWebVitals();
