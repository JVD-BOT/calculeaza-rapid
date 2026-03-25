import { useState, useEffect } from "react";

// âââ CONSTANTS & TAX RULES 2026 âââ
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

// âââ UTILITY FUNCTIONS âââ
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
  return { brut, cas, cass, deducere, bazaImpozabila, impozit, net, cam, costAngajator, itExempt };
}

function calcBrutFromNet(targetNet, itExempt = false) {
  let lo = targetNet, hi = targetNet * 2;
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
  const venitNet = tipImpozitare === "real" ? venitBrut - cheltuieli : venitBrut;
  const impozit = Math.round(venitNet * TAX.IMPOZIT);
  const cas = venitNet >= TAX.SALARIU_MINIM_BRUT * 12
    ? Math.round(TAX.SALARIU_MINIM_BRUT * 12 * TAX.CAS)
    : 0;
  const cass = Math.round(TAX.SALARIU_MINIM_BRUT * 6 * TAX.CASS);
  const totalTaxe = impozit + cas + cass;
  const venitDupaImpozitare = venitNet - totalTaxe;
  return { venitBrut, cheltuieli, venitNet, impozit, cas, cass, totalTaxe, venitDupaImpozitare, tipImpozitare };
}

function calcMortgage(suma, dobanda, ani) {
  const r = dobanda / 100 / 12;
  const n = ani * 12;
  if (r === 0) return { rataLunara: suma / n, totalPlatit: suma, totalDobanda: 0, n };
  const rataLunara = (suma * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPlatit = rataLunara * n;
  return { rataLunara, totalPlatit, totalDobanda: totalPlatit - suma, n };
}

// âââ SHARE BUTTON COMPONENT âââ
function ShareButton({ text, url = "https://calculeazarapid.ro" }) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title: "CalculeazÄRapid â Instrumente Financiare RomÃ¢nia",
    text: text || "CalculeazÄ impozitul pe salariu, taxe PFA Èi credit ipotecar Ã®n RomÃ¢nia â gratuit!",
    url,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // user cancelled
      }
    } else {
      // fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url + " â " + shareData.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        // silent fail
      }
    }
  };

  const waUrl = "https://wa.me/?text=" + encodeURIComponent(shareData.text + " " + url);

  return (
    <div style={{ display: "flex", gap: 8, marginTop: 20, alignItems: "center" }}>
      <button
        onClick={handleShare}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 16px",
          background: "rgba(0,43,127,0.08)",
          border: "1px solid rgba(0,43,127,0.2)",
          borderRadius: 10,
          color: "#1a4faf",
          fontSize: 12,
          fontFamily: "'Geist Mono', 'Courier New', monospace",
          cursor: "pointer",
          transition: "all 0.2s",
          fontWeight: 600,
          letterSpacing: 0.5,
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(0,43,127,0.14)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(0,43,127,0.08)"}
      >
        <span style={{ fontSize: 15 }}>
          {copied ? "â" : "ð"}
        </span>
        {copied ? "LINK COPIAT!" : (navigator.share ? "SHARE" : "COPIAZÄ LINK")}
      </button>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 16px",
          background: "rgba(37,211,102,0.1)",
          border: "1px solid rgba(37,211,102,0.2)",
          borderRadius: 10,
          color: "#25d366",
          fontSize: 12,
          fontFamily: "'Geist Mono', 'Courier New', monospace",
          textDecoration: "none",
          fontWeight: 600,
          letterSpacing: 0.5,
          transition: "all 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(37,211,102,0.2)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(37,211,102,0.1)"}
      >
        <span style={{ fontSize: 15 }}>&#9993;</span>
        WHATSAPP
      </a>
    </div>
  );
}

// âââ SHARED COMPONENTS âââ
function BarChart({ items, maxVal }) {
  const mx = maxVal || Math.max(...items.map((i) => i.value), 1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 120, fontSize: 12, color: "#64748B", textAlign: "right", flexShrink: 0, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
            {item.label}
          </span>
          <div style={{ flex: 1, height: 28, background: "rgba(0,43,127,0.04)", borderRadius: 6, overflow: "hidden", position: "relative" }}>
            <div style={{
              width: `${Math.max((item.value / mx) * 100, 2)}%`,
              height: "100%",
              background: item.color || "linear-gradient(90deg, #002B7F, #1a4faf)",
              borderRadius: 6,
              transition: "width 0.6s cubic-bezier(.22,1,.36,1)",
              display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
            }}>
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, fontFamily: "'Geist Mono', 'Courier New', monospace", whiteSpace: "nowrap" }}>
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
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#64748B", marginBottom: 6, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: accent || "#0D1117", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>{sub}</div>}
    </div>
  );
}

