import { useState, useEffect, useCallback } from "react";

// --- ADSENSE SIDEBAR ---
function SidebarAd() {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {}
  }, []);
  return (
    <div style={{
      position: "sticky", top: 60, width: 160, minHeight: 600,
      flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <ins className="adsbygoogle"
        style={{ display: "block", width: 160, height: 600 }}
        data-ad-client="ca-pub-1844899396773709"
        data-ad-slot="7970992614"
        data-ad-format="vertical"
      />
    </div>
  );
}

// --- CONSTANTS & TAX RULES 2026 ---
const TAX = {
  CAS: 0.25,
  CASS: 0.10,
  IMPOZIT: 0.10,
  CAM: 0.0225,
  SALARIU_MINIM_BRUT: 4050,
  DEDUCERE_PLAFON: 4300,
  DEDUCERE_PERSONALA_BASE: 300,
  DEDUCERE_PERSONALA_1: 400,
  DEDUCERE_PERSONALA_2: 800,
  DEDUCERE_PERSONALA_3: 1310,
  IT_EXEMPT_MIN: 10000,
  CASS_MIN_BASE_MONTHS: 6,
  CASS_MAX_BASE_MONTHS: 60,
};

// --- UTILITY FUNCTIONS ---
function formatRON(val) {
  return new Intl.NumberFormat("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
}

function getDeducere(brut, dependenti) {
  if (brut < TAX.SALARIU_MINIM_BRUT || brut > TAX.DEDUCERE_PLAFON) return 0;
  if (dependenti === 0) return TAX.DEDUCERE_PERSONALA_BASE;
  if (dependenti === 1) return TAX.DEDUCERE_PERSONALA_1;
  if (dependenti === 2) return TAX.DEDUCERE_PERSONALA_2;
  return TAX.DEDUCERE_PERSONALA_3;
}

function calcSalariuNet(brut, dependenti = 0, itExempt = false) {
  const cas = Math.round(brut * TAX.CAS);
  const cass = Math.round(brut * TAX.CASS);
  const deducere = getDeducere(brut, dependenti);
  const bazaImpozabila = Math.max(0, brut - cas - cass - deducere);
  const impozit = itExempt ? 0 : Math.round(bazaImpozabila * TAX.IMPOZIT);
  const cam = Math.round(brut * TAX.CAM);
  const net = brut - cas - cass - impozit;
  const costAngajator = brut + cam;
  return { brut, cas, cass, deducere, bazaImpozabila, impozit, net, cam, costAngajator, itExempt };
}

function calcBrutFromNet(targetNet, dependenti = 0, itExempt = false) {
  let lo = targetNet, hi = targetNet * 2;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    const r = calcSalariuNet(mid, dependenti, itExempt);
    if (Math.abs(r.net - targetNet) < 0.5) return Math.round(mid);
    if (r.net < targetNet) lo = mid; else hi = mid;
  }
  return Math.round((lo + hi) / 2);
}

function calcPFA(venitBrut, cheltuieli, tipImpozitare) {
  const venitNet = tipImpozitare === "real" ? venitBrut - cheltuieli : venitBrut;
  const impozit = Math.round(venitNet * TAX.IMPOZIT);
  const casBase = TAX.SALARIU_MINIM_BRUT * 24;
  const cas = venitNet >= TAX.SALARIU_MINIM_BRUT * 12 ? Math.round(casBase * TAX.CAS) : 0;
  const cassBaseMonths = Math.min(Math.max(venitNet / TAX.SALARIU_MINIM_BRUT, TAX.CASS_MIN_BASE_MONTHS), TAX.CASS_MAX_BASE_MONTHS);
  const cass = Math.round(TAX.SALARIU_MINIM_BRUT * cassBaseMonths * TAX.CASS);
  const totalTaxe = impozit + cas + cass;
  const venitDupaImpozitare = venitNet - totalTaxe;
  return { venitBrut, cheltuieli, venitNet, impozit, cas, cass, totalTaxe, venitDupaImpozitare, tipImpozitare, cassBaseMonths: Math.round(cassBaseMonths * 10) / 10 };
}

function calcMortgage(suma, dobanda, ani) {
  const r = dobanda / 100 / 12;
  const n = ani * 12;
  if (r === 0) return { rataLunara: suma / n, totalPlatit: suma, totalDobanda: 0, n, schedule: [] };
  const rataLunara = (suma * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPlatit = rataLunara * n;
  // Build yearly amortization schedule
  let balance = suma;
  const schedule = [];
  for (let year = 1; year <= ani; year++) {
    let principalYear = 0, interestYear = 0;
    for (let m = 0; m < 12; m++) {
      const interest = balance * r;
      const principal = rataLunara - interest;
      interestYear += interest;
      principalYear += principal;
      balance = Math.max(0, balance - principal);
    }
    schedule.push({ year, principal: principalYear, interest: interestYear, balance: Math.max(0, balance) });
  }
  return { rataLunara, totalPlatit, totalDobanda: totalPlatit - suma, n, schedule };
}

// --- URL STATE ---
function useURLState(key, defaultVal) {
  const getFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) ?? defaultVal;
  };
  const [val, setVal] = useState(getFromURL);
  const updateVal = useCallback((newVal) => {
    setVal(newVal);
    const params = new URLSearchParams(window.location.search);
    params.set(key, newVal);
    window.history.replaceState(null, "", "?" + params.toString());
  }, [key]);
  return [val, updateVal];
}
// --- SHARE BUTTON ---
function ShareButton({ text, url = "https://calculeazarapid.ro" }) {
  const [copied, setCopied] = useState(false);
  const shareData = { title: "CalculeazaRapid — Instrumente Financiare Romania", text: text || "Calculeaza impozitul pe salariu, taxe PFA si credit ipotecar in Romania — gratuit!", url };
  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (e) {}
    } else {
      try {
        await navigator.clipboard.writeText(url + " — " + shareData.text);
        setCopied(true); setTimeout(() => setCopied(false), 2000);
      } catch (e) {}
    }
  };
  const waUrl = "https://wa.me/?text=" + encodeURIComponent(shareData.text + " " + url);
  const btn = { display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", borderRadius: 10, fontSize: 12, fontFamily: "'Geist Mono','Courier New',monospace", cursor: "pointer", fontWeight: 600, letterSpacing: 0.5, transition: "all 0.2s" };
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 20, alignItems: "center" }}>
      <button onClick={handleShare} aria-label="Share result" style={{ ...btn, background: "rgba(0,43,127,0.08)", border: "1px solid rgba(0,43,127,0.2)", color: "#1a4faf" }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(0,43,127,0.14)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(0,43,127,0.08)"}>
        <span style={{ fontSize: 15 }}>{copied ? "✓" : "🔗"}</span>
        {copied ? "LINK COPIAT!" : (navigator.share ? "SHARE" : "COPIAZA LINK")}
      </button>
      <a href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" style={{ ...btn, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", color: "#25d366", textDecoration: "none" }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(37,211,102,0.2)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(37,211,102,0.1)"}>
        <span style={{ fontSize: 15 }}>💬</span> WHATSAPP
      </a>
    </div>
  );
}

