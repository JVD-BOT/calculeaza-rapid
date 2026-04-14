// Ghid PFA Taxe — CalculeazaRapid.ro
// Rendered at /ghid-pfa-taxe via pathname routing in main.jsx

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
  td: {
    padding: "11px 14px",
    borderBottom: "1px solid rgba(0,43,127,0.06)",
    color: "#334155",
    verticalAlign: "top",
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

export default function GhidPFATaxe() {
  useEffect(() => {
    document.title =
      "Ghid PFA 2026: Taxe, Contributii si Cum sa Platesti Mai Putin Legal | CalculeazaRapid";
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
            Ghid PFA Taxe 2026
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Ghid 2026</span>
          <span style={s.badge}>PFA / Freelancer</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(26px,5.5vw,40px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Ghid PFA 2026: Taxe, Contribuții și Cum să Plătești Mai Puțin Legal
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Tot ce trebuie să știi dacă ești PFA în România — sistemul real vs norma de venit, CAS, CASS, impozit și strategii legale de optimizare fiscală.
        </p>

        {/* ── 1. CE ESTE PFA ── */}
        <h2 style={s.h2}>Ce este un PFA și când are sens?</h2>
        <p style={s.p}>
          <strong>PFA (Persoana Fizică Autorizată)</strong> este cea mai simplă formă juridică pentru desfășurarea unei activități economice individuale în România. Un PFA nu are personalitate juridică distinctă — tu și firma ta sunteți una și aceeași entitate în fața legii.
        </p>
        <p style={s.p}>
          PFA-ul este potrivit pentru freelanceri, consultanți, programatori, designeri, traducători, meditatori și orice altă activitate independentă cu venituri anuale sub câteva sute de mii de lei. Înregistrarea se face la Registrul Comerțului și are costuri reduse.
        </p>

        {/* ── 2. PFA vs SRL ── */}
        <h2 style={s.h2}>PFA vs SRL — Ce alegere este mai avantajoasă?</h2>
        <p style={s.p}>
          Alegerea între PFA și SRL depinde în primul rând de nivelul veniturilor și de preferința pentru simplitate versus flexibilitate. Iată principalele diferențe:
        </p>
        <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(0,43,127,0.08)", marginBottom: 16 }}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Criteriu</th>
                <th style={s.th}>PFA</th>
                <th style={s.th}>SRL (Micro)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Impozit pe profit/venit", "10% pe venitul net", "1% din cifra de afaceri (microîntreprindere)"],
                ["CAS (pensie)", "25% din 24× salariul minim", "Nu se aplică la nivel de firmă"],
                ["CASS (sănătate)", "10%, bază 6–60× salariul minim", "Nu se aplică la nivel de firmă"],
                ["Contabilitate", "Simplificată (fără contabil obligatoriu)", "Contabil autorizat obligatoriu"],
                ["Răspundere", "Cu întreg patrimoniul personal", "Limitată la capitalul social"],
                ["Costuri înregistrare", "~200–400 lei", "~500–1.000 lei + capital social"],
                ["Dividende", "Nu se aplică", "8% impozit + CASS 10% (dacă e cazul)"],
              ].map(([crit, pfa, srl], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,43,127,0.02)" }}>
                  <td style={{ ...s.td, fontWeight: 600 }}>{crit}</td>
                  <td style={s.td}>{pfa}</td>
                  <td style={s.td}>{srl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={s.p}>
          Ca regulă generală: pentru venituri anuale sub 100.000–150.000 lei, PFA-ul este adesea mai simplu și suficient de eficient. La venituri mai mari, un SRL microîntreprindere cu cotă de 1% poate deveni mai avantajos, mai ales dacă reinvestești profitul.
        </p>

        {/* ── 3. SISTEM REAL vs NORMA DE VENIT ── */}
        <h2 style={s.h2}>Sistem Real vs Normă de Venit — Cum funcționează?</h2>

        <h3 style={s.h3}>Sistemul Real</h3>
        <p style={s.p}>
          În sistemul real, impozitul se calculează pe <strong>venitul net efectiv</strong> — adică veniturile brute încasate minus cheltuielile deductibile dovedite cu documente. Cheltuielile deductibile pot include: echipamente IT, licențe software, abonamente profesionale, chiria unui birou, deplasări în interes profesional și altele prevăzute de Codul Fiscal.
        </p>
        <div style={s.note}>
          <strong>Exemplu sistem real:</strong> Venituri anuale 120.000 lei, cheltuieli deductibile 30.000 lei → Venit net impozabil: <strong>90.000 lei</strong> → Impozit pe venit: <strong>9.000 lei</strong>
        </div>
        <p style={s.p}>
          Sistemul real este avantajos dacă ai cheltuieli profesionale semnificative. Dezavantajul: necesită evidența contabilă strictă a tuturor documentelor justificative.
        </p>

        <h3 style={s.h3}>Norma de Venit</h3>
        <p style={s.p}>
          Norma de venit este un sistem simplificat în care ANAF stabilește anual un venit fix estimat pentru fiecare domeniu de activitate, indiferent de veniturile reale. Impozitul se calculează pe această normă, nu pe ce ai încasat efectiv.
        </p>
        <p style={s.p}>
          Norma de venit este disponibilă doar pentru anumite coduri CAEN și este stabilită de direcțiile fiscale județene. Poate fi avantajoasă dacă veniturile tale reale depășesc semnificativ norma — plătești impozit pe mai puțin. Dezavantajul: nu poți deduce cheltuielile reale.
        </p>
        <div style={s.noteGreen}>
          <strong>Sfat:</strong> Dacă venitul tău real este aproape de normă sau sub normă, sistemul real este de obicei mai favorabil. Compară normele stabilite de ANAF pentru județul tău cu venitul estimat înainte de a alege.
        </div>

        {/* ── 4. CAS ── */}
        <h2 style={s.h2}>CAS 2026 — Contribuția la pensie pentru PFA</h2>
        <p style={s.p}>
          Contribuția la asigurările sociale (CAS) pentru PFA-uri în 2026 se datorează <strong>doar dacă venitul net anual depășește 12 salarii minime brute</strong>, adică 12 × 4.050 = <strong>48.600 lei/an</strong>.
        </p>
        <p style={s.p}>
          Dacă ești sub acest plafon, CAS-ul este <strong>opțional</strong> — poți opta să nu îl plătești, dar nu vei acumula stagiu de cotizare pentru pensie în acel an.
        </p>
        <p style={s.p}>
          Dacă venitul depășește plafonul, CAS se calculează la o bază fixă: <strong>24 de salarii minime brute</strong> (24 × 4.050 = 97.200 lei), indiferent cât de mare este venitul real. Astfel:
        </p>
        <div style={s.note}>
          <strong>CAS anual</strong> = 97.200 lei × 25% = <strong>24.300 lei/an</strong> (dacă venitul net &gt; 48.600 lei)
        </div>

        {/* ── 5. CASS ── */}
        <h2 style={s.h2}>CASS 2026 — Contribuția la sănătate pentru PFA</h2>
        <p style={s.p}>
          CASS pentru PFA funcționează diferit față de CAS: are o bază de calcul variabilă între <strong>6 și 60 de salarii minime brute</strong>, în funcție de venitul net realizat.
        </p>
        <ul style={s.ul}>
          <li>Venit net sub 6 salarii minime (&lt; 24.300 lei): CASS se calculează la baza minimă de 6 × 4.050 = 24.300 lei → <strong>2.430 lei/an</strong></li>
          <li>Venit net 6–60 salarii minime (24.300–243.000 lei): CASS se calculează la venitul net real → <strong>10% din venitul net</strong></li>
          <li>Venit net peste 60 de salarii minime (&gt; 243.000 lei): CASS se calculează la baza maximă de 60 × 4.050 = 243.000 lei → <strong>24.300 lei/an</strong></li>
        </ul>

        {/* ── 6. EXEMPLU COMPLET ── */}
        <h2 style={s.h2}>Exemplu complet — PFA cu venit de 80.000 lei/an (sistem real)</h2>
        <p style={s.p}>
          Să presupunem un PFA programator cu venituri brute anuale de 80.000 lei și cheltuieli deductibile de 10.000 lei (echipamente, abonamente, birou):
        </p>
        <div style={{ background: "rgba(0,43,127,0.04)", borderRadius: 14, padding: "20px 24px", marginBottom: 16, fontFamily: "'Geist Mono',monospace", fontSize: 14, color: "#334155", lineHeight: 2.2 }}>
          <div>Venituri brute: <strong style={{ color: "#0D1117" }}>80.000 lei</strong></div>
          <div>− Cheltuieli deductibile: <strong>10.000 lei</strong></div>
          <div style={{ borderTop: "1px dashed rgba(0,43,127,0.1)", paddingTop: 4, marginTop: 4 }}>
            = Venit net impozabil: <strong>70.000 lei</strong>
          </div>
          <div style={{ borderTop: "1px dashed rgba(0,43,127,0.1)", paddingTop: 8, marginTop: 4 }}>
            <div>− CAS (baza 97.200 lei × 25%): <strong>24.300 lei</strong></div>
            <div>− CASS (70.000 lei × 10%): <strong>7.000 lei</strong></div>
            <div>− Impozit venit (70.000 lei × 10%): <strong>7.000 lei</strong></div>
          </div>
          <div style={{ borderTop: "2px solid rgba(0,43,127,0.12)", paddingTop: 8, marginTop: 8 }}>
            Total taxe: <strong>38.300 lei</strong>
            <br />
            = Venit net după taxe: <strong style={{ color: "#002B7F", fontSize: 15 }}>31.700 lei/an (~2.642 lei/lună)</strong>
          </div>
        </div>
        <p style={s.p}>
          Rata efectivă totală de impozitare: ~47,9% din venitul net impozabil. Reducând cheltuielile deductibile, rata poate fi optimizată legal.
        </p>

        {/* ── 7. SFATURI OPTIMIZARE ── */}
        <h2 style={s.h2}>Cum să plătești mai puțin legal — sfaturi de optimizare fiscală</h2>
        <ul style={s.ul}>
          <li><strong>Maximizează cheltuielile deductibile:</strong> Documentează toate cheltuielile profesionale — echipamente, software, cursuri, abonamente, deplasări. Fiecare leu de cheltuiala dedusă reduce baza de impozitare cu 10 bani impozit economisit.</li>
          <li><strong>Optează pentru norma de venit dacă e favorabilă:</strong> Verifică anual normele stabilite de ANAF pentru codul tău CAEN. Dacă veniturile reale depășesc norma, sistemul cu norma devine avantajos.</li>
          <li><strong>Monitorizează pragul CAS:</strong> Dacă venitul net anual este aproape de 48.600 lei, analizează dacă depășirea pragului merită din perspectiva drepturilor la pensie vs costul CAS.</li>
          <li><strong>Planifică plățile anticipate:</strong> CAS și CASS se plătesc în 4 rate anticipate (trimestrial) sau integral. Achitarea la timp evită majorările de întârziere.</li>
          <li><strong>Consultă un contabil sau consultant fiscal:</strong> Pentru optimizare avansată și alegerea corectă a sistemului de impozitare, un consultant fiscal plătit o dată pe an poate economisi sume semnificative.</li>
        </ul>
        <div style={s.noteGreen}>
          <strong>Important:</strong> Toate strategiile prezentate sunt strict legale și prevăzute de Codul Fiscal. Evitarea legală a impozitelor (tax avoidance) este un drept al contribuabilului; evaziunea fiscală (ascunderea veniturilor) este ilegală și sancționată penal.
        </div>

        {/* ── 8. CTA ── */}
        <h2 style={s.h2}>Calculator PFA online — gratuit</h2>
        <p style={s.p}>
          Calculatorul nostru PFA calculează automat impozitul pe venit, CAS și CASS pentru orice nivel de venituri, atât în sistemul real cât și în norma de venit, conform regulilor Codului Fiscal 2026:
        </p>

        <a href="/#pfa" style={s.cta}
          onMouseEnter={e => e.currentTarget.style.background = "#1a4faf"}
          onMouseLeave={e => e.currentTarget.style.background = "#002B7F"}>
          Calculator PFA 2026 →
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