function Input({ label, value, onChange, suffix, type = "number", step }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#64748B", marginBottom: 6, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
        {label}
      </label>
      <div style={{ display: "flex", alignItems: "center", background: "rgba(0,43,127,0.04)", border: "1px solid rgba(0,43,127,0.08)", borderRadius: 10, overflow: "hidden" }}>
        <input
          type={type} value={value}
          onChange={(e) => onChange(e.target.value)}
          step={step}
          style={{ flex: 1, padding: "12px 14px", background: "transparent", border: "none", color: "#0D1117", fontSize: 16, fontFamily: "'Geist Mono', 'Courier New', monospace", outline: "none", width: "100%" }}
        />
        {suffix && <span style={{ padding: "0 14px", color: "#94A3B8", fontSize: 13, fontFamily: "'Geist Mono', 'Courier New', monospace", whiteSpace: "nowrap" }}>{suffix}</span>}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 12 }}>
      <div onClick={() => onChange(!checked)} style={{ width: 40, height: 22, borderRadius: 11, background: checked ? "#002B7F" : "rgba(0,43,127,0.06)", position: "relative", transition: "background 0.2s", cursor: "pointer" }}>
        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: checked ? 21 : 3, transition: "left 0.2s" }} />
      </div>
      <span style={{ fontSize: 13, color: "#475569", fontFamily: "'Geist Mono', 'Courier New', monospace" }}>{label}</span>
    </label>
  );
}

