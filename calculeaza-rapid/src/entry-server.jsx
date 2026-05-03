import { renderToString } from 'react-dom/server'
import React from 'react'
import { StrictMode } from 'react'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import GhidSalariuBrutNet from './GhidSalariuBrutNet.jsx'
import GhidPFATaxe from './GhidPFATaxe.jsx'
import GhidCreditIpotecar from './GhidCreditIpotecar.jsx'
import GhidDeducerePersonala from './GhidDeducerePersonala.jsx'
import Despre from './Despre.jsx'

const h = React.createElement

export function render(urlPath) {
      const path = urlPath.replace(/\/$/, '') || '/'
      let page
      switch (path) {
          case '/politica-confidentialitate': page = h(PrivacyPolicy); break
          case '/ghid-salariu-brut-net': page = h(GhidSalariuBrutNet); break
          case '/ghid-pfa-taxe': page = h(GhidPFATaxe); break
          case '/ghid-credit-ipotecar': page = h(GhidCreditIpotecar); break
          case '/ghid-deducere-personala': page = h(GhidDeducerePersonala); break
          case '/despre': page = h(Despre); break
          default: page = h(App)
      }
      return renderToString(h(StrictMode, null, page))
}
