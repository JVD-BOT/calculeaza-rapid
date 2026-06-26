// Ghid Salariul Minim Brut pe Economie 2026 — CalculeazaRapid.ro
// Rendered at /ghid-salariul-minim via pathname routing in main.jsx
//
// Cifre verificate (iunie 2026):
//   - Salariu minim general: 4.050 lei (1 ian – 30 iun 2026), 4.325 lei (1 iul – 31 dec 2026), HG 146/2026
//   - Program: 166,667 ore/luna in medie; net la 4.325 lei ≈ 2.699 lei; cost angajator ≈ 4.418 lei
//   - Suma neimpozabila (OUG 89/2025): 300 lei (ian–iun), 200 lei (iul–dec), doar la functia de baza, norma intreaga
//   - Constructii: 4.582 lei (neschimbat tot anul); Agroalimentar: 4.050 lei (aliniat la minimul general)
//   - Scutirile fiscale pe constructii/agro/IT eliminate prin OUG 156/2024 din ian. 2025

import { useEffect } from "react";
import { setPageMeta } from "./pageMeta.js";

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
  h3: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 600,
    fontSize: 15,
    color: "#1a4faf",
    margin: "28px 0 8px",
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
  noteYellow: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.8,
    margin: "0 0 14px",
    padding: "14px 18px",
    background: "rgba(252,209,22,0.10)",
    borderRadius: 10,
    borderLeft: "3px solid #d4a017",
  },
  noteGreen: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.8,
    margin: "0 0 14px",
    padding: "14px 18px",
    background: "rgba(16,185,129,0.05)",
    borderRadius: 10,
    borderLeft: "3px solid #10b981",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
    fontFamily: "'Geist Mono','Courier New',monospace",
    marginBottom: 20,
  },
  th: {
    padding: "10px 14px",
    textAlign: "left",
    background: "rgba(0,43,127,0.06)",
    color: "#475569",
    fontWeight: 700,
    borderBottom: "2px solid rgba(0,43,127,0.12)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    whiteSpace: "nowrap",
  },
  thRight: {
    padding: "10px 14px",
    textAlign: "right",
    background: "rgba(0,43,127,0.06)",
    color: "#475569",
    fontWeight: 700,
    borderBottom: "2px solid rgba(0,43,127,0.12)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    whiteSpace: "nowrap",
  },
  td: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#334155",
    verticalAlign: "top",
  },
  tdRight: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#334155",
    textAlign: "right",
    whiteSpace: "nowrap",
    fontFamily: "'Geist Mono',monospace",
  },
  tdHighlight: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#002B7F",
    fontWeight: 700,
    textAlign: "right",
    whiteSpace: "nowrap",
    fontFamily: "'Geist Mono',monospace",
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
  cta: {
    display: "block",
    margin: "32px auto 0",
    padding: "16px 32px",
    background: "#002B7F",
    color: "#fff",
    borderRadius: 12,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none",
    textAlign: "center",
    letterSpacing: 0.3,
    transition: "background 0.2s",
    maxWidth: 360,
  },
};

const faqs = [
  {
    q: "Salariul minim este brut sau net?",
    a: "Valoarea anunțată oficial este întotdeauna brută. Din ea se rețin contribuțiile (CAS și CASS) și impozitul pe venit, iar suma rămasă este salariul net pe care îl primește efectiv angajatul.",
  },
  {
    q: "Cât este salariul minim net în 2026?",
    a: "Pentru salariul minim brut de 4.325 lei aplicabil de la 1 iulie 2026, salariul net este de aproximativ 2.699 lei pe lună. În prima jumătate a anului, la un brut de 4.050 lei, netul este corespunzător mai mic. Folosește calculatorul de salariu pentru cifra exactă.",
  },
  {
    q: "Se poate lucra part-time pe salariul minim?",
    a: "Da. Pentru programul de lucru parțial, salariul minim se aplică proporțional cu numărul de ore lucrate față de norma întreagă.",
  },
  {
    q: "Cât de des se modifică salariul minim?",
    a: "Salariul minim se actualizează prin hotărâre de guvern, de obicei o dată pe an. Pot exista însă și modificări suplimentare în cursul anului — în 2026, de exemplu, valoarea s-a schimbat la 1 iulie.",
  },
];

