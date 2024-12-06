import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ParticlesComponent from './components/Particles';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesComponent className="particles" />
    <App />
  </React.StrictMode>
);


