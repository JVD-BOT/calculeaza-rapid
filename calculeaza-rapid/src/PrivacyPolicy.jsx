// Politica de Confidentialitate — CalculeazaRapid.ro
// Rendered at /politica-confidentialitate via pathname routing in main.jsx

const LAST_UPDATED = "13 aprilie 2026";

const s = {
  h2: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700,
    fontSize: 18,
    color: "#0D1117",
    margin: "40px 0 12px",
    paddingBottom: 8,
    borderBottom: "1px solid rgba(0,43,127,0.07)",
  },
  h3: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 600,
    fontSize: 14,
    color: "#1a4faf",
    margin: "24px 0 8px",
  },
  p: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.8,
    margin: "0 0 12px",
  },
  ul: {
    fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.8,
    margin: "0 0 12px",
    paddingLeft: 20,
  },
  code: {
    fontFamily: "'Geist Mono','Courier New',monospace",
    fontSize: 12,
    background: "rgba(0,43,127,0.06)",
    padding: "2px 6px",
    borderRadius: 4,
    color: "#1a4faf",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 13,
    fontFamily: "'Geist Mono','Courier New',monospace",
    marginBottom: 16,
  },
  th: {
    padding: "10px 12px",
    textAlign: "left",
    background: "rgba(0,43,127,0.05)",
    color: "#475569",
    fontWeight: 600,
    borderBottom: "2px solid rgba(0,43,127,0.1)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  td: {
    padding: "10px 12px",
    borderBottom: "1px solid rgba(0,43,127,0.05)",
    color: "#334155",
    verticalAlign: "top",
  },
};

