import React from 'react';
import { render, BrowserRouter as Router } from 'react-dom';
import App from './App';
import './index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
