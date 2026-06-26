// Ghiduri fiscale și financiare — index/hub al tuturor ghidurilor
// Rendered at /ghiduri via pathname routing in main.jsx

import { useEffect } from "react";
import { setPageMeta } from "./pageMeta.js";

const s = {
  h2: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "#64748B",
    margin: "44px 0 16px",
  },
  p: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 15,
    color: "#334155",
    lineHeight: 1.85,
    margin: "0 0 14px",
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
  soonBadge: {
    display: "inline-block",
    padding: "2px 9px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 700,
    fontFamily: "'Geist Mono',monospace",
    background: "rgba(100,116,139,0.12)",
    color: "#64748B",
    whiteSpace: "nowrap",
  },
  cardTitle: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#0D1117",
    margin: 0,
    lineHeight: 1.3,
  },
  cardDesc: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 14,
    color: "#64748B",
    lineHeight: 1.7,
    margin: "8px 0 0",
  },
};

// type: "salarii" | "pfa" | "credite"
const SECTIONS = [
  {
    key: "salarii",
    label: "Salarii și venituri",
    guides: [
      {
        title: "Ghid Salariu Brut-Net 2026",
        desc: "Cum se transformă salariul brut în net: CAS, CASS, impozitul pe venit și deducerea personală, cu exemple pas cu pas.",
        href: "/ghid-salariu-brut-net",
      },
      {
        title: "Ghid Deducere Personală",
        desc: "Cine are dreptul la deducerea personală, cum se calculează în funcție de salariu și de persoanele în întreținere, și cum se aplică la salariul net.",
        href: "/ghid-deducere-personala",
      },
      {
        title: "Ghid Salariul Minim 2026",
        desc: "Valoarea salariului minim brut pe economie în 2026, echivalentul net, salariile minime sectoriale și cui se aplică.",
        soon: true,
      },
      {
        title: "Ghid Concediu Medical",
        desc: "Cum se calculează indemnizația de concediu medical, cine o plătește și ce condiții trebuie îndeplinite.",
        soon: true,
      },
      {
        title: "Ghid Indemnizație de Șomaj",
        desc: "Condiții de eligibilitate, cuantumul indemnizației de șomaj și perioada pentru care se acordă.",
        soon: true,
      },
    ],
  },
  {
    key: "pfa",
    label: "PFA și afaceri",
    guides: [
      {
        title: "Ghid Taxe PFA",
        desc: "Comparație PFA vs SRL, sistem real vs normă de venit, pragurile CAS și CASS, cu un exemplu complet de calcul.",
        href: "/ghid-pfa-taxe",
      },
      {
        title: "Ghid Impozit pe Dividende",
        desc: "Cota de impozit pe dividende, pragul CASS și cum se declară veniturile din dividende.",
        soon: true,
      },
      {
        title: "Ghid TVA în România",
        desc: "Cotele de TVA, plafonul de înregistrare și cine este obligat să se înregistreze în scopuri de TVA.",
        soon: true,
      },
    ],
  },
  {
    key: "credite",
    label: "Credite și locuințe",
    guides: [
      {
        title: "Ghid Credit Ipotecar",
        desc: "Cum funcționează un credit ipotecar, dobândă fixă vs IRCC, ce verifică băncile și programul Noua Casă.",
        href: "/ghid-credit-ipotecar",
      },
      {
        title: "Ghid Impozit pe Venituri din Chirii",
        desc: "Cum se impozitează veniturile din chirii, cota de cheltuieli deductibilă și contribuția CASS.",
        soon: true,
      },
    ],
  },
];

function GuideCard({ guide }) {
  const baseCard = {
    display: "block",
    padding: "18px 20px",
    borderRadius: 12,
    border: "1px solid rgba(0,43,127,0.08)",
    background: "#fff",
    textDecoration: "none",
    transition: "border-color 0.15s, box-shadow 0.15s, transform 0.15s",
  };

  if (guide.soon) {
    return (
      <div style={{ ...baseCard, background: "rgba(0,43,127,0.02)", opacity: 0.85, cursor: "default" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <h3 style={{ ...s.cardTitle, color: "#475569" }}>{guide.title}</h3>
          <span style={s.soonBadge}>în curând</span>
        </div>
        <p style={s.cardDesc}>{guide.desc}</p>
      </div>
    );
  }

  return (
    <a
      href={guide.href}
      style={baseCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,43,127,0.25)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,43,127,0.08)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,43,127,0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <h3 style={s.cardTitle}>{guide.title}</h3>
        <span style={{ color: "#1a4faf", fontSize: 18, flexShrink: 0 }} aria-hidden="true">→</span>
      </div>
      <p style={s.cardDesc}>{guide.desc}</p>
    </a>
  );
}

export default function Ghiduri() {
  useEffect(() => {
    setPageMeta(
      "Ghiduri Fiscale și Financiare România 2026 | CalculeazaRapid",
      "Toate ghidurile CalculeazaRapid despre salarii, taxe, contribuții și credite în România: salariu brut-net, deducere personală, taxe PFA și credit ipotecar, cu formule și exemple.",
      "/ghiduri"
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
            Ghiduri
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "52px 20px 100px" }}>

        <div style={{ marginBottom: 8 }}>
          <span style={s.badge}>Ghiduri</span>
        </div>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px,6vw,44px)",
          margin: "12px 0 10px",
          color: "#0D1117",
          lineHeight: 1.15,
        }}>
          Ghiduri fiscale și financiare
        </h1>
        <p style={{ ...s.p, fontSize: 16, color: "#64748B", marginBottom: 0 }}>
          Toate ghidurile noastre explică pe înțelesul tuturor cum funcționează salariile, taxele, contribuțiile și creditele în România. Fiecare ghid include formule, exemple concrete și tabele, actualizate conform legislației în vigoare. Folosește-le împreună cu calculatoarele noastre pentru a înțelege exact de unde vin cifrele.
        </p>

        {SECTIONS.map((section) => (
          <section key={section.key} aria-label={section.label}>
            <h2 style={s.h2}>{section.label}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {section.guides.map((guide) => (
                <GuideCard key={guide.title} guide={guide} />
              ))}
            </div>
          </section>
        ))}

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
