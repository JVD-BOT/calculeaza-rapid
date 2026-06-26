import { renderToString } from "react-dom/server";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import GhidSalariuBrutNet from "./GhidSalariuBrutNet.jsx";
import GhidPFATaxe from "./GhidPFATaxe.jsx";
import GhidCreditIpotecar from "./GhidCreditIpotecar.jsx";
import GhidDeducerePersonala from "./GhidDeducerePersonala.jsx";
import Despre from "./Despre.jsx";
import TermeniSiConditii from "./TermeniSiConditii.jsx";
import Contact from "./Contact.jsx";
import Ghiduri from "./Ghiduri.jsx";

export const routes = [
  {
    path: "/ghiduri",
    Component: Ghiduri,
    title: "Ghiduri Fiscale și Financiare România 2026 | CalculeazaRapid",
    description:
      "Toate ghidurile CalculeazaRapid despre salarii, taxe, contributii si credite in Romania: salariu brut-net, deducere personala, taxe PFA si credit ipotecar, cu formule si exemple.",
  },
  {
    path: "/ghid-salariu-brut-net",
    Component: GhidSalariuBrutNet,
    title:
      "Ghid Complet: Cum se Calculeaza Salariul Net din Brut in Romania 2026 | CalculeazaRapid",
    description:
      "Ghid pas cu pas: CAS 25%, CASS 10%, impozit pe venit, deducere personala si scutire IT. Tabel net din brut pentru cele mai comune salarii din Romania 2026.",
  },
  {
    path: "/ghid-pfa-taxe",
    Component: GhidPFATaxe,
    title:
      "Ghid PFA 2026: Taxe, Contributii si Cum sa Platesti Mai Putin Legal | CalculeazaRapid",
    description:
      "PFA vs SRL, sistem real vs norma de venit, CAS si CASS 2026, exemplu complet de calcul si sfaturi de optimizare fiscala legala pentru freelanceri din Romania.",
  },
  {
    path: "/ghid-credit-ipotecar",
    Component: GhidCreditIpotecar,
    title:
      "Ghid Credit Ipotecar Romania 2026: Tot Ce Trebuie Sa Stii | CalculeazaRapid",
    description:
      "Cum functioneaza dobanzile fixe si IRCC, ce verifica banca, programul Noua Casa si cum compari ofertele. Simulator credit ipotecar gratuit pentru Romania 2026.",
  },
  {
    path: "/ghid-deducere-personala",
    Component: GhidDeducerePersonala,
    title:
      "Deducerea Personala 2026: Cine Beneficiaza si Cum se Calculeaza | CalculeazaRapid",
    description:
      "Ghid complet deducere personala Romania 2026: cine beneficiaza, praguri de venit, persoane in intretinere si exemple de calcul detaliate pentru salariul minim.",
  },
  {
    path: "/despre",
    Component: Despre,
    title: "Despre CalculeazaRapid — Calculator Impozit Romania 2026",
    description:
      "CalculeazaRapid ofera calculatoare fiscale gratuite pentru Romania: salariu brut-net, taxe PFA si simulator credit ipotecar. Date precise, actualizate conform Codului Fiscal 2026.",
  },
  {
    path: "/politica-confidentialitate",
    Component: PrivacyPolicy,
    title: "Politica de Confidentialitate | CalculeazaRapid",
    description:
      "Politica de confidentialitate CalculeazaRapid.ro — cum sunt prelucrate datele, cookie-uri Google Analytics, drepturi GDPR si informatii de contact.",
  },
  {
    path: "/termeni-si-conditii",
    Component: TermeniSiConditii,
    title: "Termeni și Condiții | CalculeazaRapid",
    description:
      "Termenii și condițiile de utilizare ale site-ului calculeazarapid.ro — caracterul informativ al calculatoarelor, proprietate intelectuală, limitarea răspunderii și contact.",
  },
  {
    path: "/contact",
    Component: Contact,
    title: "Contact | CalculeazaRapid",
    description:
      "Contactează echipa CalculeazaRapid pentru întrebări, sugestii sau pentru a raporta o eroare într-un calculator. Răspundem în 1–2 zile lucrătoare.",
  },
];

export function renderRoute(route) {
  return renderToString(<route.Component />);
}
