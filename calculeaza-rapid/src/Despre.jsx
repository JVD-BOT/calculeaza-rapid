// Despre CalculeazaRapid — CalculeazaRapid.ro
// Rendered at /despre via pathname routing in main.jsx

import { useEffect } from "react";

const s = {
  h2: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: "#0D1117",
    margin: "48px 0 12px",
    paddingBottom: 10,
    borderBottom: "2px solid rgba(0,43,127,0.08)",
  },
  p: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 15,
    color: "#334155",
    lineHeight: 1.85,
    margin: "0 0 14px",
  },
  ul: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 15,
    color: "#334155",
    lineHeight: 1.85,
    margin: "0 0 14px",
    paddingLeft: 22,
  },
  note: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.8,
    margin: "0 0 14px",
    padding: "14px 18px",
    background: "rgba(0,43,127,0.04)",
    borderRadius: 10,
    borderLeft: "3px solid #002B7F",
  },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "'Geist Mono',monospace",
    background: "rgba(0,43,127,0.08)",
    color: "#002B7F",
    marginRight: 6,
  },
  calcCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: "18px 20px",
    background: "rgba(0,43,127,0.03)",
    border: "1px solid rgba(0,43,127,0.08)",
    borderRadius: 14,
    marginBottom: 12,
    textDecoration: "none",
    transition: "border-color 0.2s, background 0.2s",
  },
  calcIcon: {
    fontSize: 24,
    flexShrink: 0,
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,43,127,0.06)",
    borderRadius: 10,
  },
};

const calculators = [
  {
    href: "/#salariu",
    icon: "💰",
    title: "Calculator Salariu Brut-Net",
    desc: "Calculează instant salariul net din brut sau brut din net, cu deducere personală, scutire IT și detalii complete despre CAS, CASS și impozit.",
    guide: "/ghid-salariu-brut-net",
    guidLabel: "Ghid salariu brut-net →",
  },
  {
    href: "/#pfa",
    icon: "📋",
    title: "Calculator PFA",
    desc: "Calculează taxele totale pentru PFA (impozit, CAS, CASS) atât în sistemul real cât și norma de venit, actualizat pentru 2026.",
    guide: "/ghid-pfa-taxe",
    guidLabel: "Ghid taxe PFA →",
  },
  {
    href: "/#credit",
    icon: "🏠",
    title: "Simulator Credit Ipotecar",
    desc: "Simulează rata lunară, dobânda totală și graficul de amortizare pentru orice credit imobiliar. Include tabel de rambursare complet.",
    guide: "/ghid-credit-ipotecar",
    guidLabel: "Ghid credit ipotecar →",
  },
];

