import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';

const root = createRoot(document.getElementById('root')); // Get the root DOM element
root.render(<App />);


