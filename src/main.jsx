import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Project_Context from './Context/Project_Context';

createRoot(document.getElementById('root')).render(
    <Project_Context>
      <App />
    </Project_Context>
);
