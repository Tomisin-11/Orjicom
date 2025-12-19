import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import "./styles/Navbar.css";
 import "./styles/Section1.css"
 import "./styles/Footer.css"
 import "./styles/Phone.css"
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