// --- SHARED COMPONENTS ---
function BarChart({ items, maxVal }) {
  const mx = maxVal || Math.max(...items.map(i => i.value), 1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 120, fontSize: 12, color: "#64748B", textAlign: "right", flexShrink: 0, fontFamily: "'Geist Mono','Courier New',monospace" }}>{item.label}</span>
          <div style={{ flex: 1, height: 28, background: "rgba(0,43,127,0.04)", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ width: `${Math.max((item.value / mx) * 100, 2)}%`, height: "100%", background: item.color || "linear-gradient(90deg,#002B7F,#1a4faf)", borderRadius: 6, transition: "width 0.6s cubic-bezier(.22,1,.36,1)", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8 }}>
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, fontFamily: "'Geist Mono','Courier New',monospace", whiteSpace: "nowrap" }}>{formatRON(item.value)} lei</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Stat({ label, value, accent, sub }) {
  return (
    <div style={{ textAlign: "center", padding: "16px 6px", minWidth: 0, overflow: "hidden" }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#64748B", marginBottom: 6, fontFamily: "'Geist Mono','Courier New',monospace" }}>{label}</div>
      <div style={{ fontSize: "clamp(16px,4.5vw,28px)", fontWeight: 700, color: accent || "#0D1117", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1.1, minWidth: 0, wordBreak: "break-all" }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4, fontFamily: "'Geist Mono','Courier New',monospace" }}>{sub}</div>}
    </div>
  );
}

function Input({ label, value, onChange, suffix, type = "number", step, min = "0", max, id }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#64748B", marginBottom: 6, fontFamily: "'Geist Mono','Courier New',monospace" }}>{label}</label>
      <div style={{ display: "flex", alignItems: "center", background: "rgba(0,43,127,0.04)", border: "1px solid rgba(0,43,127,0.08)", borderRadius: 10, overflow: "hidden" }}>
        <input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} step={step} min={min} max={max}
          style={{ flex: 1, padding: "12px 14px", background: "transparent", border: "none", color: "#0D1117", fontSize: 16, fontFamily: "'Geist Mono','Courier New',monospace", outline: "none", width: "100%" }} />
        {suffix && <span style={{ padding: "0 14px", color: "#94A3B8", fontSize: 13, fontFamily: "'Geist Mono','Courier New',monospace", whiteSpace: "nowrap" }}>{suffix}</span>}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange, id }) {
  return (
    <label htmlFor={id} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 12 }}>
      <div id={id} role="switch" aria-checked={checked} onClick={() => onChange(!checked)} onKeyDown={e => e.key === ' ' && onChange(!checked)} tabIndex={0}
        style={{ width: 40, height: 22, borderRadius: 11, background: checked ? "#002B7F" : "rgba(0,43,127,0.06)", position: "relative", transition: "background 0.2s", cursor: "pointer" }}>
        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: checked ? 21 : 3, transition: "left 0.2s" }} />
      </div>
      <span style={{ fontSize: 13, color: "#475569", fontFamily: "'Geist Mono','Courier New',monospace" }}>{label}</span>
    </label>
  );
}

