import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Cabecalho from './Cabecalho';
import Tabela from './Tabela';
import Calculadora from './Calculadora';
import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Cabecalho />
      <Calculadora />
      <Tabela />
  </React.StrictMode>,
)
