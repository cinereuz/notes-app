import React from 'react';
import { createRoot } from 'react-dom/client';
import Aplikasi from './components/Aplikasi';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));

const element = (
  <React.StrictMode>
    <Aplikasi />
  </React.StrictMode>
);

root.render(element);
