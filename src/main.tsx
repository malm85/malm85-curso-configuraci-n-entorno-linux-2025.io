import './index.css'; // <--- ¡ESTA LÍNEA ES VITAL! Asegúrate de que esté aquí escrita con el punto y la barra diagonal
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Importa tu componente principal


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
