import { useState, useEffect } from "react";

// ─── CONSTANTS & TAX RULES 2026 ───
const TAX = {
  CAS: 0.25,
  CASS: 0.10,
  IMPOZIT: 0.10,
  CAM: 0.0225,
  SALARIU_MINIM_BRUT: 4050,
  DEDUCERE_PLAFON: 4300,
  DEDUCERE_PERSONALA: 300,
  IT_EXEMPT_MIN: 10000,
};

// ─── UTILITY FUNCTIONS ───
function formatRON(val) {
  return new Intl.NumberFormat("ro-RO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
}

function calcSalariuNet(brut, persIntr = 0, itExempt = false) {
  const cas = Math.round(brut * TAX.CAS);
  const cass = Math.round(brut * TAX.CASS);
  let deducere = 0;
  if (brut <= TAX.DEDUCERE_PLAFON && brut >= TAX.SALARIU_MINIM_BRUT) {
    deducere = TAX.DEDUCERE_PERSONALA;
  }
  const bazaImpozabila = Math.max(0, brut - cas - cass - deducere);
  const impozit = itExempt ? 0 : Math.round(bazaImpozabila * TAX.IMPOZIT);
  const cam = Math.round(brut * TAX.CAM);
  const net = brut - cas - cass - impozit;
  const costAngajator = brut + cam;
  return {
    brut,
    cas,
    cass,
    deducere,
    bazaImpozabila,
    impozit,
    net,
    cam,
    costAngajator,
    itExempt,
  };
}

function calcBrutFromNet(targetNet, itExempt = false) {
  let lo = targetNet,
    hi = targetNet * 2;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    const r = calcSalariuNet(mid, 0, itExempt);
    if (Math.abs(r.net - targetNet) < 0.5) return Math.round(mid);
    if (r.net < targetNet) lo = mid;
    else hi = mid;
  }
  return Math.round((lo + hi) / 2);
}

function calcPFA(venitBrut, cheltuieli, tipImpozitare) {
  const venitNet =
    tipImpozitare === "real" ? venitBrut - cheltuieli : venitBrut;
  const impozit = Math.round(venitNet * TAX.IMPOZIT);
  const cas =
    venitNet >= TAX.SALARIU_MINIM_BRUT * 12
      ? Math.round(TAX.SALARIU_MINIM_BRUT * 12 * TAX.CAS)
      : 0;
  const cass = Math.round(TAX.SALARIU_MINIM_BRUT * 6 * TAX.CASS);
  const totalTaxe = impozit + cas + cass;
  const venitDupaImpozitare = venitNet - totalTaxe;
  return {
    venitBrut,
    cheltuieli,
    venitNet,
    impozit,
    cas,
    cass,
    totalTaxe,
    venitDupaImpozitare,
    tipImpozitare,
  };
}