export default function PrivacyPolicy() {
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
          <span style={{ color: "rgba(0,43,127,0.2)", fontSize: 16 }}>/</span>
          <span style={{ fontSize: 12, color: "#64748B", fontFamily: "'Geist Mono',monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Politica de Confidentialitate
          </span>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px 80px" }}>

        <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(26px,5vw,38px)", margin: "0 0 8px", color: "#0D1117", lineHeight: 1.1 }}>
          Politica de Confidentialitate
        </h1>
        <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: "#94A3B8", margin: "0 0 40px", letterSpacing: 1 }}>
          ULTIMA ACTUALIZARE: {LAST_UPDATED}
        </p>

        {/* 1. OPERATORUL DATELOR */}
        <h2 style={s.h2}>1. Operatorul datelor cu caracter personal</h2>
        <p style={s.p}>
          Serviciul <strong>CalculeazaRapid.ro</strong> este operat de o persoană fizică cu domiciliul în România.
          Pentru orice solicitare legată de datele tale personale, te rugăm să ne contactezi la:
        </p>
        <p style={{ ...s.p, padding: "12px 16px", background: "rgba(0,43,127,0.04)", borderRadius: 10, borderLeft: "3px solid #002B7F" }}>
          <strong>E-mail:</strong> <a href="mailto:contact@calculeazarapid.ro" style={{ color: "#1a4faf" }}>contact@calculeazarapid.ro</a>
          <br />
          <strong>Site:</strong> <a href="https://calculeazarapid.ro" style={{ color: "#1a4faf" }}>https://calculeazarapid.ro</a>
        </p>

        {/* 2. CE DATE COLECTAM */}
        <h2 style={s.h2}>2. Ce date colectăm și cum le folosim</h2>

        <h3 style={s.h3}>2.1 Calculatoare — fără date trimise la server</h3>
        <p style={s.p}>
          Toate calculatoarele (salariu brut-net, taxe PFA, simulator credit ipotecar) rulează <strong>exclusiv
          în browserul tău</strong>. Datele introduse de tine (salarii, venituri, dobânzi etc.) nu sunt
          transmise, stocate sau prelucrate pe niciun server. CalculeazaRapid.ro nu colectează și nu
          are acces la valorile pe care le introduci în formulare.
        </p>

        <h3 style={s.h3}>2.2 Date stocate local (localStorage)</h3>
        <p style={s.p}>Browserul tău salvează local, fără a le trimite la server, următoarele informații:</p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cheie</th>
              <th style={s.th}>Conținut</th>
              <th style={s.th}>Scop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}><code style={s.code}>cr_cookie_consent</code></td>
              <td style={s.td}><code style={s.code}>"accepted"</code> sau <code style={s.code}>"refused"</code></td>
              <td style={s.td}>Reținerea preferinței tale de consimțământ pentru cookies</td>
            </tr>
          </tbody>
        </table>

        <h3 style={s.h3}>2.3 Cookie-uri de analiză (Google Analytics 4) — doar cu consimțământ</h3>
        <p style={s.p}>
          Dacă alegi să accepți cookie-urile, site-ul încarcă <strong>Google Analytics 4</strong> (GA4),
          un serviciu de statistică web oferit de Google LLC. GA4 colectează date anonimizate despre
          vizite (pagini vizualizate, durată sesiune, tip dispozitiv) prin cookie-uri de primă și terță
          parte. <strong>Dacă alegi „Refuză", Google Analytics nu se va încărca deloc.</strong>
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cookie</th>
              <th style={s.th}>Furnizor</th>
              <th style={s.th}>Durată</th>
              <th style={s.th}>Scop</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["_ga", "Google", "2 ani", "Identificator unic de vizitator (anonimizat)"],
              ["_ga_*", "Google", "2 ani", "Starea sesiunii GA4"],
              ["_gid", "Google", "24 ore", "Diferențierea utilizatorilor"],
            ].map(([name, vendor, duration, purpose]) => (
              <tr key={name}>
                <td style={s.td}><code style={s.code}>{name}</code></td>
                <td style={s.td}>{vendor}</td>
                <td style={s.td}>{duration}</td>
                <td style={s.td}>{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={s.p}>
          Datele GA4 sunt procesate de Google LLC (SUA) în temeiul{" "}
          <strong>Clauzelor Contractuale Standard</strong> aprobate de Comisia Europeană
          (Decizia de adecvare UE-SUA / Data Privacy Framework). Poți consulta politica de
          confidentialitate Google la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4faf" }}>
            policies.google.com/privacy
          </a>.
        </p>

        {/* 3. TEMEIUL JURIDIC */}
        <h2 style={s.h2}>3. Temeiul juridic al prelucrării</h2>
        <ul style={s.ul}>
          <li>
            <strong>Consimțământ (Art. 6(1)(a) GDPR)</strong> — pentru cookie-urile Google Analytics.
            Poți retrage consimțământul oricând ștergând datele din browser sau apăsând „Refuză"
            într-o sesiune nouă (ștergând cheia <code style={s.code}>cr_cookie_consent</code> din localStorage).
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>Interes legitim (Art. 6(1)(f) GDPR)</strong> — pentru stocarea preferinței de
            consimțământ în localStorage, necesară funcționării tehnice a bannerului de cookies.
          </li>
        </ul>

        {/* 4. DURATA STOCARII */}
        <h2 style={s.h2}>4. Durata stocării datelor</h2>
        <ul style={s.ul}>
          <li>Cookie-uri Google Analytics: maxim <strong>2 ani</strong> (conform politicii GA4).</li>
          <li>Preferința de consimțământ (<code style={s.code}>cr_cookie_consent</code>): stocată în localStorage până la ștergerea manuală a datelor browserului sau resetarea setărilor site-ului.</li>
          <li>Date introduse în calculatoare: <strong>nu sunt stocate</strong> — există doar în memoria RAM a browserului pe durata sesiunii.</li>
        </ul>

        {/* 5. DESTINATARI / PROCESATORI */}
        <h2 style={s.h2}>5. Destinatari și procesatori terți</h2>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Procesator</th>
              <th style={s.th}>Serviciu</th>
              <th style={s.th}>Țara</th>
              <th style={s.th}>Garanții</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>Google LLC</td>
              <td style={s.td}>Google Analytics 4</td>
              <td style={s.td}>SUA</td>
              <td style={s.td}>EU-U.S. Data Privacy Framework + Clauze Contractuale Standard</td>
            </tr>
            <tr>
              <td style={s.td}>Vercel Inc.</td>
              <td style={s.td}>Găzduire web (hosting)</td>
              <td style={s.td}>SUA / UE (Edge)</td>
              <td style={s.td}>DPA Vercel + Clauze Contractuale Standard</td>
            </tr>
          </tbody>
        </table>

        {/* 6. DREPTURILE TALE */}
        <h2 style={s.h2}>6. Drepturile tale conform GDPR</h2>
        <p style={s.p}>
          În calitate de persoană vizată, ai următoarele drepturi conform Regulamentului (UE) 2016/679:
        </p>
        <ul style={s.ul}>
          <li><strong>Dreptul de acces (Art. 15)</strong> — poți solicita o copie a datelor personale pe care le deținem despre tine.</li>
          <li><strong>Dreptul la rectificare (Art. 16)</strong> — poți solicita corectarea datelor inexacte.</li>
          <li><strong>Dreptul la ștergere (Art. 17)</strong> — poți solicita ștergerea datelor personale („dreptul de a fi uitat").</li>
          <li><strong>Dreptul la restricționarea prelucrării (Art. 18)</strong> — poți solicita limitarea modului în care prelucrăm datele tale.</li>
          <li><strong>Dreptul la portabilitatea datelor (Art. 20)</strong> — poți solicita datele într-un format structurat, utilizat frecvent și lizibil automat.</li>
          <li><strong>Dreptul la opoziție (Art. 21)</strong> — poți obiecta față de prelucrarea datelor tale în orice moment.</li>
          <li><strong>Retragerea consimțământului</strong> — poți retrage consimțământul pentru cookie-uri oricând, fără a afecta legalitatea prelucrării anterioare. Șterge cheia <code style={s.code}>cr_cookie_consent</code> din localStorage al browserului tău.</li>
        </ul>
        <p style={s.p}>
          Poți exercita aceste drepturi contactând operatorul la adresa de e-mail menționată la secțiunea 1.
          De asemenea, ai dreptul să depui o plângere la <strong>Autoritatea Națională de Supraveghere a
          Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>:
          {" "}<a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4faf" }}>www.dataprotection.ro</a>.
        </p>

        {/* 7. SECURITATE */}
        <h2 style={s.h2}>7. Securitatea datelor</h2>
        <p style={s.p}>
          Site-ul este servit exclusiv prin HTTPS (TLS 1.2+). Nu stocăm parole, date financiare sau
          informații de identificare personală pe serverele noastre. Datele anonimizate GA4 sunt
          protejate conform standardelor de securitate Google.
        </p>

        {/* 8. MODIFICARI */}
        <h2 style={s.h2}>8. Modificări ale acestei politici</h2>
        <p style={s.p}>
          Ne rezervăm dreptul de a actualiza această politică periodic. Modificările semnificative vor
          fi anunțate prin actualizarea datei „Ultima actualizare" din antetul acestei pagini. Continuarea
          utilizării site-ului după publicarea modificărilor constituie acceptarea acestora.
        </p>

        {/* 9. CONTACT */}
        <h2 style={s.h2}>9. Contact</h2>
        <p style={s.p}>
          Pentru orice întrebare legată de această politică de confidentialitate sau de prelucrarea
          datelor tale, ne poți contacta la:
        </p>
        <p style={{ ...s.p, padding: "12px 16px", background: "rgba(0,43,127,0.04)", borderRadius: 10, borderLeft: "3px solid #002B7F" }}>
          <strong>E-mail:</strong> <a href="mailto:contact@calculeazarapid.ro" style={{ color: "#1a4faf" }}>contact@calculeazarapid.ro</a><br />
          <strong>Site:</strong> <a href="https://calculeazarapid.ro" style={{ color: "#1a4faf" }}>https://calculeazarapid.ro</a>
        </p>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,43,127,0.07)", padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "#94A3B8", fontFamily: "'Geist Mono',monospace", lineHeight: 2 }}>
          <div>
            <a href="/" style={{ color: "#1a4faf", textDecoration: "none", fontWeight: 600 }}>
              ← Înapoi la CalculeazaRapid.ro
            </a>
          </div>
          <div style={{ marginTop: 4, fontSize: 11 }}>
            CalculeazaRapid.ro — Calculator impozit Romania 2026
          </div>
        </div>
      </footer>

    </div>
  );
}
