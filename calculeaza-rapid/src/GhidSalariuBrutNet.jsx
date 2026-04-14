// Ghid Salariu Brut-Net — CalculeazaRapid.ro
// Rendered at /ghid-salariu-brut-net via pathname routing in main.jsx

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
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
    fontFamily: "'Geist Mono','Courier New',monospace",
    marginBottom: 20,
    overflowX: "auto",
    display: "block",
  },
  th: {
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
  thLeft: {
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
  td: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#334155",
    textAlign: "right",
    whiteSpace: "nowrap",
  },
  tdLeft: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#334155",
    textAlign: "left",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  tdNet: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#002B7F",
    fontWeight: 700,
    textAlign: "right",
    whiteSpace: "nowrap",
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

export default function GhidSalariuBrutNet() {
  useEffect(() => {
    document.title =
      "Ghid Complet: Cum se Calculeaza Salariul Net din Brut in Romania 2026 | CalculeazaRapid";
  }, []);

  const rows = [
    { brut: "4.050", cas: "1.013", cass: "405", ded: "300", imp: "233", net: "2.399", it: "—" },
    { brut: "5.000", cas: "1.250", cass: "500", ded: "0",   imp: "325", net: "2.925", it: "—" },
    { brut: "6.000", cas: "1.500", cass: "600", ded: "0",   imp: "390", net: "3.510", it: "—" },
    { brut: "8.000", cas: "2.000", cass: "800", ded: "0",   imp: "520", net: "4.680", it: "—" },
    { brut: "10.000",cas: "2.500", cass: "1.000",ded: "0",  imp: "650", net: "5.850", it: "6.500" },
    { brut: "15.000",cas: "3.750", cass: "1.500",ded: "0",  imp: "975", net: "8.775", it: "9.750" },
  ];

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
            Ghid Salariu Brut-Net 2026
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Ghid 2026</span>
          <span style={s.badge}>Cod Fiscal Actualizat</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(26px,5.5vw,40px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Ghid Complet: Cum se Calculeaza Salariul Net din Brut în România 2026
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Tot ce trebuie să știi despre CAS, CASS, impozit pe venit și deducere personală — cu exemple reale și un tabel complet pentru cele mai comune salarii.
        </p>

        {/* ── 1. CE ÎNSEAMNĂ SALARIU BRUT ȘI NET ── */}
        <h2 style={s.h2}>Ce înseamnă salariul brut și salariul net?</h2>
        <p style={s.p}>
          <strong>Salariul brut</strong> este suma negociată cu angajatorul și înscrisă în contractul de muncă. Acesta este punctul de plecare al oricărui calcul salarial. <strong>Salariul net</strong> este suma pe care o primești efectiv în cont — adică salariul brut minus toate contribuțiile sociale și impozitul pe venit reținute la sursă.
        </p>
        <p style={s.p}>
          Diferența dintre cele două poate părea surprinzătoare: în România, un angajat cu salariu brut de <strong>5.000 lei</strong> primește în mână aproximativ <strong>2.925 lei</strong> — adică 58,5% din brut. Restul de 41,5% (2.075 lei) merge la stat sub formă de contribuții și impozit.
        </p>

        {/* ── 2. CE SE REȚINE DIN SALARIU ── */}
        <h2 style={s.h2}>Ce se reține din salariul brut în 2026?</h2>
        <p style={s.p}>
          Conform Codului Fiscal în vigoare în 2026, din salariul brut al angajatului se rețin trei sume:
        </p>

        <h3 style={s.h3}>1. CAS — Contribuția la Asigurările Sociale (Pensie) — 25%</h3>
        <p style={s.p}>
          CAS (Contribuția la Asigurările Sociale) este contribuția pentru pilonul I de pensie de stat. Se calculează ca <strong>25% din salariul brut</strong> și este suportată integral de angajat. Pentru un salariu brut de 5.000 lei, CAS este de <strong>1.250 lei</strong>.
        </p>

        <h3 style={s.h3}>2. CASS — Contribuția la Asigurările Sociale de Sănătate — 10%</h3>
        <p style={s.p}>
          CASS reprezintă contribuția la sistemul de sănătate publică. Se calculează ca <strong>10% din salariul brut</strong> și îți asigură accesul la serviciile medicale prin CNAS. Pentru un salariu brut de 5.000 lei, CASS este de <strong>500 lei</strong>.
        </p>

        <h3 style={s.h3}>3. Impozitul pe venit — 10%</h3>
        <p style={s.p}>
          Impozitul pe venit se calculează diferit față de CAS și CASS — nu se aplică direct pe brut, ci pe o <strong>bază impozabilă</strong> redusă. Formula este:
        </p>
        <div style={s.note}>
          <strong>Baza impozabilă</strong> = Salariu brut − CAS − CASS − Deducere personală (dacă este cazul)<br />
          <strong>Impozit</strong> = Baza impozabilă × 10%
        </div>
        <p style={s.p}>
          Exemplu pentru 5.000 lei brut (fără deducere personală): baza impozabilă = 5.000 − 1.250 − 500 = <strong>3.250 lei</strong>, deci impozit = <strong>325 lei</strong>.
        </p>

        <h3 style={s.h3}>Nota: costul total al angajatorului</h3>
        <p style={s.p}>
          Pe lângă cele trei contribuții reținute din salariul tău, angajatorul plătește separat <strong>CAM (Contribuția Asiguratorie pentru Muncă) de 2,25%</strong> din salariul brut. Aceasta nu se reflectă în salariul tău net, dar crește costul total suportat de firmă. La un salariu brut de 5.000 lei, angajatorul plătește în plus 113 lei, deci costul total al angajatorului ajunge la <strong>5.113 lei</strong>.
        </p>

        {/* ── 3. EXEMPLU PAS CU PAS ── */}
        <h2 style={s.h2}>Exemplu complet pas cu pas — 6.000 lei brut</h2>
        <p style={s.p}>Să urmărim calculul complet pentru un salariu brut de <strong>6.000 lei</strong>, fără persoane în întreținere și fără scutire IT:</p>
        <div style={{ background: "rgba(0,43,127,0.04)", borderRadius: 14, padding: "20px 24px", marginBottom: 16, fontFamily: "'Geist Mono',monospace", fontSize: 14, color: "#334155", lineHeight: 2.2 }}>
          <div>Salariu <strong>brut</strong>: <strong style={{ color: "#0D1117" }}>6.000 lei</strong></div>
          <div style={{ borderTop: "1px dashed rgba(0,43,127,0.1)", paddingTop: 8, marginTop: 4 }}>
            <div>− CAS (25%): <strong>1.500 lei</strong></div>
            <div>− CASS (10%): <strong>600 lei</strong></div>
            <div>− Deducere personală: <strong>0 lei</strong> <span style={{ fontSize: 12, color: "#94A3B8" }}>(brut &gt; 4.300 lei)</span></div>
            <div style={{ borderTop: "1px dashed rgba(0,43,127,0.1)", paddingTop: 4, marginTop: 4 }}>
              = Baza impozabilă: <strong>3.900 lei</strong>
            </div>
            <div>− Impozit venit (10%): <strong>390 lei</strong></div>
          </div>
          <div style={{ borderTop: "2px solid rgba(0,43,127,0.12)", paddingTop: 8, marginTop: 8 }}>
            = Salariu <strong>net</strong>: <strong style={{ color: "#002B7F", fontSize: 16 }}>3.510 lei</strong>
          </div>
        </div>

        {/* ── 4. DEDUCEREA PERSONALĂ ── */}
        <h2 style={s.h2}>Deducerea personală — cine beneficiază?</h2>
        <p style={s.p}>
          Deducerea personală este o reducere a bazei impozabile acordată angajaților cu salarii mici. În 2026, ea se aplică <strong>doar pentru salarii brute cuprinse între 4.050 lei și 4.300 lei</strong>. Dacă salariul brut depășește 4.300 lei, deducerea este zero.
        </p>
        <p style={s.p}>
          Valoarea deducerii depinde de numărul de persoane aflate în întreținerea angajatului:
        </p>
        <ul style={s.ul}>
          <li><strong>0 persoane în întreținere:</strong> 300 lei</li>
          <li><strong>1 persoană în întreținere:</strong> 400 lei</li>
          <li><strong>2 persoane în întreținere:</strong> 800 lei</li>
          <li><strong>3 sau mai multe persoane în întreținere:</strong> 1.310 lei</li>
        </ul>
        <p style={s.p}>
          Exemplu: un angajat cu salariu brut de <strong>4.050 lei</strong> și 2 copii în întreținere beneficiază de o deducere de <strong>800 lei</strong>, ceea ce reduce semnificativ impozitul de plată. Calculatorul nostru aplică automat deducerea corectă în funcție de inputurile tale.
        </p>

        {/* ── 5. SCUTIREA IT ── */}
        <h2 style={s.h2}>Scutirea de impozit pentru angajații IT</h2>
        <p style={s.p}>
          Angajații din domeniul IT care lucrează la firme autorizate CAEN și au un salariu brut de <strong>cel puțin 10.000 lei</strong> sunt <strong>scutiți de impozitul pe venit de 10%</strong>. Această facilitate fiscală, menținută și în 2026, reprezintă un avantaj net semnificativ față de alte domenii.
        </p>
        <p style={s.p}>
          Atenție: scutirea IT nu elimină CAS și CASS — acestea se plătesc în continuare în mod normal. Un angajat IT cu salariu brut de 10.000 lei economisește <strong>650 lei/lună</strong> față de un coleg din alt sector cu același brut.
        </p>
        <p style={s.p}>
          Condițiile pentru scutire sunt stabilite prin ordin comun al ministerelor Finanțelor și Muncii și includ desfășurarea de activități în software, IT&amp;C și servicii conexe, documentate printr-un dosar intern la angajator.
        </p>

        {/* ── 6. TABEL ── */}
        <h2 style={s.h2}>Tabel net din brut — cele mai comune salarii (2026)</h2>
        <p style={s.p}>
          Valorile de mai jos sunt calculate conform formulelor din Codul Fiscal 2026, cu 0 persoane în întreținere. Coloana <em>Net IT</em> se aplică angajaților cu scutire de impozit pe venit (brut ≥ 10.000 lei).
        </p>

        <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(0,43,127,0.08)", marginBottom: 8 }}>
          <table style={{ ...s.table, display: "table", marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={s.thLeft}>Brut (lei)</th>
                <th style={s.th}>CAS (lei)</th>
                <th style={s.th}>CASS (lei)</th>
                <th style={s.th}>Deducere (lei)</th>
                <th style={s.th}>Impozit (lei)</th>
                <th style={{ ...s.th, color: "#002B7F" }}>Net (lei)</th>
                <th style={{ ...s.th, color: "#1a4faf" }}>Net IT (lei)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,43,127,0.02)" }}>
                  <td style={s.tdLeft}>{r.brut}</td>
                  <td style={s.td}>{r.cas}</td>
                  <td style={s.td}>{r.cass}</td>
                  <td style={s.td}>{r.ded}</td>
                  <td style={s.td}>{r.imp}</td>
                  <td style={s.tdNet}>{r.net}</td>
                  <td style={{ ...s.td, color: r.it !== "—" ? "#1a4faf" : "#CBD5E1", fontWeight: r.it !== "—" ? 700 : 400 }}>{r.it}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...s.p, fontSize: 12, color: "#94A3B8", marginTop: 4 }}>
          * Valorile sunt rotunjite la leu întreg conform regulilor de calcul. Deducerea personală se aplică doar pentru brut cuprins între 4.050 și 4.300 lei.
        </p>

        {/* ── 7. CONCLUZIE ── */}
        <h2 style={s.h2}>Concluzie și calculator online</h2>
        <p style={s.p}>
          Calculul salariului net din brut în România implică trei pași esențiali: deducerea CAS (25%), deducerea CASS (10%) și aplicarea impozitului pe venit de 10% pe baza impozabilă rezultată. Pentru salariile mici se adaugă deducerea personală, iar angajații IT cu brut de peste 10.000 lei beneficiază de scutire de impozit.
        </p>
        <p style={s.p}>
          Rata efectivă de reținere pentru salarii obișnuite (peste 4.300 lei, fără scutire IT) este constantă: <strong>41,5% din brut</strong>. Asta înseamnă că salariul net reprezintă <strong>58,5% din salariul brut</strong> — un reper util pentru negocierea pachetului salarial.
        </p>
        <p style={s.p}>
          Folosește calculatorul nostru pentru a obține instant salariul net exact pentru orice sumă brută, inclusiv cu deducere personală sau scutire IT:
        </p>

        <a href="/#salariu" style={s.cta}
          onMouseEnter={e => e.currentTarget.style.background = "#1a4faf"}
          onMouseLeave={e => e.currentTarget.style.background = "#002B7F"}>
          Calculator Salariu Brut-Net 2026 →
        </a>

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
            CalculeazaRapid.ro — Calculator impozit Romania 2026 · Calcule cu caracter orientativ
          </div>
        </div>
      </footer>

    </div>
  );
}
