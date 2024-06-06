import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import MySidebar from './components/sidebar.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 align={"center"}>Hail Technologies</h1>
    <MySidebar />
    <App />
  </React.StrictMode>
);