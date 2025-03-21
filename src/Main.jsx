import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
if (process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes('Swiper Loop Warning')) {
      return; // Ignorar avisos específicos do Swiper
    }
    originalWarn(...args); // Para outros avisos, mantém o comportamento normal
  };
}



import Project from './Project'

createRoot(document.getElementById('root')).render(
    <Project />
)