export default function Despre() {
  useEffect(() => {
    document.title = "Despre CalculeazaRapid — Calculator Impozit Romania 2026";
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#F7F8FC", color: "#0D1117" }}>

      {/* Romanian flag stripe */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 5, display: "flex", zIndex: 9999, pointerEvents: "none" }}>
        <div style={{ flex: 1, background: "#002B7F" }} />
        <div style={{ flex: 1, background: "#FCD116" }} />
        <div style={{ flex: 1, background: "#CE1126" }} />
      </div>

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 5, zIndex: 200,
        background: "rgba(247,248,252,0.96)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,43,127,0.08)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px", height: 52, display: "flex", alignItems: "center", gap: 10 }}>
          <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: -0.3 }}>
              <span style={{ color: "#002B7F" }}>Calculeaza</span><span style={{ color: "#0D1117" }}>Rapid</span>
            </span>
          </a>
          <span style={{ color: "rgba(0,43,127,0.25)", fontSize: 16 }}>/</span>
          <span style={{ fontSize: 12, color: "#64748B", fontFamily: "'Geist Mono',monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Despre
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Despre noi</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px,6vw,44px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Despre CalculeazaRapid
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Instrumente financiare gratuite pentru România — calcule fiscale precise, actualizate anual conform Codului Fiscal.
        </p>

        {/* ── CE ESTE ── */}
        <h2 style={s.h2}>Ce este CalculeazaRapid?</h2>
        <p style={s.p}>
          <strong>CalculeazaRapid.ro</strong> este o platformă gratuită de calculatoare fiscale și financiare pentru persoanele fizice din România. Site-ul oferă instrumente simple, rapide și precise pentru calcule care altfel ar necesita cunoașterea aprofundată a Codului Fiscal sau accesul la programe de contabilitate.
        </p>
        <p style={s.p}>
          Toate calculele se efectuează <strong>direct în browserul tău</strong> — nicio dată introdusă nu ajunge pe un server, nu este stocată și nu este transmisă nicăieri. Confidențialitatea ta este respectată 100%.
        </p>

        {/* ── CALCULATOARE ── */}
        <h2 style={s.h2}>Calculatoarele disponibile</h2>
        <p style={s.p}>
          CalculeazaRapid oferă în prezent trei instrumente principale:
        </p>

        {calculators.map((c) => (
          <a key={c.href} href={c.href}
            style={s.calcCard}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(0,43,127,0.2)";
              e.currentTarget.style.background = "rgba(0,43,127,0.06)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(0,43,127,0.08)";
              e.currentTarget.style.background = "rgba(0,43,127,0.03)";
            }}>
            <div style={s.calcIcon}>{c.icon}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: "#002B7F", marginBottom: 4 }}>
                {c.title}
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                {c.desc}
              </div>
              <div style={{ marginTop: 8 }}>
                <a href={c.guide} style={{ fontSize: 12, color: "#1a4faf", textDecoration: "none", fontFamily: "'Geist Mono',monospace" }}
                  onClick={e => e.stopPropagation()}>
                  {c.guidLabel}
                </a>
              </div>
            </div>
          </a>
        ))}

        {/* ── DE CE A FOST CREAT ── */}
        <h2 style={s.h2}>De ce a fost creat acest site?</h2>
        <p style={s.p}>
          Sistemul fiscal românesc este complex și se modifică frecvent. Angajații vor să știe exact cât primesc în mână din salariul brut negociat. Freelancerii și PFA-urile vor să înțeleagă ce taxe vor plăti înainte de a-și planifica bugetul. Cumpărătorii de locuințe vor să calculeze dacă pot suporta rata unui credit înainte de a semna cu banca.
        </p>
        <p style={s.p}>
          CalculeazaRapid a fost construit pentru a răspunde acestor nevoi concrete, fără publicitate invazivă, fără înregistrare obligatorie și fără niciun cost. Scopul este să democratizeze accesul la informații financiare precise pentru oricine, indiferent de nivelul de cunoaștere a fiscalității.
        </p>

        {/* ── ACURATEȚEA DATELOR ── */}
        <h2 style={s.h2}>Angajamentul față de acuratețea datelor</h2>
        <p style={s.p}>
          Toate calculatoarele sunt actualizate conform <strong>Codului Fiscal în vigoare în 2026</strong>, incluzând:
        </p>
        <ul style={s.ul}>
          <li>Cota CAS: 25% din salariul brut</li>
          <li>Cota CASS: 10% din salariul brut</li>
          <li>Impozitul pe venit: 10% din baza impozabilă</li>
          <li>CAM (Contribuția Asiguratorie pentru Muncă): 2,25% suportată de angajator</li>
          <li>Salariul minim brut: 4.050 lei/lună</li>
          <li>Deducerile personale: 300–1.310 lei, aplicabile pentru brut 4.050–4.300 lei</li>
          <li>Scutirea IT: pentru brut ≥ 10.000 lei, la firme autorizate</li>
          <li>Pragurile CAS și CASS pentru PFA, baza de calcul IRCC pentru credite</li>
        </ul>
        <div style={s.note}>
          <strong>Notă importantă:</strong> Calculele prezentate pe CalculeazaRapid.ro au caracter <strong>orientativ</strong>. Legislația fiscală se poate modifica, iar situațiile individuale pot prezenta particularități care nu sunt reflectate în calculatoarele generale. Pentru decizii financiare semnificative, consultați un contabil autorizat sau consultant fiscal.
        </div>
        <p style={s.p}>
          Site-ul este actualizat de fiecare dată când Codul Fiscal suferă modificări relevante — de obicei la începutul fiecărui an fiscal sau când intră în vigoare acte normative noi. Data ultimei actualizări este menționată pe pagina principală.
        </p>

        {/* ── GHIDURI ── */}
        <h2 style={s.h2}>Ghiduri și resurse educaționale</h2>
        <p style={s.p}>
          Pe lângă calculatoare, CalculeazaRapid oferă ghiduri detaliate care explică în limbaj accesibil mecanismele fiscale din România:
        </p>
        <ul style={s.ul}>
          <li>
            <a href="/ghid-salariu-brut-net" style={{ color: "#1a4faf", textDecoration: "none", fontWeight: 600 }}>
              Ghid Complet: Calcul Salariu Net din Brut în România 2026
            </a>{" "}— CAS, CASS, impozit, deducere personală și scutire IT explicate cu exemple
          </li>
          <li>
            <a href="/ghid-pfa-taxe" style={{ color: "#1a4faf", textDecoration: "none", fontWeight: 600 }}>
              Ghid PFA 2026: Taxe, Contribuții și Optimizare Fiscală Legală
            </a>{" "}— comparație PFA vs SRL, sistem real vs normă de venit, CAS și CASS pentru PFA
          </li>
          <li>
            <a href="/ghid-credit-ipotecar" style={{ color: "#1a4faf", textDecoration: "none", fontWeight: 600 }}>
              Ghid Credit Ipotecar România 2026
            </a>{" "}— dobânzi fixe vs IRCC, programul Noua Casă, cum compari ofertele băncilor
          </li>
          <li>
            <a href="/ghid-deducere-personala" style={{ color: "#1a4faf", textDecoration: "none", fontWeight: 600 }}>
              Deducerea Personală 2026: Cine Beneficiază și Cum Se Calculează
            </a>{" "}— praguri, persoane în întreținere și exemple complete
          </li>
        </ul>

        {/* ── CONTACT ── */}
        <h2 style={s.h2}>Contact</h2>
        <p style={s.p}>
          Pentru întrebări, sugestii sau pentru a semnala o eroare de calcul, ne poți contacta la:
        </p>
        <p style={{ ...s.p, padding: "12px 16px", background: "rgba(0,43,127,0.04)", borderRadius: 10, borderLeft: "3px solid #002B7F" }}>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:jrvdbot@gmail.com" style={{ color: "#1a4faf" }}>jrvdbot@gmail.com</a>
          <br />
          <strong>Site:</strong>{" "}
          <a href="https://calculeazarapid.ro" style={{ color: "#1a4faf" }}>https://calculeazarapid.ro</a>
        </p>
        <p style={s.p}>
          Feedback-ul utilizatorilor este esențial pentru a menține calculatoarele precise și ghidurile actualizate. Dacă observi că un calcul nu corespunde cu legislația în vigoare sau că un ghid conține informații depășite, te rugăm să ne anunți.
        </p>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,43,127,0.07)", padding: "28px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "#94A3B8", fontFamily: "'Geist Mono',monospace", lineHeight: 2.2 }}>
          <div>
            <a href="/" style={{ color: "#1a4faf", textDecoration: "none", fontWeight: 600 }}>
              ← Înapoi la CalculeazaRapid.ro
            </a>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 4 }}>
            <a href="/#salariu" style={{ color: "#64748B", textDecoration: "none" }}>Calculator Salariu</a>
            <a href="/#pfa" style={{ color: "#64748B", textDecoration: "none" }}>Calculator PFA</a>
            <a href="/#credit" style={{ color: "#64748B", textDecoration: "none" }}>Simulator Credit</a>
          </div>
          <div style={{ marginTop: 8, fontSize: 11 }}>
            CalculeazaRapid.ro — Calculator impozit Romania 2026
          </div>
        </div>
      </footer>

    </div>
  );
}