function Selector({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "rgba(0,43,127,0.04)", borderRadius: 10, padding: 3 }}>
      {options.map((opt) => (
        <button key={opt.value} onClick={() => onChange(opt.value)} style={{
          flex: 1, padding: "10px 8px", border: "none", borderRadius: 8, cursor: "pointer",
          background: value === opt.value ? "rgba(0,43,127,0.1)" : "transparent",
          color: value === opt.value ? "#1a4faf" : "#64748B",
          fontSize: 12, fontWeight: 600, fontFamily: "'Geist Mono', 'Courier New', monospace", transition: "all 0.2s", letterSpacing: 0.5,
        }}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// âââ SALARY CALCULATOR âââ
function SalaryCalc() {
  const [mode, setMode] = useState("brut");
  const [amount, setAmount] = useState("5000");
  const [itExempt, setItExempt] = useState(false);
  const brut = mode === "brut" ? parseFloat(amount) || 0 : calcBrutFromNet(parseFloat(amount) || 0, itExempt);
  const r = calcSalariuNet(brut, 0, itExempt);
  const shareText = `Salariul meu net Ã®n RomÃ¢nia: ${formatRON(r.net)} lei/lunÄ (din ${formatRON(r.brut)} lei brut). CalculeazÄ-Èi salariul la:`;
  return (
    <div>
      <Selector options={[{ label: "BRUT â NET", value: "brut" }, { label: "NET â BRUT", value: "net" }]} value={mode} onChange={setMode} />
      <Input label={mode === "brut" ? "Salariu Brut" : "Salariu Net Dorit"} value={amount} onChange={setAmount} suffix="LEI / lunÄ" />
      <Toggle label="Scutit impozit IT (>10.000 lei brut)" checked={itExempt} onChange={setItExempt} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, background: "rgba(0,43,127,0.03)", borderRadius: 14, padding: "8px 0", marginBottom: 20, border: "1px solid rgba(0,43,127,0.05)" }}>
        <Stat label="Salariu Net" value={`${formatRON(r.net)}`} accent="#059669" sub="Ã®n mÃ¢nÄ / lunÄ" />
        <Stat label="Salariu Brut" value={`${formatRON(r.brut)}`} accent="#1a4faf" sub="brut / lunÄ" />
        <Stat label="Cost Angajator" value={`${formatRON(r.costAngajator)}`} accent="#D4A017" sub="total firmÄ" />
      </div>
      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: "#94A3B8", marginBottom: 12, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
        Detalii ContribuÈii
      </div>
      <BarChart items={[
        { label: "CAS (25%)", value: r.cas, color: "linear-gradient(90deg, #CE1126, #e8394d)" },
        { label: "CASS (10%)", value: r.cass, color: "linear-gradient(90deg, #D4A017, #FCD116)" },
        { label: "Impozit (10%)", value: r.impozit, color: "linear-gradient(90deg, #002B7F, #1a4faf)" },
        { label: "CAM (2.25%)", value: r.cam, color: "linear-gradient(90deg, #1a4faf, #4070d0)" },
        { label: "Net", value: r.net, color: "linear-gradient(90deg, #059669, #10b981)" },
      ]} maxVal={r.costAngajator} />
      {r.deducere > 0 && (
        <div style={{ marginTop: 14, padding: "10px 14px", background: "rgba(5,150,105,0.08)", borderRadius: 10, border: "1px solid rgba(5,150,105,0.15)" }}>
          <span style={{ fontSize: 12, color: "#059669", fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
            â Deducere personalÄ aplicatÄ: {formatRON(r.deducere)} lei
          </span>
        </div>
      )}
      <ShareButton text={shareText} />
    </div>
  );
}

// âââ PFA CALCULATOR âââ
function PFACalc() {
  const [tip, setTip] = useState("real");
  const [venit, setVenit] = useState("120000");
  const [cheltuieli, setCheltuieli] = useState("30000");
  const r = calcPFA(parseFloat(venit) || 0, tip === "real" ? parseFloat(cheltuieli) || 0 : 0, tip);
  const shareText = `Venitul meu net ca PFA Ã®n RomÃ¢nia: ${formatRON(r.venitDupaImpozitare)} lei/an (${formatRON(r.venitDupaImpozitare / 12)} lei/lunÄ). CalculeazÄ-Èi taxele PFA la:`;
  return (
    <div>
      <Selector options={[{ label: "SISTEM REAL", value: "real" }, { label: "NORMÄ VENIT", value: "norma" }]} value={tip} onChange={setTip} />
      <Input label="Venit Brut Anual" value={venit} onChange={setVenit} suffix="LEI / an" />
      {tip === "real" && <Input label="Cheltuieli Deductibile" value={cheltuieli} onChange={setCheltuieli} suffix="LEI / an" />}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, background: "rgba(0,43,127,0.03)", borderRadius: 14, padding: "8px 0", marginBottom: 20, border: "1px solid rgba(0,43,127,0.05)" }}>
        <Stat label="Venit Net Anual" value={`${formatRON(r.venitDupaImpozitare)}`} accent="#059669" sub={`~${formatRON(r.venitDupaImpozitare / 12)} lei/lunÄ`} />
        <Stat label="Total Taxe" value={`${formatRON(r.totalTaxe)}`} accent="#CE1126" sub={`${((r.totalTaxe / (r.venitNet || 1)) * 100).toFixed(1)}% ratÄ efectivÄ`} />
      </div>
      <BarChart items={[
        { label: "Impozit (10%)", value: r.impozit, color: "linear-gradient(90deg, #002B7F, #1a4faf)" },
        { label: "CAS (25%)", value: r.cas, color: "linear-gradient(90deg, #CE1126, #e8394d)" },
        { label: "CASS (10%)", value: r.cass, color: "linear-gradient(90deg, #D4A017, #FCD116)" },
      ]} />
      <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(0,43,127,0.03)", borderRadius: 10, border: "1px solid rgba(0,43,127,0.05)" }}>
        <div style={{ fontSize: 11, color: "#64748B", fontFamily: "'Geist Mono', 'Courier New', monospace", lineHeight: 1.8 }}>
          <div>Venit brut: <span style={{ color: "#475569" }}>{formatRON(r.venitBrut)} lei</span></div>
          {tip === "real" && <div>Cheltuieli: <span style={{ color: "#475569" }}>-{formatRON(r.cheltuieli)} lei</span></div>}
          <div>Venit net impozabil: <span style={{ color: "#0D1117" }}>{formatRON(r.venitNet)} lei</span></div>
          <div style={{ borderTop: "1px solid rgba(0,43,127,0.05)", marginTop: 6, paddingTop: 6 }}>
            CAS: baza = 12 Ã salariu minim = {formatRON(TAX.SALARIU_MINIM_BRUT * 12)} lei
          </div>
          <div>CASS: baza = 6 Ã salariu minim = {formatRON(TAX.SALARIU_MINIM_BRUT * 6)} lei</div>
        </div>
      </div>
      <ShareButton text={shareText} />
    </div>
  );
}

// âââ MORTGAGE CALCULATOR âââ
function MortgageCalc() {
  const [suma, setSuma] = useState("300000");
  const [dobanda, setDobanda] = useState("7.5");
  const [ani, setAni] = useState("25");
  const r = calcMortgage(parseFloat(suma) || 0, parseFloat(dobanda) || 0, parseFloat(ani) || 1);
  const principalPct = ((parseFloat(suma) || 0) / (r.totalPlatit || 1)) * 100;
  const shareText = `Simulare credit ipotecar RomÃ¢nia: ${formatRON(parseFloat(suma))} lei, ${dobanda}%, ${ani} ani â ratÄ lunarÄ ${formatRON(r.rataLunara)} lei. CalculeazÄ la:`;
  return (
    <div>
      <Input label="SumÄ Credit" value={suma} onChange={setSuma} suffix="LEI" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Input label="DobÃ¢ndÄ AnualÄ" value={dobanda} onChange={setDobanda} suffix="%" step="0.1" />
        <Input label="PerioadÄ" value={ani} onChange={setAni} suffix="ANI" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, background: "rgba(0,43,127,0.03)", borderRadius: 14, padding: "8px 0", marginBottom: 20, border: "1px solid rgba(0,43,127,0.05)" }}>
        <Stat label="RatÄ LunarÄ" value={`${formatRON(r.rataLunara)}`} accent="#1a4faf" sub="lei / lunÄ" />
        <Stat label="Total PlÄtit" value={`${formatRON(r.totalPlatit)}`} accent="#D4A017" sub={`Ã®n ${ani} ani`} />
        <Stat label="Total DobÃ¢ndÄ" value={`${formatRON(r.totalDobanda)}`} accent="#CE1126" sub={`${((r.totalDobanda / (r.totalPlatit || 1)) * 100).toFixed(0)}% din total`} />
      </div>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#94A3B8", marginBottom: 8, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
        Principal vs DobÃ¢ndÄ
      </div>
      <div style={{ height: 36, borderRadius: 10, overflow: "hidden", display: "flex", marginBottom: 8 }}>
        <div style={{ width: `${principalPct}%`, background: "linear-gradient(90deg, #002B7F, #1a4faf)", display: "flex", alignItems: "center", justifyContent: "center", transition: "width 0.5s" }}>
          <span style={{ fontSize: 11, color: "#fff", fontWeight: 700, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>{principalPct.toFixed(0)}%</span>
        </div>
        <div style={{ flex: 1, background: "linear-gradient(90deg, #CE1126, #e8394d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 11, color: "#fff", fontWeight: 700, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>{(100 - principalPct).toFixed(0)}%</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
        <span style={{ color: "#1a4faf" }}>â Principal: {formatRON(parseFloat(suma) || 0)} lei</span>
        <span style={{ color: "#e8394d" }}>â DobÃ¢ndÄ: {formatRON(r.totalDobanda)} lei</span>
      </div>
      <div style={{ marginTop: 20, padding: "12px 14px", background: "rgba(0,43,127,0.03)", borderRadius: 10, border: "1px solid rgba(0,43,127,0.05)" }}>
        <div style={{ fontSize: 11, color: "#64748B", fontFamily: "'Geist Mono', 'Courier New', monospace", lineHeight: 1.8 }}>
          <div>Nr. rate: <span style={{ color: "#475569" }}>{r.n} luni ({ani} ani)</span></div>
          <div>RatÄ lunarÄ: <span style={{ color: "#475569" }}>{formatRON(r.rataLunara)} lei</span></div>
          <div>Total rambursat: <span style={{ color: "#0D1117" }}>{formatRON(r.totalPlatit)} lei</span></div>
        </div>
      </div>
      <ShareButton text={shareText} />
    </div>
  );
}

// âââ FAQ SECTION âââ
function FAQSection() {
  const faqsEN = [
    { q: "How do I calculate income tax in Romania?", a: "In Romania, income tax (impozit pe venit) is 10% of the taxable gross salary, after deducting CAS (25%) and CASS (10%) social contributions. Use the salary calculator above to instantly compute your net salary from any gross amount, based on the 2026 Romanian Fiscal Code." },
    { q: "What is the income tax rate in Romania in 2026?", a: "Romania applies a flat income tax rate of 10% on salaries and most personal income. Employees also pay CAS 25% (pension) and CASS 10% (health). Employers pay CAM (2.25%). IT professionals earning over 10,000 lei gross are exempt from income tax." },
    { q: "How do I calculate PFA taxes in Romania?", a: "PFA (Persoana Fizica Autorizata) taxes in Romania include a 10% income tax, CAS 25% (calculated on 24Ã the minimum wage annually), and CASS 10% (calculated on 6â60Ã minimum wage). Switch to the PFA tab above for a full 2026 breakdown." },
    { q: "What is the minimum gross salary in Romania in 2026?", a: "The minimum gross salary in Romania in 2026 is 4,050 lei per month, which corresponds to a net take-home pay of approximately 2,363 lei per month." },
    { q: "How much net salary will I get from a 5,000 lei gross salary in Romania?", a: "For a gross salary of 5,000 lei (2026), the net take-home salary is approximately 2,925 lei/month after CAS (1,250 lei), CASS (500 lei), and income tax (325 lei). Enter any amount in the calculator above for instant results." },
  ];
  const faqsRO = [
    { q: "Cum calculez impozitul pe salariu Ã®n RomÃ¢nia?", a: "Impozitul pe venit Ã®n RomÃ¢nia este de 10% aplicat la baza impozabilÄ, dupÄ deducerea CAS (25%) Åi CASS (10%). FolosiÈi calculatorul de mai sus pentru a afla salariul net din brut Ã®n cÃ¢teva secunde, actualizat conform Codului Fiscal 2026." },
    { q: "Care este cota de impozit pe venit Ã®n RomÃ¢nia Ã®n 2026?", a: "RomÃ¢nia aplicÄ o cotÄ unicÄ de impozit pe venit de 10% pentru salarii Åi majoritatea veniturilor persoanelor fizice. AngajaÈii plÄtesc Åi CAS 25% (pensie) Åi CASS 10% (sÄnÄtate). Angajatorul plÄteÅte CAM (2,25%). AngajaÈii IT cu salariu brut peste 10.000 lei sunt scutiÈi de impozit." },
    { q: "Cum calculez taxele pentru PFA Ã®n RomÃ¢nia?", a: "Taxele PFA Ã®n RomÃ¢nia includ impozit pe venit 10%, CAS 25% (calculat la 24Ã salariul minim brut anual) Åi CASS 10% (calculat la minimum 6Ã salariul minim). AccesaÈi tab-ul PFA de mai sus pentru un calcul complet pentru 2026." },
    { q: "Care este salariul minim brut Ã®n RomÃ¢nia Ã®n 2026?", a: "Salariul minim brut pe economie Ã®n RomÃ¢nia Ã®n 2026 este de 4.050 lei pe lunÄ, ceea ce corespunde unui salariu net de aproximativ 2.363 lei pe lunÄ." },
    { q: "CÃ¢t salariu net primesc din 5.000 lei brut Ã®n RomÃ¢nia?", a: "Pentru un salariu brut de 5.000 lei (2026), salariul net este de aproximativ 2.925 lei/lunÄ dupÄ deducerea CAS (1.250 lei), CASS (500 lei) Åi impozit (325 lei). IntroduceÈi orice sumÄ Ã®n calculator pentru rezultate instant." },
    { q: "Ce contribuÈii plÄteÅte angajatul Ã®n RomÃ¢nia?", a: "Angajatul din RomÃ¢nia plÄteÅte trei contribuÈii: CAS 25% (contribuÈia la pensie), CASS 10% (contribuÈia la sÄnÄtate) Åi impozit pe venit 10% (calculat la baza impozabilÄ dupÄ deducerea CAS Åi CASS). Angajatorul plÄteÅte suplimentar CAM 2,25%." },
  ];
  const itemStyle = { borderTop: "1px solid rgba(0,43,127,0.05)", padding: "16px 0" };
  const questionStyle = { fontSize: 13, color: "#1a4faf", margin: "0 0 8px", fontFamily: "'Geist Mono', 'Courier New', monospace", fontWeight: 500 };
  const answerStyle = { margin: 0, fontSize: 12, color: "#64748B", lineHeight: 1.7, fontFamily: "'Geist Mono', 'Courier New', monospace" };
  return (
    <>
      <section id="faq-romania-tax-en" style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: "#64748B", marginBottom: 24, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
          FAQ â Calculate Tax in Romania
        </h2>
        {faqsEN.map((item, i) => (
          <div key={i} style={itemStyle}>
            <h3 style={questionStyle}>{item.q}</h3>
            <p style={answerStyle}>{item.a}</p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(0,43,127,0.05)", paddingTop: 8 }} />
      </section>
      <section id="faq-romania-tax-ro" style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: "#64748B", marginBottom: 24, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
          ÃntrebÄri Frecvente â Calculator Impozit RomÃ¢nia
        </h2>
        {faqsRO.map((item, i) => (
          <div key={i} style={itemStyle}>
            <h3 style={questionStyle}>{item.q}</h3>
            <p style={answerStyle}>{item.a}</p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(0,43,127,0.05)", paddingTop: 8 }} />
      </section>
    </>
  );
}

// âââ MAIN APP âââ
export default function App() {
  const [tab, setTab] = useState("salariu");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Geist+Mono:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    setTimeout(() => setLoaded(true), 100);
  }, []);
  const tabs = [
    { id: "salariu", label: "Salariu", icon: "ð°", desc: "Calculator Brut â Net" },
    { id: "pfa", label: "PFA", icon: "ð", desc: "Taxe & ContribuÈii" },
    { id: "credit", label: "Credit", icon: "ð ", desc: "Simulare Ipotecar" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "#F7F8FC", color: "#0D1117", fontFamily: "'Geist Mono', 'Courier New', monospace", opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
      <div style={{ position: "fixed", top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(0,43,127,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#002B7F", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Geist Mono', 'Courier New', monospace" }}>
            Financial Instruments Romania 2026
          </div>
          <h1 style={{ fontSize: "clamp(32px, 7vw, 52px)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, lineHeight: 1.05, margin: 0, color: "#0D1117" }}>
            Calculate Tax <span style={{ color: "#002B7F" }}>in Romania</span>
          </h1>
          <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 10, lineHeight: 1.5, maxWidth: 400, margin: "10px auto 0" }}>
            Free salary tax calculator, PFA taxes &amp; credit simulation for Romania â updated for the 2026 Fiscal Code
          </p>
        </div>
        {/* Tab Navigation */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${tabs.length}, 1fr)`, gap: 6, marginBottom: 32, background: "rgba(0,43,127,0.03)", borderRadius: 16, padding: 6, border: "1px solid rgba(0,43,127,0.05)" }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "14px 8px", border: "none", borderRadius: 12, cursor: "pointer",
              background: tab === t.id ? "rgba(0,43,127,0.08)" : "transparent",
              transition: "all 0.25s ease", display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            }}>
              <span style={{ fontSize: 20 }}>{t.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, fontFamily: "'Geist Mono', 'Courier New', monospace", color: tab === t.id ? "#1a4faf" : "#94A3B8" }}>{t.label}</span>
              <span style={{ fontSize: 10, fontFamily: "'Geist Mono', 'Courier New', monospace", color: tab === t.id ? "#002B7F" : "#CBD5E1" }}>{t.desc}</span>
            </button>
          ))}
        </div>
        {/* Calculator Panel */}
        <div style={{ background: "rgba(0,43,127,0.03)", border: "1px solid rgba(0,43,127,0.05)", borderRadius: 20, padding: "28px 24px" }}>
          {tab === "salariu" && <SalaryCalc />}
          {tab === "pfa" && <PFACalc />}
          {tab === "credit" && <MortgageCalc />}
        </div>
        {/* FAQ */}
        <FAQSection />
        {/* Footer */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#CBD5E1", fontFamily: "'Geist Mono', 'Courier New', monospace", lineHeight: 1.8 }}>
            <div>Calculele au caracter orientativ Â· Nu constituie consultanÈÄ fiscalÄ</div>
            <div>Actualizat conform Codului Fiscal 2026 Â· Salariu minim brut: {formatRON(TAX.SALARIU_MINIM_BRUT)} lei</div>
            <div style={{ marginTop: 8, color: "#EFF2F7" }}>CalculeazÄRapid.ro â built with â¥ for Romania</div>
          </div>
        </div>
      </div>
    </div>
  );
}