function calcMortgage(suma, dobanda, ani) {
  const r = dobanda / 100 / 12;
  const n = ani * 12;
  if (r === 0)
    return { rataLunara: suma / n, totalPlatit: suma, totalDobanda: 0, n };
  const rataLunara =
    (suma * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPlatit = rataLunara * n;
  return { rataLunara, totalPlatit, totalDobanda: totalPlatit - suma, n };
}

// ─── SHARED COMPONENTS ───
function BarChart({ items, maxVal }) {
  const mx = maxVal || Math.max(...items.map((i) => i.value), 1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <span
            style={{
              width: 120,
              fontSize: 12,
              color: "#8a8a9a",
              textAlign: "right",
              flexShrink: 0,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {item.label}
          </span>
          <div
            style={{
              flex: 1,
              height: 28,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 6,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${Math.max((item.value / mx) * 100, 2)}%`,
                height: "100%",
                background:
                  item.color || "linear-gradient(90deg, #3b82f6, #60a5fa)",
                borderRadius: 6,
                transition: "width 0.6s cubic-bezier(.22,1,.36,1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: 8,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#fff",
                  fontWeight: 600,
                  fontFamily: "'DM Mono', monospace",
                  whiteSpace: "nowrap",
                }}
              >
                {formatRON(item.value)} lei
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Stat({ label, value, accent, sub }) {
  return (
    <div style={{ textAlign: "center", padding: "16px 12px" }}>
      <div
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#6b7280",
          marginBottom: 6,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: accent || "#e2e8f0",
          fontFamily: "'Instrument Serif', serif",
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          style={{
            fontSize: 11,
            color: "#4b5563",
            marginTop: 4,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

function Input({ label, value, onChange, suffix, type = "number", step }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#6b7280",
          marginBottom: 6,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {label}
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          step={step}
          style={{
            flex: 1,
            padding: "12px 14px",
            background: "transparent",
            border: "none",
            color: "#e2e8f0",
            fontSize: 16,
            fontFamily: "'DM Mono', monospace",
            outline: "none",
            width: "100%",
          }}
        />
        {suffix && (
          <span
            style={{
              padding: "0 14px",
              color: "#4b5563",
              fontSize: 13,
              fontFamily: "'DM Mono', monospace",
              whiteSpace: "nowrap",
            }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        marginBottom: 12,
      }}
    >
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 40,
          height: 22,
          borderRadius: 11,
          background: checked ? "#3b82f6" : "rgba(255,255,255,0.1)",
          position: "relative",
          transition: "background 0.2s",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#fff",
            position: "absolute",
            top: 3,
            left: checked ? 21 : 3,
            transition: "left 0.2s",
          }}
        />
      </div>
      <span
        style={{
          fontSize: 13,
          color: "#9ca3af",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {label}
      </span>
    </label>
  );
}

function Selector({ options, value, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        marginBottom: 16,
        background: "rgba(255,255,255,0.04)",
        borderRadius: 10,
        padding: 3,
      }}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          style={{
            flex: 1,
            padding: "10px 8px",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            background:
              value === opt.value ? "rgba(59,130,246,0.2)" : "transparent",
            color: value === opt.value ? "#60a5fa" : "#6b7280",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "'DM Mono', monospace",
            transition: "all 0.2s",
            letterSpacing: 0.5,
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// ─── SALARY CALCULATOR ───
function SalaryCalc() {
  const [mode, setMode] = useState("brut");
  const [amount, setAmount] = useState("5000");
  const [itExempt, setItExempt] = useState(false);

  const brut =
    mode === "brut"
      ? parseFloat(amount) || 0
      : calcBrutFromNet(parseFloat(amount) || 0, itExempt);
  const r = calcSalariuNet(brut, 0, itExempt);

  return (
    <div>
      <Selector
        options={[
          { label: "BRUT → NET", value: "brut" },
          { label: "NET → BRUT", value: "net" },
        ]}
        value={mode}
        onChange={setMode}
      />
      <Input
        label={mode === "brut" ? "Salariu Brut" : "Salariu Net Dorit"}
        value={amount}
        onChange={setAmount}
        suffix="LEI / lună"
      />
      <Toggle
        label="Scutit impozit IT (>10.000 lei brut)"
        checked={itExempt}
        onChange={setItExempt}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 4,
          background: "rgba(255,255,255,0.02)",
          borderRadius: 14,
          padding: "8px 0",
          marginBottom: 20,
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Stat
          label="Salariu Net"
          value={`${formatRON(r.net)}`}
          accent="#34d399"
          sub="în mână / lună"
        />
        <Stat
          label="Salariu Brut"
          value={`${formatRON(r.brut)}`}
          accent="#60a5fa"
          sub="brut / lună"
        />
        <Stat
          label="Cost Angajator"
          value={`${formatRON(r.costAngajator)}`}
          accent="#f59e0b"
          sub="total firmă"
        />
      </div>

      <div
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#4b5563",
          marginBottom: 12,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        Detalii Contribuții
      </div>
      <BarChart
        items={[
          {
            label: "CAS (25%)",
            value: r.cas,
            color: "linear-gradient(90deg, #ef4444, #f87171)",
          },
          {
            label: "CASS (10%)",
            value: r.cass,
            color: "linear-gradient(90deg, #f59e0b, #fbbf24)",
          },
          {
            label: "Impozit (10%)",
            value: r.impozit,
            color: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
          },
          {
            label: "CAM (2.25%)",
            value: r.cam,
            color: "linear-gradient(90deg, #6366f1, #818cf8)",
          },
          {
            label: "Net",
            value: r.net,
            color: "linear-gradient(90deg, #10b981, #34d399)",
          },
        ]}
        maxVal={r.costAngajator}
      />
      {r.deducere > 0 && (
        <div
          style={{
            marginTop: 14,
            padding: "10px 14px",
            background: "rgba(52,211,153,0.08)",
            borderRadius: 10,
            border: "1px solid rgba(52,211,153,0.15)",
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "#34d399",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            ✓ Deducere personală aplicată: {formatRON(r.deducere)} lei
          </span>
        </div>
      )}
    </div>
  );
}

// ─── PFA CALCULATOR ───
function PFACalc() {
  const [tip, setTip] = useState("real");
  const [venit, setVenit] = useState("120000");
  const [cheltuieli, setCheltuieli] = useState("30000");

  const r = calcPFA(
    parseFloat(venit) || 0,
    tip === "real" ? parseFloat(cheltuieli) || 0 : 0,
    tip
  );

  return (
    <div>
      <Selector
        options={[
          { label: "SISTEM REAL", value: "real" },
          { label: "NORMĂ VENIT", value: "norma" },
        ]}
        value={tip}
        onChange={setTip}
      />
      <Input
        label="Venit Brut Anual"
        value={venit}
        onChange={setVenit}
        suffix="LEI / an"
      />
      {tip === "real" && (
        <Input
          label="Cheltuieli Deductibile"
          value={cheltuieli}
          onChange={setCheltuieli}
          suffix="LEI / an"
        />
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          background: "rgba(255,255,255,0.02)",
          borderRadius: 14,
          padding: "8px 0",
          marginBottom: 20,
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Stat
          label="Venit Net Anual"
          value={`${formatRON(r.venitDupaImpozitare)}`}
          accent="#34d399"
          sub={`~${formatRON(r.venitDupaImpozitare / 12)} lei/lună`}
        />
        <Stat
          label="Total Taxe"
          value={`${formatRON(r.totalTaxe)}`}
          accent="#ef4444"
          sub={`${((r.totalTaxe / (r.venitNet || 1)) * 100).toFixed(1)}% rată efectivă`}
        />
      </div>

      <BarChart
        items={[
          {
            label: "Impozit (10%)",
            value: r.impozit,
            color: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
          },
          {
            label: "CAS (25%)",
            value: r.cas,
            color: "linear-gradient(90deg, #ef4444, #f87171)",
          },
          {
            label: "CASS (10%)",
            value: r.cass,
            color: "linear-gradient(90deg, #f59e0b, #fbbf24)",
          },
        ]}
      />

      <div
        style={{
          marginTop: 16,
          padding: "12px 14px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: "#6b7280",
            fontFamily: "'DM Mono', monospace",
            lineHeight: 1.8,
          }}
        >
          <div>
            Venit brut:{" "}
            <span style={{ color: "#9ca3af" }}>
              {formatRON(r.venitBrut)} lei
            </span>
          </div>
          {tip === "real" && (
            <div>
              Cheltuieli:{" "}
              <span style={{ color: "#9ca3af" }}>
                -{formatRON(r.cheltuieli)} lei
              </span>
            </div>
          )}
          <div>
            Venit net impozabil:{" "}
            <span style={{ color: "#e2e8f0" }}>
              {formatRON(r.venitNet)} lei
            </span>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              marginTop: 6,
              paddingTop: 6,
            }}
          >
            CAS: baza = 12 × salariu minim ={" "}
            {formatRON(TAX.SALARIU_MINIM_BRUT * 12)} lei
          </div>
          <div>
            CASS: baza = 6 × salariu minim ={" "}
            {formatRON(TAX.SALARIU_MINIM_BRUT * 6)} lei
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MORTGAGE CALCULATOR ───
function MortgageCalc() {
  const [suma, setSuma] = useState("300000");
  const [dobanda, setDobanda] = useState("7.5");
  const [ani, setAni] = useState("25");

  const r = calcMortgage(
    parseFloat(suma) || 0,
    parseFloat(dobanda) || 0,
    parseFloat(ani) || 1
  );

  const principalPct =
    ((parseFloat(suma) || 0) / (r.totalPlatit || 1)) * 100;

  return (
    <div>
      <Input
        label="Sumă Credit"
        value={suma}
        onChange={setSuma}
        suffix="LEI"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Input
          label="Dobândă Anuală"
          value={dobanda}
          onChange={setDobanda}
          suffix="%"
          step="0.1"
        />
        <Input
          label="Perioadă"
          value={ani}
          onChange={setAni}
          suffix="ANI"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 4,
          background: "rgba(255,255,255,0.02)",
          borderRadius: 14,
          padding: "8px 0",
          marginBottom: 20,
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Stat
          label="Rată Lunară"
          value={`${formatRON(r.rataLunara)}`}
          accent="#60a5fa"
          sub="lei / lună"
        />
        <Stat
          label="Total Plătit"
          value={`${formatRON(r.totalPlatit)}`}
          accent="#f59e0b"
          sub={`în ${ani} ani`}
        />
        <Stat
          label="Total Dobândă"
          value={`${formatRON(r.totalDobanda)}`}
          accent="#ef4444"
          sub={`${((r.totalDobanda / (r.totalPlatit || 1)) * 100).toFixed(0)}% din total`}
        />
      </div>

      <div
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#4b5563",
          marginBottom: 8,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        Principal vs Dobândă
      </div>
      <div
        style={{
          height: 36,
          borderRadius: 10,
          overflow: "hidden",
          display: "flex",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: `${principalPct}%`,
            background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "width 0.5s",
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#fff",
              fontWeight: 700,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {principalPct.toFixed(0)}%
          </span>
        </div>
        <div
          style={{
            flex: 1,
            background: "linear-gradient(90deg, #ef4444, #f87171)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#fff",
              fontWeight: 700,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {(100 - principalPct).toFixed(0)}%
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <span style={{ color: "#60a5fa" }}>
          ● Principal: {formatRON(parseFloat(suma) || 0)} lei
        </span>
        <span style={{ color: "#f87171" }}>
          ● Dobândă: {formatRON(r.totalDobanda)} lei
        </span>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: "12px 14px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: "#6b7280",
            fontFamily: "'DM Mono', monospace",
            lineHeight: 1.8,
          }}
        >
          <div>
            Nr. rate:{" "}
            <span style={{ color: "#9ca3af" }}>
              {r.n} luni ({ani} ani)
            </span>
          </div>
          <div>
            Rată lunară:{" "}
            <span style={{ color: "#9ca3af" }}>
              {formatRON(r.rataLunara)} lei
            </span>
          </div>
          <div>
            Total rambursat:{" "}
            <span style={{ color: "#e2e8f0" }}>
              {formatRON(r.totalPlatit)} lei
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ───
export default function App() {
  const [tab, setTab] = useState("salariu");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const tabs = [
    { id: "salariu", label: "Salariu", icon: "💰", desc: "Calculator Brut ↔ Net" },
    { id: "pfa", label: "PFA", icon: "📋", desc: "Taxe & Contribuții" },
    { id: "credit", label: "Credit", icon: "🏠", desc: "Simulare Ipotecar" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "#e2e8f0",
        fontFamily: "'DM Mono', monospace",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 4,
              color: "#3b82f6",
              textTransform: "uppercase",
              marginBottom: 12,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Instrumente Financiare România 2026
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 7vw, 52px)",
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              lineHeight: 1.05,
              margin: 0,
              color: "#f1f5f9",
            }}
          >
            Calculează<span style={{ color: "#3b82f6" }}>Rapid</span>
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "#4b5563",
              marginTop: 10,
              lineHeight: 1.5,
              maxWidth: 400,
              margin: "10px auto 0",
            }}
          >
            Calculator salariu, taxe PFA și simulare credit — actualizat conform
            Codului Fiscal 2026
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
            gap: 6,
            marginBottom: 32,
            background: "rgba(255,255,255,0.02)",
            borderRadius: 16,
            padding: 6,
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "14px 8px",
                border: "none",
                borderRadius: 12,
                cursor: "pointer",
                background:
                  tab === t.id ? "rgba(59,130,246,0.12)" : "transparent",
                transition: "all 0.25s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 20 }}>{t.icon}</span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "'DM Mono', monospace",
                  color: tab === t.id ? "#60a5fa" : "#4b5563",
                }}
              >
                {t.label}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontFamily: "'DM Mono', monospace",
                  color: tab === t.id ? "#3b82f6" : "#2a2a3a",
                }}
              >
                {t.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Calculator Panel */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "28px 24px",
          }}
        >
          {tab === "salariu" && <SalaryCalc />}
          {tab === "pfa" && <PFACalc />}
          {tab === "credit" && <MortgageCalc />}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <div
            style={{
              fontSize: 10,
              color: "#2a2a3a",
              fontFamily: "'DM Mono', monospace",
              lineHeight: 1.8,
            }}
          >
            <div>
              Calculele au caracter orientativ · Nu constituie consultanță
              fiscală
            </div>
            <div>
              Actualizat conform Codului Fiscal 2026 · Salariu minim brut:{" "}
              {formatRON(TAX.SALARIU_MINIM_BRUT)} lei
            </div>
            <div style={{ marginTop: 8, color: "#1f1f2e" }}>
              CalculeazăRapid.ro — built with ♥ for Romania
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
