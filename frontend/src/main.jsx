import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routes/AppRouter';  // Import AppRouter instead
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