function Selector({ options, value, onChange, label }) {
  return (
    <div role="group" aria-label={label} style={{ display: "flex", gap: 4, marginBottom: 16, background: "rgba(0,43,127,0.04)", borderRadius: 10, padding: 3 }}>
      {options.map(opt => (
        <button key={opt.value} onClick={() => onChange(opt.value)} aria-pressed={value === opt.value}
          style={{ flex: 1, padding: "10px 8px", border: "none", borderRadius: 8, cursor: "pointer", background: value === opt.value ? "rgba(0,43,127,0.1)" : "transparent", color: value === opt.value ? "#1a4faf" : "#64748B", fontSize: 12, fontWeight: 600, fontFamily: "'Geist Mono','Courier New',monospace", transition: "all 0.2s", letterSpacing: 0.5 }}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}
// --- SALARY CALCULATOR ---
function SalaryCalc() {
  const [mode, setMode] = useURLState("smod", "brut");
  const [amount, setAmount] = useURLState("s", "5000");
  const [itExempt, setItExempt] = useState(() => new URLSearchParams(window.location.search).get("it") === "1");
  const [dependenti, setDependenti] = useURLState("dep", "0");

  const updateIt = (v) => {
    setItExempt(v);
    const params = new URLSearchParams(window.location.search);
    params.set("it", v ? "1" : "0");
    window.history.replaceState(null, "", "?" + params.toString());
  };

  const dep = parseInt(dependenti) || 0;
  const brut = mode === "brut" ? parseFloat(amount) || 0 : calcBrutFromNet(parseFloat(amount) || 0, dep, itExempt);
  const r = calcSalariuNet(brut, dep, itExempt);
  const shareText = `Salariul meu net in Romania: ${formatRON(r.net)} lei/luna (din ${formatRON(r.brut)} lei brut). Calculeaza-ti salariul la:`;

  return (
    <div>
      <Selector label="Mod calcul salariu" options={[{ label: "BRUT → NET", value: "brut" }, { label: "NET → BRUT", value: "net" }]} value={mode} onChange={setMode} />
      <Input id="sal-amount" label={mode === "brut" ? "Salariu Brut" : "Salariu Net Dorit"} value={amount} onChange={setAmount} suffix="LEI / luna" min="0" />
      <Toggle id="it-toggle" label="Scutit impozit IT (>10.000 lei brut)" checked={itExempt} onChange={updateIt} />
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#64748B", marginBottom: 6, fontFamily: "'Geist Mono','Courier New',monospace" }}>Persoane in intretinere</label>
        <Selector label="Persoane in intretinere" options={[{ label: "0", value: "0" }, { label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3+", value: "3" }]} value={dependenti} onChange={setDependenti} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 4, background: "rgba(0,43,127,0.03)", borderRadius: 14, padding: "8px 0", marginBottom: 20, border: "1px solid rgba(0,43,127,0.05)" }}>
        <Stat label="Salariu Net" value={formatRON(r.net)} accent="#059669" sub="in mana / luna" />
        <Stat label="Salariu Brut" value={formatRON(r.brut)} accent="#1a4faf" sub="brut / luna" />
        <Stat label="Cost Angajator" value={formatRON(r.costAngajator)} accent="#D4A017" sub="total firma" />
      </div>
      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: "#94A3B8", marginBottom: 12, fontFamily: "'Geist Mono','Courier New',monospace" }}>Detalii Contributii</div>
      <BarChart items={[
        { label: "CAS (25%)", value: r.cas, color: "linear-gradient(90deg,#CE1126,#e8394d)" },
        { label: "CASS (10%)", value: r.cass, color: "linear-gradient(90deg,#D4A017,#FCD116)" },
        { label: "Impozit (10%)", value: r.impozit, color: "linear-gradient(90deg,#002B7F,#1a4faf)" },
        { label: "CAM (2.25%)", value: r.cam, color: "linear-gradient(90deg,#1a4faf,#4070d0)" },
        { label: "Net", value: r.net, color: "linear-gradient(90deg,#059669,#10b981)" },
      ]} maxVal={r.costAngajator} />
      {r.deducere > 0 && (
        <div style={{ marginTop: 14, padding: "10px 14px", background: "rgba(5,150,105,0.08)", borderRadius: 10, border: "1px solid rgba(5,150,105,0.15)" }}>
          <span style={{ fontSize: 12, color: "#059669", fontFamily: "'Geist Mono','Courier New',monospace" }}>✓ Deducere personala aplicata: {formatRON(r.deducere)} lei ({dep === 0 ? "fara persoane in intretinere" : dep >= 3 ? "3+ persoane" : dep + " persoana"})</span>
        </div>
      )}
      <ShareButton text={shareText} />
    </div>
  );
}
// --- PFA CALCULATOR ---
function PFACalc() {
  const [tip, setTip] = useURLState("pmod", "real");
  const [venit, setVenit] = useURLState("pv", "120000");
  const [cheltuieli, setCheltuieli] = useURLState("pc", "30000");

  const r = calcPFA(parseFloat(venit) || 0, tip === "real" ? parseFloat(cheltuieli) || 0 : 0, tip);
  const shareText = `Venitul meu net ca PFA in Romania: ${formatRON(r.venitDupaImpozitare)} lei/an (${formatRON(r.venitDupaImpozitare / 12)} lei/luna). Calculeaza-ti taxele PFA la:`;

  return (
    <div>
      <Selector label="Sistem impozitare PFA" options={[{ label: "SISTEM REAL", value: "real" }, { label: "NORMA VENIT", value: "norma" }]} value={tip} onChange={setTip} />
      <Input id="pfa-venit" label="Venit Brut Anual" value={venit} onChange={setVenit} suffix="LEI / an" min="0" />
      {tip === "real" && <Input id="pfa-chelt" label="Cheltuieli Deductibile" value={cheltuieli} onChange={setCheltuieli} suffix="LEI / an" min="0" />}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 4, background: "rgba(0,43,127,0.03)", borderRadius: 14, padding: "8px 0", marginBottom: 20, border: "1px solid rgba(0,43,127,0.05)" }}>
        <Stat label="Venit Net Anual" value={formatRON(r.venitDupaImpozitare)} accent="#059669" sub={`~${formatRON(r.venitDupaImpozitare / 12)} lei/luna`} />
        <Stat label="Total Taxe" value={formatRON(r.totalTaxe)} accent="#CE1126" sub={`${((r.totalTaxe / (r.venitNet || 1)) * 100).toFixed(1)}% rata efectiva`} />
      </div>
      <BarChart items={[
        { label: "Impozit (10%)", value: r.impozit, color: "linear-gradient(90deg,#002B7F,#1a4faf)" },
        { label: "CAS (25%)", value: r.cas, color: "linear-gradient(90deg,#CE1126,#e8394d)" },
        { label: "CASS (10%)", value: r.cass, color: "linear-gradient(90deg,#D4A017,#FCD116)" },
      ]} />
      <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(0,43,127,0.03)", borderRadius: 10, border: "1px solid rgba(0,43,127,0.05)" }}>
        <div style={{ fontSize: 11, color: "#64748B", fontFamily: "'Geist Mono','Courier New',monospace", lineHeight: 1.8 }}>
          <div>Venit brut: <span style={{ color: "#475569" }}>{formatRON(r.venitBrut)} lei</span></div>
          {tip === "real" && <div>Cheltuieli: <span style={{ color: "#475569" }}>-{formatRON(r.cheltuieli)} lei</span></div>}
          <div>Venit net impozabil: <span style={{ color: "#0D1117" }}>{formatRON(r.venitNet)} lei</span></div>
          <div style={{ borderTop: "1px solid rgba(0,43,127,0.05)", marginTop: 6, paddingTop: 6 }}>CAS: baza = 24 x salariu minim = {formatRON(TAX.SALARIU_MINIM_BRUT * 24)} lei/an</div>
          <div>CASS: baza = {r.cassBaseMonths}x salariu minim = {formatRON(TAX.SALARIU_MINIM_BRUT * r.cassBaseMonths)} lei/an <span style={{ color: "#94A3B8" }}>(plafon: 6-60x)</span></div>
        </div>
      </div>
      <ShareButton text={shareText} />
    </div>
  );
}
// --- MORTGAGE CALCULATOR ---
function MortgageCalc() {
  const [suma, setSuma] = useURLState("cs", "300000");
  const [pretTotal, setPretTotal] = useURLState("ct", "");
  const [avans, setAvans] = useURLState("ca", "15");
  const [dobanda, setDobanda] = useURLState("cd", "7.5");
  const [ani, setAni] = useURLState("can", "25");
  const [showTable, setShowTable] = useState(false);
  const [useAvans, setUseAvans] = useState(pretTotal !== "");

  const computedSuma = useAvans && pretTotal
    ? Math.round(parseFloat(pretTotal) * (1 - parseFloat(avans) / 100)) || 0
    : parseFloat(suma) || 0;

  const r = calcMortgage(computedSuma, parseFloat(dobanda) || 0, parseFloat(ani) || 1);
  const principalPct = (computedSuma / (r.totalPlatit || 1)) * 100;
  const shareText = `Simulare credit ipotecar Romania: ${formatRON(computedSuma)} lei, ${dobanda}%, ${ani} ani → rata lunara ${formatRON(r.rataLunara)} lei. Calculeaza la:`;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setUseAvans(false)} aria-pressed={!useAvans}
          style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, cursor: "pointer", background: !useAvans ? "rgba(0,43,127,0.1)" : "rgba(0,43,127,0.04)", color: !useAvans ? "#1a4faf" : "#64748B", fontSize: 11, fontWeight: 600, fontFamily: "'Geist Mono','Courier New',monospace" }}>
          SUMA CREDIT
        </button>
        <button onClick={() => setUseAvans(true)} aria-pressed={useAvans}
          style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, cursor: "pointer", background: useAvans ? "rgba(0,43,127,0.1)" : "rgba(0,43,127,0.04)", color: useAvans ? "#1a4faf" : "#64748B", fontSize: 11, fontWeight: 600, fontFamily: "'Geist Mono','Courier New',monospace" }}>
          PRET + AVANS
        </button>
      </div>
      {useAvans ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Input id="cr-pret" label="Pret Proprietate" value={pretTotal} onChange={setPretTotal} suffix="LEI" min="0" />
          <Input id="cr-avans" label="Avans" value={avans} onChange={setAvans} suffix="%" min="0" max="100" step="0.5" />
        </div>
      ) : (
        <Input id="cr-suma" label="Suma Credit" value={suma} onChange={setSuma} suffix="LEI" min="0" />
      )}
      {useAvans && pretTotal && (
        <div style={{ marginBottom: 12, padding: "8px 14px", background: "rgba(0,43,127,0.04)", borderRadius: 8, fontSize: 12, color: "#64748B", fontFamily: "'Geist Mono','Courier New',monospace" }}>
          Credit necesar: <strong style={{ color: "#1a4faf" }}>{formatRON(computedSuma)} lei</strong>
          {" "}(avans: {formatRON(parseFloat(pretTotal) * parseFloat(avans) / 100)} lei)
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Input id="cr-dobanda" label="Dobanda Anuala" value={dobanda} onChange={setDobanda} suffix="%" step="0.1" min="0" max="50" />
        <Input id="cr-ani" label="Perioada" value={ani} onChange={setAni} suffix="ANI" min="1" max="35" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 4, background: "rgba(0,43,127,0.03)", borderRadius: 14, padding: "8px 0", marginBottom: 20, border: "1px solid rgba(0,43,127,0.05)" }}>
        <Stat label="Rata Lunara" value={formatRON(r.rataLunara)} accent="#1a4faf" sub="lei / luna" />
        <Stat label="Total Platit" value={formatRON(r.totalPlatit)} accent="#D4A017" sub={`in ${ani} ani`} />
        <Stat label="Total Dobanda" value={formatRON(r.totalDobanda)} accent="#CE1126" sub={`${((r.totalDobanda / (r.totalPlatit || 1)) * 100).toFixed(0)}% din total`} />
      </div>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#94A3B8", marginBottom: 8, fontFamily: "'Geist Mono','Courier New',monospace" }}>Principal vs Dobanda</div>
      <div style={{ height: 36, borderRadius: 10, overflow: "hidden", display: "flex", marginBottom: 8 }}>
        <div style={{ width: `${principalPct}%`, background: "linear-gradient(90deg,#002B7F,#1a4faf)", display: "flex", alignItems: "center", justifyContent: "center", transition: "width 0.5s" }}>
          <span style={{ fontSize: 11, color: "#fff", fontWeight: 700, fontFamily: "'Geist Mono','Courier New',monospace" }}>{principalPct.toFixed(0)}%</span>
        </div>
        <div style={{ flex: 1, background: "linear-gradient(90deg,#CE1126,#e8394d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 11, color: "#fff", fontWeight: 700, fontFamily: "'Geist Mono','Courier New',monospace" }}>{(100 - principalPct).toFixed(0)}%</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "'Geist Mono','Courier New',monospace" }}>
        <span style={{ color: "#1a4faf" }}>● Principal: {formatRON(computedSuma)} lei</span>
        <span style={{ color: "#e8394d" }}>● Dobanda: {formatRON(r.totalDobanda)} lei</span>
      </div>
      <div style={{ marginTop: 20, padding: "12px 14px", background: "rgba(0,43,127,0.03)", borderRadius: 10, border: "1px solid rgba(0,43,127,0.05)" }}>
        <div style={{ fontSize: 11, color: "#64748B", fontFamily: "'Geist Mono','Courier New',monospace", lineHeight: 1.8 }}>
          <div>Nr. rate: <span style={{ color: "#475569" }}>{r.n} luni ({ani} ani)</span></div>
          <div>Rata lunara: <span style={{ color: "#475569" }}>{formatRON(r.rataLunara)} lei</span></div>
          <div>Total rambursat: <span style={{ color: "#0D1117" }}>{formatRON(r.totalPlatit)} lei</span></div>
        </div>
      </div>
      <button onClick={() => setShowTable(!showTable)} aria-expanded={showTable}
        style={{ marginTop: 16, width: "100%", padding: "10px", border: "1px solid rgba(0,43,127,0.1)", borderRadius: 10, background: "rgba(0,43,127,0.03)", color: "#1a4faf", fontSize: 12, fontFamily: "'Geist Mono','Courier New',monospace", cursor: "pointer", fontWeight: 600 }}>
        {showTable ? "▲ ASCUNDE GRAFIC AMORTIZARE" : "▼ ARATA GRAFIC AMORTIZARE AN CU AN"}
      </button>
      {showTable && (
        <div style={{ marginTop: 12, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, fontFamily: "'Geist Mono','Courier New',monospace" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,43,127,0.1)" }}>
                {["An", "Principal/an", "Dobanda/an", "Sold ramas"].map(h => (
                  <th key={h} style={{ padding: "8px 6px", textAlign: "right", color: "#64748B", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {r.schedule.map(row => (
                <tr key={row.year} style={{ borderBottom: "1px solid rgba(0,43,127,0.04)" }}>
                  <td style={{ padding: "6px", textAlign: "right", color: "#94A3B8" }}>An {row.year}</td>
                  <td style={{ padding: "6px", textAlign: "right", color: "#1a4faf" }}>{formatRON(row.principal)}</td>
                  <td style={{ padding: "6px", textAlign: "right", color: "#CE1126" }}>{formatRON(row.interest)}</td>
                  <td style={{ padding: "6px", textAlign: "right", color: "#0D1117" }}>{formatRON(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ShareButton text={shareText} />
    </div>
  );
}
// --- FAQ SECTION ---
function FAQSection() {
  const faqsEN = [
    { q: "How do I calculate income tax in Romania?", a: "In Romania, income tax (impozit pe venit) is 10% of the taxable gross salary, after deducting CAS (25%) and CASS (10%) social contributions. Use the salary calculator above to instantly compute your net salary from any gross amount, based on the 2026 Romanian Fiscal Code." },
    { q: "What is the income tax rate in Romania in 2026?", a: "Romania applies a flat income tax rate of 10% on salaries and most personal income. Employees also pay CAS 25% (pension) and CASS 10% (health). Employers pay CAM (2.25%). IT professionals earning over 10,000 lei gross are exempt from income tax." },
    { q: "How do I calculate PFA taxes in Romania?", a: "PFA (Persoana Fizica Autorizata) taxes in Romania include a 10% income tax, CAS 25% (calculated on 24x the minimum wage annually), and CASS 10% (calculated on 6–60x minimum wage depending on income). Switch to the PFA tab above for a full 2026 breakdown." },
    { q: "What is the minimum gross salary in Romania in 2026?", a: "The minimum gross salary in Romania in 2026 is 4,050 lei per month, which corresponds to a net take-home pay of approximately 2,363 lei per month." },
    { q: "How much net salary will I get from a 5,000 lei gross salary in Romania?", a: "For a gross salary of 5,000 lei (2026), the net take-home salary is approximately 2,925 lei/month after CAS (1,250 lei), CASS (500 lei), and income tax (325 lei). Enter any amount in the calculator above for instant results." },
  ];
  const faqsRO = [
    { q: "Cum calculez impozitul pe salariu in Romania?", a: "Impozitul pe venit in Romania este de 10% aplicat la baza impozabila, dupa deducerea CAS (25%) si CASS (10%). Folositi calculatorul de mai sus pentru a afla salariul net din brut in cateva secunde, actualizat conform Codului Fiscal 2026." },
    { q: "Care este cota de impozit pe venit in Romania in 2026?", a: "Romania aplica o cota unica de impozit pe venit de 10% pentru salarii si majoritatea veniturilor persoanelor fizice. Angajatii platesc si CAS 25% (pensie) si CASS 10% (sanatate). Angajatorul plateste CAM (2,25%). Angajatii IT cu salariu brut peste 10.000 lei sunt scutiti de impozit." },
    { q: "Cum calculez taxele pentru PFA in Romania?", a: "Taxele PFA in Romania includ impozit pe venit 10%, CAS 25% (calculat la 24x salariul minim brut anual) si CASS 10% (calculat la minimum 6x salariul minim, maxim 60x). Accesati tab-ul PFA de mai sus pentru un calcul complet pentru 2026." },
    { q: "Care este salariul minim brut in Romania in 2026?", a: "Salariul minim brut pe economie in Romania in 2026 este de 4.050 lei pe luna, ceea ce corespunde unui salariu net de aproximativ 2.363 lei pe luna." },
    { q: "Cat salariu net primesc din 5.000 lei brut in Romania?", a: "Pentru un salariu brut de 5.000 lei (2026), salariul net este de aproximativ 2.925 lei/luna dupa deducerea CAS (1.250 lei), CASS (500 lei) si impozit (325 lei). Introduceti orice suma in calculator pentru rezultate instant." },
    { q: "Ce contributii plateste angajatul in Romania?", a: "Angajatul din Romania plateste trei contributii: CAS 25% (contributia la pensie), CASS 10% (contributia la sanatate) si impozit pe venit 10% (calculat la baza impozabila dupa deducerea CAS si CASS). Angajatorul plateste suplimentar CAM 2,25%." },
    { q: "Cum se calculeaza deducerea personala in Romania 2026?", a: "Deducerea personala se aplica pentru salarii brute intre 4.050 si 4.300 lei pe luna. Valoarea este 300 lei fara persoane in intretinere, 400 lei pentru 1 persoana, 800 lei pentru 2, si 1.310 lei pentru 3 sau mai multe persoane in intretinere." },
  ];
  const itemStyle = { borderTop: "1px solid rgba(0,43,127,0.05)", padding: "16px 0" };
  const questionStyle = { fontSize: 13, color: "#1a4faf", margin: "0 0 8px", fontFamily: "'Geist Mono','Courier New',monospace", fontWeight: 500 };
  const answerStyle = { margin: 0, fontSize: 12, color: "#64748B", lineHeight: 1.7, fontFamily: "'Geist Mono','Courier New',monospace" };
  return (
    <>
      <section id="faq-romania-tax-en" aria-label="FAQ in English" style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: "#64748B", marginBottom: 24, fontFamily: "'Geist Mono','Courier New',monospace" }}>FAQ — Calculate Tax in Romania</h2>
        {faqsEN.map((item, i) => (<div key={i} style={itemStyle}><h3 style={questionStyle}>{item.q}</h3><p style={answerStyle}>{item.a}</p></div>))}
        <div style={{ borderTop: "1px solid rgba(0,43,127,0.05)", paddingTop: 8 }} />
      </section>
      <section id="faq-romania-tax-ro" aria-label="Intrebari frecvente in romana" style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: "#64748B", marginBottom: 24, fontFamily: "'Geist Mono','Courier New',monospace" }}>Intrebari Frecvente — Calculator Impozit Romania</h2>
        {faqsRO.map((item, i) => (<div key={i} style={itemStyle}><h3 style={questionStyle}>{item.q}</h3><p style={answerStyle}>{item.a}</p></div>))}
        <div style={{ borderTop: "1px solid rgba(0,43,127,0.05)", paddingTop: 8 }} />
      </section>
    </>
  );
}
// --- DARK MODE TOGGLE ---
function DarkModeToggle({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Mod luminos" : "Mod inchis"}
      style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000, width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(0,43,127,0.15)", background: dark ? "#1e293b" : "#fff", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.1)", transition: "all 0.2s" }}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

// --- MAIN APP ---
export default function App() {
  const [tab, setTab] = useURLState("tab", "salariu");
  const [dark, setDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);

  const bg = dark ? "#0f172a" : "#F7F8FC";
  const cardBg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,43,127,0.03)";
  const cardBorder = dark ? "rgba(255,255,255,0.08)" : "rgba(0,43,127,0.05)";
  const textMain = dark ? "#e2e8f0" : "#0D1117";
  const textSub = dark ? "#94a3b8" : "#64748B";

  const tabs = [
    { id: "salariu", label: "Salariu", icon: "💰", desc: "Calculator Brut ↔ Net" },
    { id: "pfa", label: "PFA", icon: "📋", desc: "Taxe & Contributii" },
    { id: "credit", label: "Credit", icon: "🏠", desc: "Simulare Ipotecar" },
  ];

  // Inject dynamic dark mode CSS vars
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", bg);
    document.documentElement.style.setProperty("--card-bg", cardBg);
    document.documentElement.style.setProperty("--text-main", textMain);
    document.documentElement.style.setProperty("--text-sub", textSub);
  }, [dark]);

  return (
    <div style={{ minHeight: "100vh", background: bg, color: textMain, fontFamily: "'Geist Mono','Courier New',monospace", transition: "background 0.3s, color 0.3s" }}>
      {/* Romanian flag stripe */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 5, display: "flex", zIndex: 9999, pointerEvents: "none" }}>
        <div style={{ flex: 1, background: "#002B7F" }} />
        <div style={{ flex: 1, background: "#FCD116" }} />
        <div style={{ flex: 1, background: "#CE1126" }} />
      </div>
      <div style={{ position: "fixed", top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle,rgba(0,43,127,0.04) 0%,transparent 70%)", pointerEvents: "none" }} />

      {/* Outer wrapper */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 24, padding: "40px 20px 60px", maxWidth: 1100, margin: "0 auto" }}>
        {/* LEFT SIDEBAR AD */}
        <div style={{ display: "none", flexShrink: 0 }} className="sidebar-ad-left">
          <SidebarAd />
        </div>

        {/* MAIN CONTENT */}
        <main style={{ width: "100%", maxWidth: 640 }}>
          {/* Header */}
          <header style={{ marginBottom: 40, textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#002B7F", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Geist Mono','Courier New',monospace" }}>Financial Instruments Romania 2026</div>
            <h1 style={{ fontSize: "clamp(32px,7vw,52px)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, lineHeight: 1.05, margin: 0, color: textMain }}>
              Calculate Tax <span style={{ color: "#002B7F" }}>in Romania</span>{" "}
              <span title="Romania" aria-label="Romanian flag" style={{ display: "inline-flex", gap: 0, borderRadius: 3, overflow: "hidden", verticalAlign: "middle", marginLeft: 4, boxShadow: "0 1px 6px rgba(0,0,0,0.2)", height: "0.6em", width: "0.9em" }}>
                <span style={{ flex: 1, background: "#002B7F" }} />
                <span style={{ flex: 1, background: "#FCD116" }} />
                <span style={{ flex: 1, background: "#CE1126" }} />
              </span>
            </h1>
            <p style={{ fontSize: 13, color: textSub, marginTop: 10, lineHeight: 1.5, maxWidth: 400, margin: "10px auto 0" }}>
              Free salary tax calculator, PFA taxes &amp; credit simulation for Romania — updated for the 2026 Fiscal Code
            </p>
          </header>

          {/* Tab Navigation */}
          <nav aria-label="Calculator tabs" style={{ display: "grid", gridTemplateColumns: `repeat(${tabs.length},1fr)`, gap: 6, marginBottom: 32, background: cardBg, borderRadius: 16, padding: 6, border: `1px solid ${cardBorder}` }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} aria-selected={tab === t.id} role="tab"
                style={{ padding: "14px 8px", border: "none", borderRadius: 12, cursor: "pointer", background: tab === t.id ? "rgba(0,43,127,0.08)" : "transparent", transition: "all 0.25s ease", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 20 }} aria-hidden="true">{t.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, fontFamily: "'Geist Mono','Courier New',monospace", color: tab === t.id ? "#1a4faf" : textSub }}>{t.label}</span>
                <span style={{ fontSize: 10, fontFamily: "'Geist Mono','Courier New',monospace", color: tab === t.id ? "#002B7F" : "#CBD5E1" }}>{t.desc}</span>
              </button>
            ))}
          </nav>

          {/* Calculator Panel */}
          <div role="tabpanel" aria-label={`Calculator ${tab}`} style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 20, padding: "28px 24px" }}>
            {tab === "salariu" && <SalaryCalc />}
            {tab === "pfa" && <PFACalc />}
            {tab === "credit" && <MortgageCalc />}
          </div>

          {/* FAQ */}
          <FAQSection />

          {/* Footer */}
          <footer style={{ marginTop: 32, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: "#CBD5E1", fontFamily: "'Geist Mono','Courier New',monospace", lineHeight: 1.8 }}>
              <div>Calculele au caracter orientativ · Nu constituie consultanta fiscala</div>
              <div>Actualizat conform Codului Fiscal 2026 · Salariu minim brut: {formatRON(TAX.SALARIU_MINIM_BRUT)} lei</div>
              <div style={{ marginTop: 8, color: "#EFF2F7" }}>CalculeazaRapid.ro — built with ♥ for Romania</div>
            </div>
          </footer>
        </main>
      </div>

      {/* Dark mode toggle */}
      <DarkModeToggle dark={dark} setDark={setDark} />

      {/* Responsive CSS for sidebar ad */}
      <style>{`
        @media (min-width: 900px) { .sidebar-ad-left { display: flex !important; } }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { opacity: 0.5; }
        *:focus-visible { outline: 2px solid #002B7F; outline-offset: 2px; border-radius: 4px; }
      `}</style>
    </div>
  );
}
