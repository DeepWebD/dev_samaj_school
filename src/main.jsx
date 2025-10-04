import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SchoolProvider } from './contexts/SchoolContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SchoolProvider>
      <App />
    </SchoolProvider>
  </StrictMode>,
)
