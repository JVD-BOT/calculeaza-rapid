// Ghid Deducere Personala — CalculeazaRapid.ro
// Rendered at /ghid-deducere-personala via pathname routing in main.jsx

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

// Exact same logic as App.jsx calcSalariuNet
function calcNet(brut, dep) {
  const cas = Math.round(brut * 0.25);
  const cass = Math.round(brut * 0.10);
  let ded = 0;
  if (brut >= 4050 && brut <= 4300) {
    ded = [300, 400, 800, 1310][Math.min(dep, 3)];
  }
  const baza = Math.max(0, brut - cas - cass - ded);
  const imp = Math.round(baza * 0.10);
  return { cas, cass, ded, baza, imp, net: brut - cas - cass - imp };
}

export default function GhidDeducerePersonala() {
  useEffect(() => {
    setPageMeta(
      "Deducerea Personala 2026: Cine Beneficiaza si Cum se Calculeaza | CalculeazaRapid",
      "Ghid complet deducere personala Romania 2026: cine beneficiaza, praguri de venit, persoane in intretinere si exemple de calcul detaliate pentru salariul minim.",
      "/ghid-deducere-personala"
    );
  }, []);

  // Examples: brut 4050 and 4200 with 0, 1, 2, 3 dependents
  const examples = [
    { brut: 4050, dep: 0 },
    { brut: 4050, dep: 1 },
    { brut: 4050, dep: 2 },
    { brut: 4050, dep: 3 },
    { brut: 4200, dep: 0 },
    { brut: 4200, dep: 2 },
  ].map(({ brut, dep }) => ({ brut, dep, ...calcNet(brut, dep) }));

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
            Deducere Personală 2026
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Ghid 2026</span>
          <span style={s.badge}>Salarii Mici</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(26px,5.5vw,40px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Deducerea Personală 2026: Cine Beneficiază și Cum Se Calculează
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Ghid complet despre deducerea personală din România — praguri de venit, persoane în întreținere, calcul detaliat și exemple pentru toate cazurile.
        </p>

        {/* ── 1. CE ESTE DEDUCEREA PERSONALĂ ── */}
        <h2 style={s.h2}>Ce este deducerea personală?</h2>
        <p style={s.p}>
          Deducerea personală este o facilitate fiscală prevăzută de Codul Fiscal român prin care angajații cu salarii mici beneficiază de o <strong>reducere a bazei impozabile</strong> — adică a sumei pe care se calculează impozitul pe venit de 10%. Cu cât deducerea este mai mare, cu atât impozitul plătit este mai mic.
        </p>
        <p style={s.p}>
          Principiul din spatele deducerii personale este protecția socială a celor cu venituri reduse: statul recunoaște că un salariu de minimum este insuficient pentru a trăi decent și acordă o scutire parțială de impozit. Cu cât ai mai multe persoane în întreținere, cu atât deducerea este mai mare.
        </p>

        {/* ── 2. CINE BENEFICIAZĂ ── */}
        <h2 style={s.h2}>Cine poate beneficia de deducerea personală în 2026?</h2>
        <p style={s.p}>
          Deducerea personală se acordă exclusiv angajaților cu <strong>salariu brut lunar cuprins între 4.050 lei și 4.300 lei</strong>. Dacă salariul brut este sub 4.050 lei (sub minimul legal) sau depășește 4.300 lei, deducerea nu se aplică.
        </p>
        <div style={s.note}>
          <strong>Intervalul de aplicare în 2026:</strong> Salariu brut ≥ 4.050 lei și ≤ 4.300 lei
          <br />
          <strong>Pentru salarii &gt; 4.300 lei:</strong> deducere personală = 0 lei
        </div>
        <p style={s.p}>
          Această regulă poate părea strictă, dar reflectă faptul că deducerea este gândită ca un sprijin specific pentru cei cu venitul minim pe economie. Un angajat cu salariu de 4.050 lei este la nivelul minim legal, în timp ce unul cu 5.000 lei este considerat suficient de bine plătit pentru a nu mai necesita această facilitate.
        </p>

        {/* ── 3. PERSOANE ÎN ÎNTREȚINERE ── */}
        <h2 style={s.h2}>Cine este considerată „persoană în întreținere"?</h2>
        <p style={s.p}>
          Conform Codului Fiscal, pot fi declarate ca persoane în întreținere:
        </p>
        <ul style={s.ul}>
          <li><strong>Copiii minori</strong> (sub 18 ani) ai contribuabilului sau ai soțului/soției</li>
          <li><strong>Copiii majori</strong> dacă urmează studii la o formă de învățământ la zi și nu realizează venituri proprii</li>
          <li><strong>Soțul/soția</strong> dacă nu realizează venituri proprii sau acestea sunt sub 300 lei/lună</li>
          <li><strong>Părinții sau bunicii</strong> aflați în întreținerea efectivă a contribuabilului și care nu realizează venituri proprii sau sub 300 lei/lună</li>
        </ul>
        <p style={s.p}>
          O persoană poate fi declarată în întreținere la un singur contribuabil. Dacă doi părinți lucrează, fiecare poate declara câte un copil în întreținere, sau pot conveni ca doar unul să declare toți copiii — caz în care celălalt nu beneficiază de deducere suplimentară.
        </p>

        {/* ── 4. VALORILE DEDUCERII ── */}
        <h2 style={s.h2}>Valorile deducerii personale în 2026</h2>
        <p style={s.p}>
          Suma deducerii personale este fixă, în funcție de numărul de persoane în întreținere:
        </p>
        <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(0,43,127,0.08)", marginBottom: 16 }}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Persoane în întreținere</th>
                <th style={s.thRight}>Deducere personală (lei/lună)</th>
                <th style={s.thRight}>Impozit economisit (lei/lună)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0 persoane", "300", "30"],
                ["1 persoană", "400", "40"],
                ["2 persoane", "800", "80"],
                ["3 sau mai multe persoane", "1.310", "131"],
              ].map(([pers, ded, eco], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,43,127,0.02)" }}>
                  <td style={s.td}>{pers}</td>
                  <td style={s.tdRight}>{ded}</td>
                  <td style={{ ...s.tdHighlight }}>{eco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={s.p}>
          Impozitul economisit (coloana din dreapta) este deducerea înmulțită cu 10% (cota de impozit pe venit). Un angajat cu 3 copii în întreținere economisește <strong>131 lei/lună</strong> față de un coleg fără copii — o diferență de aproape 1.572 lei pe an.
        </p>

        {/* ── 5. CUM SE CALCULEAZĂ ── */}
        <h2 style={s.h2}>Cum se integrează deducerea în calculul salariului net?</h2>
        <p style={s.p}>
          Deducerea personală se scade din <strong>baza impozabilă</strong>, după CAS și CASS, nu din salariul brut. Formula completă este:
        </p>
        <div style={s.note}>
          <strong>Baza impozabilă</strong> = Brut − CAS (25%) − CASS (10%) − Deducere personală
          <br />
          <strong>Impozit</strong> = max(0, Baza impozabilă) × 10%
          <br />
          <strong>Salariu net</strong> = Brut − CAS − CASS − Impozit
        </div>
        <p style={s.p}>
          Atenție: deducerea nu scade direct din salariul net, ci reduce baza de calcul a impozitului. Efectul real în net este deducerea × 10%.
        </p>

        {/* ── 6. EXEMPLE ── */}
        <h2 style={s.h2}>Exemple de calcul — salariu minim cu deducere personală</h2>
        <p style={s.p}>
          Mai jos sunt calculate salariile nete exacte conform Codului Fiscal 2026 pentru salariul minim (4.050 lei) și un salariu de 4.200 lei, cu diferite număr de persoane în întreținere:
        </p>
        <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(0,43,127,0.08)", marginBottom: 8 }}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.thRight}>Brut (lei)</th>
                <th style={s.thRight}>Pers. întrețin.</th>
                <th style={s.thRight}>CAS (lei)</th>
                <th style={s.thRight}>CASS (lei)</th>
                <th style={s.thRight}>Deducere (lei)</th>
                <th style={s.thRight}>Impozit (lei)</th>
                <th style={{ ...s.thRight, color: "#002B7F" }}>Net (lei)</th>
              </tr>
            </thead>
            <tbody>
              {examples.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,43,127,0.02)" }}>
                  <td style={s.tdRight}>{r.brut.toLocaleString("ro-RO")}</td>
                  <td style={s.tdRight}>{r.dep}</td>
                  <td style={s.tdRight}>{r.cas.toLocaleString("ro-RO")}</td>
                  <td style={s.tdRight}>{r.cass.toLocaleString("ro-RO")}</td>
                  <td style={s.tdRight}>{r.ded.toLocaleString("ro-RO")}</td>
                  <td style={s.tdRight}>{r.imp.toLocaleString("ro-RO")}</td>
                  <td style={s.tdHighlight}>{r.net.toLocaleString("ro-RO")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...s.p, fontSize: 12, color: "#94A3B8" }}>
          * Calcule conform Codului Fiscal 2026. CAS = 25%, CASS = 10%, Impozit = 10% din baza impozabilă.
        </p>

        {/* ── 7. CUM O DECLARI ── */}
        <h2 style={s.h2}>Cum declari persoanele în întreținere la angajator?</h2>
        <p style={s.p}>
          Deducerea personală nu se acordă automat — trebuie să o soliciți în scris angajatorului, prin depunerea unei <strong>cereri de acordare a deducerii personale</strong> însoțite de documentele justificative:
        </p>
        <ul style={s.ul}>
          <li>Copii ale certificatelor de naștere ale copiilor</li>
          <li>Declarație pe proprie răspundere că persoanele în întreținere nu realizează venituri proprii sau că veniturile sunt sub plafonul legal</li>
          <li>Adeverință de la școală/universitate pentru copiii majori care urmează studii</li>
        </ul>
        <p style={s.p}>
          Documentele se depun la departamentul de resurse umane sau contabilitate. Angajatorul va recalcula impozitul reținut de la luna în care primește documentele. Nu există termen special — poți depune oricând în cursul anului.
        </p>
        <div style={s.noteGreen}>
          <strong>Sfat:</strong> Dacă ai dreptul la deducere personală dar nu ai declarat-o la timp, poți solicita recalcularea și regularizarea la finalul anului prin declarația anuală de venit (D212).
        </div>

        {/* ── GHIDURI SIMILARE ── */}
        <div style={{ marginTop: 48, padding: "20px 24px", background: "rgba(0,43,127,0.03)", borderRadius: 14, border: "1px solid rgba(0,43,127,0.07)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#64748B", textTransform: "uppercase", fontFamily: "'Geist Mono',monospace", marginBottom: 14 }}>Ghiduri Similare</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { href: "/ghid-salariu-brut-net", label: "Ghid Complet: Calcul Salariu Net din Brut în România 2026", desc: "Cum funcționează CAS, CASS și impozitul pe venit — cu tabel pentru cele mai comune salarii." },
              { href: "/ghid-pfa-taxe", label: "Ghid PFA 2026: Taxe, Contribuții și Optimizare Fiscală Legală", desc: "Dacă ai și activitate independentă, vezi cum se calculează taxele PFA." },
            ].map((g, i) => (
              <a key={i} href={g.href} style={{ textDecoration: "none" }}>
                <div style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, color: "#1a4faf" }}>→ {g.label}</div>
                <div style={{ fontSize: 12, color: "#94A3B8", fontFamily: "'Geist Mono',monospace", marginTop: 2 }}>{g.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* ── 8. CTA ── */}
        <h2 style={s.h2}>Verifică instant salariul tău net cu deducere personală</h2>
        <p style={s.p}>
          Calculatorul nostru de salariu include automat deducerea personală corectă în funcție de salariul brut și numărul de persoane în întreținere declarat. Rezultatul este calculat conform Codului Fiscal 2026:
        </p>

        <a href="/#salariu" style={s.cta}
          onMouseEnter={e => e.currentTarget.style.background = "#1a4faf"}
          onMouseLeave={e => e.currentTarget.style.background = "#002B7F"}>
          Calculator Salariu cu Deducere Personală →
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
