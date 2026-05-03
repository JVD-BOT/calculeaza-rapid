import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import GhidSalariuBrutNet from './GhidSalariuBrutNet.jsx'
import GhidPFATaxe from './GhidPFATaxe.jsx'
import GhidCreditIpotecar from './GhidCreditIpotecar.jsx'
import GhidDeducerePersonala from './GhidDeducerePersonala.jsx'
import Despre from './Despre.jsx'

// Server-side render entry: accepts a URL path and returns the rendered HTML string.
// This runs in Node.js (no browser), so window/document are not available.
// useEffect hooks are no-ops during renderToString — that's fine.
export function render(urlPath) {
    const path = urlPath.replace(/\/$/, '') || '/'
    let component
    switch (path) {
      case '/politica-confidentialitate': component = <PrivacyPolicy />; break
      case '/ghid-salariu-brut-net': component = <GhidSalariuBrutNet />; break
      case '/ghid-pfa-taxe': component = <GhidPFATaxe />; break
      case '/ghid-credit-ipotecar': component = <GhidCreditIpotecar />; break
      case '/ghid-deducere-personala': component = <GhidDeducerePersonala />; break
      case '/despre': component = <Despre />; break
      default: component = <App />
    }
    return renderToString(<StrictMode>{component}</StrictMode>StrictMode>)
}</StrictMode>