export default function GhidSalariulMinim() {
  useEffect(() => {
    setPageMeta(
      "Salariul Minim Brut pe Economie 2026: Valoare, Net și Sectoriale | CalculeazaRapid",
      "Salariul minim brut în România 2026: 4.050 lei până la 30 iunie și 4.325 lei de la 1 iulie (HG 146/2026). Cât rămâne net, suma neimpozabilă și salariile minime sectoriale.",
      "/ghid-salariul-minim"
    );
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
          <a href="/ghiduri" style={{ fontSize: 12, color: "#64748B", fontFamily: "'Geist Mono',monospace", textDecoration: "none" }}>Ghiduri</a>
          <span style={{ color: "rgba(0,43,127,0.25)", fontSize: 16 }}>/</span>
          <span style={{ fontSize: 12, color: "#64748B", fontFamily: "'Geist Mono',monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Salariul Minim 2026
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Ghid 2026</span>
          <span style={s.badge}>Salariul Minim</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(26px,5.5vw,40px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Ghid Salariul Minim Brut pe Economie 2026
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Salariul minim brut pe economie este cel mai mic salariu pe care un angajator îl poate plăti legal unui angajat cu normă întreagă în România. Este stabilit prin hotărâre de guvern și se actualizează periodic. În acest ghid explicăm cât este salariul minim în 2026, cât rămâne net în mână, ce salarii minime sectoriale există și cui se aplică.
        </p>

        {/* ── 1. CÂT ESTE ── */}
        <h2 style={s.h2}>Cât este salariul minim în 2026</h2>
        <p style={s.p}>
          În 2026, valoarea salariului minim brut pe economie se modifică în cursul anului. Pentru un program normal de lucru (în medie 166,667 ore pe lună, adică 40 de ore pe săptămână), valorile sunt:
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Perioada</th>
              <th style={s.thRight}>Salariu minim brut</th>
              <th style={s.th}>Temei legal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>1 ianuarie – 30 iunie 2026</td>
              <td style={s.tdRight}>4.050 lei</td>
              <td style={s.td}>nivel menținut din 2025</td>
            </tr>
            <tr>
              <td style={s.td}>1 iulie – 31 decembrie 2026</td>
              <td style={s.tdHighlight}>4.325 lei</td>
              <td style={s.td}>HG 146/2026</td>
            </tr>
          </tbody>
        </table>
        <p style={s.p}>
          Valoarea brută este suma din care se rețin contribuțiile obligatorii și impozitul, înainte de a ajunge la salariul net.
        </p>
        <div style={s.noteYellow}>
          <strong>Important:</strong> valoarea salariului minim se stabilește prin hotărâre de guvern și poate fi actualizată în cursul anului. Verifică întotdeauna ultima hotărâre publicată în Monitorul Oficial pentru cifra exactă aplicabilă lunii în care faci calculul.
        </div>

        {/* ── 2. CÂT RĂMÂNE NET ── */}
        <h2 style={s.h2}>Cât rămâne net din salariul minim</h2>
        <p style={s.p}>
          Din salariul minim brut se rețin aceleași contribuții ca din orice salariu:
        </p>
        <ul style={s.ul}>
          <li><strong>CAS</strong> (contribuția la pensie): 25%</li>
          <li><strong>CASS</strong> (contribuția la sănătate): 10%</li>
          <li><strong>Impozitul pe venit:</strong> 10%, aplicat după scăderea contribuțiilor și a sumei neimpozabile</li>
        </ul>
        <p style={s.p}>
          La nivelul salariului minim, o parte fixă din venit este scutită de impozit și contribuții (suma neimpozabilă, detaliată mai jos), ceea ce crește salariul net față de un calcul fără această facilitate.
        </p>
        <div style={s.noteGreen}>
          <strong>Exemplu:</strong> pentru salariul minim brut de 4.325 lei aplicabil de la 1 iulie 2026, salariul net este de aproximativ 2.699 lei pe lună, iar costul total suportat de angajator este de aproximativ 4.418 lei. În prima jumătate a anului, la un brut de 4.050 lei, netul este proporțional mai mic. Verifică rapid orice valoare folosind calculatorul nostru de salariu brut-net.
        </div>
        <p style={{ ...s.p, fontSize: 13, color: "#64748B" }}>
          Sumele nete sunt orientative și pot varia ușor în funcție de deducerea personală, persoanele în întreținere și alte rețineri specifice fiecărui angajat.
        </p>

        {/* ── 3. SUMA NEIMPOZABILĂ ── */}
        <h2 style={s.h2}>Suma neimpozabilă din salariul minim</h2>
        <p style={s.p}>
          Pentru a crește venitul net al angajaților plătiți cu minimul pe economie, legislația scutește de impozit și de contribuții sociale o sumă fixă din salariul minim. În 2026, conform OUG 89/2025, această sumă neimpozabilă este:
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Perioada</th>
              <th style={s.thRight}>Sumă neimpozabilă</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>1 ianuarie – 30 iunie 2026</td>
              <td style={s.tdRight}>300 lei / lună</td>
            </tr>
            <tr>
              <td style={s.td}>1 iulie – 31 decembrie 2026</td>
              <td style={s.tdRight}>200 lei / lună</td>
            </tr>
          </tbody>
        </table>
        <p style={s.p}>
          Facilitatea se aplică doar la funcția de bază, pentru un contract cu normă întreagă, și numai dacă venitul brut din salarii (fără tichete) nu depășește 4.300 lei până în iunie, respectiv 4.600 lei începând cu iulie.
        </p>

        {/* ── 4. SECTORIALE ── */}
        <h2 style={s.h2}>Salarii minime sectoriale</h2>
        <p style={s.p}>
          Pe lângă salariul minim general, în România există salarii minime mai mari pentru anumite domenii, stabilite separat:
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Sector</th>
              <th style={s.thRight}>Salariu minim brut 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>Construcții</td>
              <td style={s.tdRight}>4.582 lei (neschimbat tot anul)</td>
            </tr>
            <tr>
              <td style={s.td}>Agricultură și industrie alimentară</td>
              <td style={s.tdRight}>4.050 lei (aliniat la minimul general)</td>
            </tr>
          </tbody>
        </table>
        <p style={s.p}>
          Aceste salarii minime sectoriale se aplică doar angajaților care lucrează efectiv în domeniile respective și care îndeplinesc condițiile legale.
        </p>
        <div style={s.note}>
          <strong>De reținut:</strong> facilitățile fiscale specifice de care beneficiau anterior sectoarele construcții, agroalimentar și IT (scutiri de impozit și de unele contribuții) au fost eliminate prin OUG 156/2024, începând cu ianuarie 2025. În prezent, veniturile din aceste sectoare se impozitează ca orice salariu.
        </div>

        {/* ── 5. CUI SE APLICĂ ── */}
        <h2 style={s.h2}>Cui se aplică salariul minim</h2>
        <p style={s.p}>
          Salariul minim brut pe economie se aplică tuturor angajaților cu contract individual de muncă, pentru un program normal de lucru. Pentru programul de lucru parțial (part-time), salariul minim se calculează proporțional cu numărul de ore lucrate.
        </p>
        <p style={s.p}>
          Angajatorul nu poate plăti legal un salariu brut sub minimul pe economie pentru norma întreagă. De asemenea, există reguli specifice privind perioada maximă în care un angajat poate fi menținut la nivelul salariului minim la același angajator — consultă Codul Muncii și hotărârile în vigoare pentru situația concretă.
        </p>

        {/* ── 6. FAQ ── */}
        <h2 style={s.h2}>Întrebări frecvente</h2>
        {faqs.map((item, i) => (
          <div key={i} style={{ marginBottom: 18 }}>
            <h3 style={{ ...s.h3, margin: "0 0 6px" }}>{item.q}</h3>
            <p style={{ ...s.p, margin: 0 }}>{item.a}</p>
          </div>
        ))}

        {/* ── GHIDURI SIMILARE ── */}
        <div style={{ marginTop: 48, padding: "20px 24px", background: "rgba(0,43,127,0.03)", borderRadius: 14, border: "1px solid rgba(0,43,127,0.07)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#64748B", textTransform: "uppercase", fontFamily: "'Geist Mono',monospace", marginBottom: 14 }}>Ghiduri Similare</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { href: "/ghid-salariu-brut-net", label: "Ghid Complet: Calcul Salariu Net din Brut în România 2026", desc: "Cum funcționează CAS, CASS și impozitul pe venit — cu tabel pentru cele mai comune salarii." },
              { href: "/ghid-deducere-personala", label: "Deducerea Personală 2026: Cine Beneficiază și Cum se Calculează", desc: "Praguri de venit, persoane în întreținere și exemple de calcul detaliate." },
            ].map((g, i) => (
              <a key={i} href={g.href} style={{ textDecoration: "none" }}>
                <div style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, color: "#1a4faf" }}>→ {g.label}</div>
                <div style={{ fontSize: 12, color: "#94A3B8", fontFamily: "'Geist Mono',monospace", marginTop: 2 }}>{g.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <h2 style={s.h2}>Vezi exact cât rămâne net din orice salariu brut</h2>
        <p style={s.p}>
          Calculatorul nostru de salariu reține automat CAS și CASS, aplică deducerea personală dacă te încadrezi și calculează impozitul de 10%, conform Codului Fiscal 2026.
        </p>

        <a href="/#salariu" style={s.cta}
          onMouseEnter={e => e.currentTarget.style.background = "#1a4faf"}
          onMouseLeave={e => e.currentTarget.style.background = "#002B7F"}>
          Calculator Salariu Brut-Net →
        </a>

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <a href="/ghid-salariu-brut-net"
            style={{ fontSize: 14, color: "#1a4faf", textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            Citește și: Ghid Complet Calcul Salariu Net din Brut 2026 →
          </a>
        </div>

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
            <a href="/ghiduri" style={{ color: "#64748B", textDecoration: "none" }}>Toate ghidurile</a>
            <a href="/#salariu" style={{ color: "#64748B", textDecoration: "none" }}>Calculator Salariu</a>
            <a href="/#pfa" style={{ color: "#64748B", textDecoration: "none" }}>Calculator PFA</a>
          </div>
          <div style={{ marginTop: 8, fontSize: 11 }}>
            CalculeazaRapid.ro — Calculator impozit Romania 2026 · Calcule cu caracter orientativ
          </div>
        </div>
      </footer>

    </div>
  );
}
