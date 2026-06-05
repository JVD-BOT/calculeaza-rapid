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

export default function Contact() {
  useEffect(() => {
    setPageMeta(
      "Contact | CalculeazaRapid",
      "Contactează echipa CalculeazaRapid pentru întrebări, sugestii sau pentru a raporta o eroare într-un calculator. Răspundem în 1–2 zile lucrătoare.",
      "/contact"
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
            Contact
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Contact</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px,6vw,44px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Contact
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Ai o întrebare, o sugestie sau ai observat o eroare într-unul dintre calculatoare? Ne poți contacta oricând — apreciem feedbackul care ne ajută să îmbunătățim site-ul.
        </p>

        <h2 style={s.h2}>Email</h2>
        <p style={{ ...s.p, padding: "12px 16px", background: "rgba(0,43,127,0.04)", borderRadius: 10, borderLeft: "3px solid #002B7F" }}>
          <strong>Email:</strong>{" "}
          <a href="mailto:jrvdbot@gmail.com" style={{ color: "#1a4faf" }}>jrvdbot@gmail.com</a>
        </p>
        <p style={s.p}>
          Răspundem de obicei în 1–2 zile lucrătoare. Te rugăm să incluzi cât mai multe detalii (de exemplu, ce calculator foloseai și ce rezultat te-a surprins), ca să te putem ajuta mai repede.
        </p>

        <div style={s.note}>
          <strong>Notă:</strong> calculeazarapid.ro oferă informații cu caracter orientativ și nu poate oferi consultanță fiscală sau financiară personalizată. Pentru situații specifice, te rugăm să consulți un specialist autorizat sau ANAF.
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
            CalculeazaRapid.ro — Calculator impozit Romania 2026
          </div>
        </div>
      </footer>

    </div>
  );
}
