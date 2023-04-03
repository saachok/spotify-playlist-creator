import React from 'react';

import ReactDOM from 'react-dom/client';
import { AccessProvider } from './context/accessContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AccessProvider>
    <App />
  </AccessProvider>
);
