import { useEffect } from "react";
import { setPageMeta } from "./pageMeta.js";

const s = {
  h2: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: "#0D1117",
    margin: "40px 0 12px",
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
};

export default function TermeniSiConditii() {
  useEffect(() => {
    setPageMeta(
      "Termeni și Condiții | CalculeazaRapid",
      "Termenii și condițiile de utilizare ale site-ului calculeazarapid.ro — caracterul informativ al calculatoarelor, proprietate intelectuală, limitarea răspunderii și contact.",
      "/termeni-si-conditii"
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
          <span style={{ fontSize: 12, color: "#64748B", fontFamily: "'Geist Mono',monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Termeni și Condiții
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Legal</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px,6vw,44px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Termeni și Condiții
        </h1>
        <p style={{ ...s.p, fontSize: 13, color: "#94A3B8", marginBottom: 0, fontFamily: "'Geist Mono',monospace" }}>
          Ultima actualizare: 5 iunie 2026
        </p>

        <h2 style={s.h2}>1. Acceptarea termenilor</h2>
        <p style={s.p}>
          Prin accesarea și utilizarea site-ului calculeazarapid.ro („Site-ul"), accepți acești Termeni și Condiții în integralitatea lor. Dacă nu ești de acord cu acești termeni, te rugăm să nu utilizezi Site-ul.
        </p>

        <h2 style={s.h2}>2. Descrierea serviciului</h2>
        <p style={s.p}>
          calculeazarapid.ro oferă calculatoare și ghiduri informative gratuite privind salariul brut-net, taxele pentru PFA și creditele ipotecare, conform legislației fiscale române. Toate instrumentele și informațiile sunt furnizate în scop pur informativ.
        </p>

        <h2 style={s.h2}>3. Caracterul informativ. Lipsa consultanței profesionale</h2>
        <div style={s.note}>
          Rezultatele calculatoarelor și conținutul ghidurilor au caracter <strong>orientativ</strong> și nu constituie consultanță fiscală, contabilă, juridică sau financiară. Legislația se poate modifica, iar situațiile individuale pot diferi. Pentru decizii oficiale, consultă un specialist autorizat (contabil, consultant fiscal) sau autoritățile competente (ANAF). Nu ne asumăm răspunderea pentru decizii luate exclusiv pe baza rezultatelor afișate pe Site.
        </div>

        <h2 style={s.h2}>4. Acuratețea informațiilor</h2>
        <p style={s.p}>
          Depunem eforturi pentru a menține calculatoarele și informațiile actualizate și corecte. Cu toate acestea, nu garantăm că informațiile sunt complete, exacte sau actuale în orice moment. Utilizarea Site-ului se face pe propria răspundere.
        </p>

        <h2 style={s.h2}>5. Proprietate intelectuală</h2>
        <p style={s.p}>
          Întregul conținut al Site-ului (texte, ghiduri, design, cod) este proprietatea calculeazarapid.ro și este protejat de legislația privind drepturile de autor. Poți utiliza conținutul pentru uz personal, dar reproducerea sau distribuirea fără acordul nostru scris este interzisă.
        </p>

        <h2 style={s.h2}>6. Publicitate</h2>
        <p style={s.p}>
          Site-ul poate afișa anunțuri publicitare furnizate de terți, inclusiv prin Google AdSense. Nu suntem responsabili pentru conținutul reclamelor sau pentru produsele și serviciile promovate de terți.
        </p>

        <h2 style={s.h2}>7. Limitarea răspunderii</h2>
        <p style={s.p}>
          În măsura permisă de lege, calculeazarapid.ro nu răspunde pentru daune directe sau indirecte rezultate din utilizarea sau imposibilitatea de a utiliza Site-ul ori din erori în rezultatele afișate.
        </p>

        <h2 style={s.h2}>8. Linkuri externe</h2>
        <p style={s.p}>
          Site-ul poate conține linkuri către site-uri terțe. Nu controlăm și nu ne asumăm răspunderea pentru conținutul sau practicile acestora.
        </p>

        <h2 style={s.h2}>9. Modificarea termenilor</h2>
        <p style={s.p}>
          Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările intră în vigoare la publicarea pe această pagină.
        </p>

        <h2 style={s.h2}>10. Contact</h2>
        <p style={s.p}>
          Pentru întrebări privind acești termeni, ne poți contacta la:{" "}
          <a href="mailto:jrvdbot@gmail.com" style={{ color: "#1a4faf" }}>jrvdbot@gmail.com</a>
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
