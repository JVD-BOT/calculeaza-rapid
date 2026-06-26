import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import GhidSalariuBrutNet from './GhidSalariuBrutNet.jsx'
import GhidPFATaxe from './GhidPFATaxe.jsx'
import GhidCreditIpotecar from './GhidCreditIpotecar.jsx'
import GhidDeducerePersonala from './GhidDeducerePersonala.jsx'
import Despre from './Despre.jsx'
import TermeniSiConditii from './TermeniSiConditii.jsx'
import Contact from './Contact.jsx'
import Ghiduri from './Ghiduri.jsx'
import GhidSalariulMinim from './GhidSalariulMinim.jsx'

// Simple pathname routing — Vercel rewrites everything to index.html,
// so we switch components here instead of using a router library.
const path = window.location.pathname.replace(/\/$/, '') || '/';

function getPage() {
  switch (path) {
    case '/ghiduri':                    return <Ghiduri />;
    case '/ghid-salariul-minim':        return <GhidSalariulMinim />;
    case '/politica-confidentialitate': return <PrivacyPolicy />;
    case '/ghid-salariu-brut-net':      return <GhidSalariuBrutNet />;
    case '/ghid-pfa-taxe':              return <GhidPFATaxe />;
    case '/ghid-credit-ipotecar':       return <GhidCreditIpotecar />;
    case '/ghid-deducere-personala':    return <GhidDeducerePersonala />;
    case '/despre':                     return <Despre />;
    case '/termeni-si-conditii':        return <TermeniSiConditii />;
    case '/contact':                    return <Contact />;
    default:                            return <App />;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {getPage()}
  </StrictMode>,
)
