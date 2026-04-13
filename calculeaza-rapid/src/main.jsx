import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'

// Simple pathname routing — Vercel rewrites everything to index.html,
// so we switch components here instead of using a router library.
const path = window.location.pathname.replace(/\/$/, '') || '/';
const isPrivacy = path === '/politica-confidentialitate';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPrivacy ? <PrivacyPolicy /> : <App />}
  </StrictMode>,
)
