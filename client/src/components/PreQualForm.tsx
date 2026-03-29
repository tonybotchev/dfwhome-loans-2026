/**
 * DESIGN: Kinetic Texas — Luxury Noir multi-step pre-qualification wizard
 * 5 steps: Loan Type → Property & Price → Finances → Timeline → Contact
 * All fields map directly to GHL custom fields for location 4mO3eTmt4MzqY4CfnMGW
 * On submit: creates GHL contact, adds to Mortgage Pipeline "New Lead",
 *            applies HOT/WARM/COLD tag, triggers NOVA follow-up
 */
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Home, DollarSign, CreditCard, Calendar, User } from "lucide-react";
import NMLSDisclosure from "./NMLSDisclosure";

const GHL_API_KEY = "pit-b53e36a0-81dc-4311-80e1-2e409b8715d2";
const GHL_LOCATION_ID = "4mO3eTmt4MzqY4CfnMGW";
const PIPELINE_ID = "LDVnhpPD75zLj8I1Rfzs";
const STAGE_NEW_LEAD = "de32f2b3-e94c-4956-8ef0-6a46f62ada3d";
const STAGE_PREQUAL = "cae260c7-ccc6-47cc-a6e5-8bcc9f7a7cc9";

// GHL Custom Field IDs
const CF = {
  loanType: "4j2o73jUu00rIrR95mwh",
  propertyType: "PleATadF1mdSY6tEWhAm",
  purchasePrice: "I6XAmJf9wzQHtemGiQQ5",
  downPayment: "aY6ZHiAxJck1nyywbkVZ",
  creditScore: "B5VYu7zxYa69UScFPdRP",
  creditScoreText: "HUk7yVEdXSMD7V5Y5EKP",
  annualIncome: "9lVvOGHAGmIHueJwdqBT",
  monthlyDebts: "Zb8ps6F4TjmpTOarM9jw",
  firstTimeBuyer: "pbfDtJWzoUK2ctxFdI1V",
  hasRealtor: "AWMO6QL5hJuWFA1YYJie",
  timeline: "MJgL2zuaeJeHXfYDRBMo",
  purchaseTimeline: "xKs581iRSjxW9FpFRH7K",
  leadSource: "GPqqpLvQBv2cxr0SM31k",
  leadScore: "4ch4JForczgQs6fAvSaM",
  leadTemperature: "29sOCVVX7J9gHzMSwexh",
  smsConsent: "07qG13d3oMG2TLGnfL5V",
};

const steps = [
  { id: 1, label: "Loan Type", icon: Home },
  { id: 2, label: "Property", icon: DollarSign },
  { id: 3, label: "Finances", icon: CreditCard },
  { id: 4, label: "Timeline", icon: Calendar },
  { id: 5, label: "Contact", icon: User },
];

const inputStyle = {
  background: "oklch(0.18 0.04 155)",
  border: "1px solid oklch(0.975 0.008 85 / 0.15)",
  color: "oklch(0.975 0.008 85)",
  borderRadius: 0,
  padding: "0.875rem 1rem",
  width: "100%",
  fontFamily: "Outfit, sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  fontFamily: "Outfit, sans-serif",
  fontSize: "0.7rem",
  textTransform: "uppercase" as const,
  letterSpacing: "0.2em",
  color: "oklch(0.78 0.02 85)",
  display: "block",
  marginBottom: "0.5rem",
};

type OptionCardProps = {
  value: string;
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
};

function OptionCard({ value, label, sublabel, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left w-full transition-all duration-200"
      style={{
        background: selected ? "oklch(0.62 0.16 42 / 0.15)" : "oklch(0.18 0.04 155)",
        border: `2px solid ${selected ? "oklch(0.62 0.16 42)" : "oklch(0.975 0.008 85 / 0.12)"}`,
        padding: "1rem 1.25rem",
        cursor: "pointer",
        borderRadius: 0,
      }}
    >
      <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, color: selected ? "oklch(0.62 0.16 42)" : "oklch(0.975 0.008 85)", fontSize: "0.9rem" }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ fontFamily: "Outfit, sans-serif", fontSize: "0.75rem", color: "oklch(0.65 0.02 85)", marginTop: "0.25rem" }}>
          {sublabel}
        </div>
      )}
    </button>
  );
}

function scoreLeads(data: Record<string, string>): { score: number; temp: string; tags: string[] } {
  let score = 0;
  const tags = ["website-lead", "prequal-form"];

  // Timeline scoring
  if (data.timeline === "0-30 days") score += 40;
  else if (data.timeline === "31-60 days") score += 30;
  else if (data.timeline === "61-90 days") score += 20;
  else if (data.timeline === "3-6 months") score += 10;

  // Credit score scoring
  if (data.creditScore === "760+") score += 30;
  else if (data.creditScore === "720-759") score += 25;
  else if (data.creditScore === "680-719") score += 20;
  else if (data.creditScore === "640-679") score += 10;
  else if (data.creditScore === "580-639") score += 5;

  // Realtor engaged
  if (data.hasRealtor === "Yes") score += 15;

  // Down payment
  const dp = parseFloat(data.downPayment?.replace(/[^0-9.]/g, "") || "0");
  if (dp >= 20000) score += 15;
  else if (dp >= 10000) score += 10;

  let temp = "COLD";
  if (score >= 70) { temp = "HOT"; tags.push("hot-lead"); }
  else if (score >= 40) { temp = "WARM"; tags.push("warm-lead"); }
  else { tags.push("cold-lead"); }

  return { score, temp, tags };
}

export default function PreQualForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    loanType: "",
    propertyType: "",
    purchasePrice: "",
    downPayment: "",
    creditScore: "",
    annualIncome: "",
    monthlyDebts: "",
    firstTimeBuyer: "",
    hasRealtor: "",
    timeline: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    smsConsent: false,
  });

  const set = (key: string, val: string | boolean) => setData(prev => ({ ...prev, [key]: val }));

  const canAdvance = () => {
    if (step === 1) return !!data.loanType;
    if (step === 2) return !!data.propertyType && !!data.purchasePrice;
    if (step === 3) return !!data.creditScore && !!data.annualIncome;
    if (step === 4) return !!data.timeline && !!data.hasRealtor && !!data.firstTimeBuyer;
    if (step === 5) return !!data.firstName && !!data.phone && !!data.email && data.smsConsent;
    return false;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const { score, temp, tags } = scoreLeads({ ...data, smsConsent: String(data.smsConsent) });

      // 1. Create contact
      const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Version": "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          tags,
          customFields: [
            { id: CF.loanType, value: data.loanType },
            { id: CF.propertyType, value: data.propertyType },
            { id: CF.purchasePrice, value: data.purchasePrice },
            { id: CF.downPayment, value: data.downPayment },
            { id: CF.creditScore, value: data.creditScore },
            { id: CF.creditScoreText, value: data.creditScore },
            { id: CF.annualIncome, value: data.annualIncome },
            { id: CF.monthlyDebts, value: data.monthlyDebts || "Not provided" },
            { id: CF.firstTimeBuyer, value: data.firstTimeBuyer },
            { id: CF.hasRealtor, value: data.hasRealtor },
            { id: CF.timeline, value: data.timeline },
            { id: CF.purchaseTimeline, value: data.timeline },
            { id: CF.leadSource, value: "Website Pre-Qual Form" },
            { id: CF.leadScore, value: String(score) },
            { id: CF.leadTemperature, value: temp },
            { id: CF.smsConsent, value: data.smsConsent ? "true" : "false" },
          ],
        }),
      });

      if (!contactRes.ok) throw new Error("Contact creation failed");
      const contactData = await contactRes.json();
      const contactId = contactData?.contact?.id;

      // 2. Add to Mortgage Pipeline
      if (contactId) {
        const stageId = (data.creditScore === "760+" || data.creditScore === "720-759")
          ? STAGE_PREQUAL
          : STAGE_NEW_LEAD;

        await fetch("https://services.leadconnectorhq.com/opportunities/", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${GHL_API_KEY}`,
            "Version": "2021-07-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pipelineId: PIPELINE_ID,
            locationId: GHL_LOCATION_ID,
            name: `${data.firstName} ${data.lastName} — ${data.loanType}`,
            pipelineStageId: stageId,
            contactId,
            status: "open",
            monetaryValue: parseFloat(data.purchasePrice?.replace(/[^0-9.]/g, "") || "0"),
          }),
        });
      }

      setSubmitted(true);
    } catch (e) {
      setError("Something went wrong. Please call us at (945) 294-5020.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="prequal" className="py-24 md:py-32" style={{ background: "oklch(0.15 0.04 155)" }}>
        <div className="container max-w-2xl mx-auto text-center">
          <CheckCircle2 size={64} style={{ color: "oklch(0.62 0.16 42)", margin: "0 auto 1.5rem" }} />
          <h2 className="font-display mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.975 0.008 85)" }}>
            YOU'RE ON YOUR WAY
          </h2>
          <p className="font-['Outfit'] text-lg mb-2" style={{ color: "oklch(0.78 0.02 85)" }}>
            Tony will reach out within 1 hour — usually much faster.
          </p>
          <p className="font-['Outfit'] text-sm" style={{ color: "oklch(0.62 0.16 42)" }}>
            Check your phone — NOVA may reach out via text to get started right away.
          </p>
          <NMLSDisclosure variant="form" />
        </div>
      </section>
    );
  }

  return (
    <section id="prequal" className="py-24 md:py-32" style={{ background: "oklch(0.15 0.04 155)" }}>
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-['Outfit'] text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.62 0.16 42)" }}>
            Free · No Credit Pull · No Obligation
          </p>
          <h2 className="font-display leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.975 0.008 85)" }}>
            GET PRE-QUALIFIED
            <br />
            <span style={{ color: "oklch(0.62 0.16 42)" }}>IN 2 MINUTES</span>
          </h2>
          <p className="font-['Outfit'] text-base" style={{ color: "oklch(0.78 0.02 85)" }}>
            Answer 5 quick questions and Tony will have your options ready.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10 gap-0">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isDone = step > s.id;
            return (
              <div key={s.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isDone ? "oklch(0.62 0.16 42)" : isActive ? "oklch(0.26 0.065 155)" : "oklch(0.18 0.04 155)",
                      border: `2px solid ${isDone || isActive ? "oklch(0.62 0.16 42)" : "oklch(0.975 0.008 85 / 0.2)"}`,
                    }}
                  >
                    {isDone ? (
                      <CheckCircle2 size={16} style={{ color: "oklch(0.975 0.008 85)" }} />
                    ) : (
                      <Icon size={16} style={{ color: isActive ? "oklch(0.62 0.16 42)" : "oklch(0.55 0.02 85)" }} />
                    )}
                  </div>
                  <span className="font-['Outfit'] text-xs mt-1 hidden sm:block" style={{ color: isActive ? "oklch(0.62 0.16 42)" : "oklch(0.55 0.02 85)" }}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-8 sm:w-16 h-px mb-4" style={{ background: step > s.id ? "oklch(0.62 0.16 42)" : "oklch(0.975 0.008 85 / 0.15)" }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Form card */}
        <div style={{ background: "oklch(0.18 0.04 155)", border: "1px solid oklch(0.975 0.008 85 / 0.1)", padding: "2.5rem" }}>
          {/* Step 1: Loan Type */}
          {step === 1 && (
            <div>
              <h3 className="font-display mb-2" style={{ fontSize: "1.8rem", color: "oklch(0.975 0.008 85)" }}>
                WHAT ARE YOU LOOKING TO DO?
              </h3>
              <p className="font-['Outfit'] text-sm mb-8" style={{ color: "oklch(0.65 0.02 85)" }}>
                Select the option that best describes your goal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "Home Purchase", label: "Buy a Home", sublabel: "Primary residence or second home" },
                  { value: "Refinance", label: "Refinance", sublabel: "Lower rate or change loan terms" },
                  { value: "DSCR / Investor", label: "Investment Property", sublabel: "DSCR, rental, or fix & flip" },
                  { value: "Cash-Out Refi", label: "Cash-Out Refinance", sublabel: "Access equity in your home" },
                ].map(opt => (
                  <OptionCard
                    key={opt.value}
                    value={opt.value}
                    label={opt.label}
                    sublabel={opt.sublabel}
                    selected={data.loanType === opt.value}
                    onClick={() => set("loanType", opt.value)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Property & Price */}
          {step === 2 && (
            <div>
              <h3 className="font-display mb-2" style={{ fontSize: "1.8rem", color: "oklch(0.975 0.008 85)" }}>
                TELL US ABOUT THE PROPERTY
              </h3>
              <p className="font-['Outfit'] text-sm mb-8" style={{ color: "oklch(0.65 0.02 85)" }}>
                This helps us find the right loan program for you.
              </p>
              <div className="mb-6">
                <label style={labelStyle}>Property Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Single Family", "Townhouse / Condo", "Multi-Family", "New Construction", "Land", "Commercial"].map(pt => (
                    <OptionCard
                      key={pt}
                      value={pt}
                      label={pt}
                      selected={data.propertyType === pt}
                      onClick={() => set("propertyType", pt)}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>
                    {data.loanType === "Refinance" || data.loanType === "Cash-Out Refi"
                      ? "Estimated Home Value"
                      : "Purchase Price"}
                  </label>
                  <input
                    type="text"
                    placeholder="$450,000"
                    value={data.purchasePrice}
                    onChange={e => set("purchasePrice", e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    {data.loanType === "Refinance" || data.loanType === "Cash-Out Refi"
                      ? "Current Loan Balance"
                      : "Down Payment"}
                  </label>
                  <input
                    type="text"
                    placeholder="$45,000"
                    value={data.downPayment}
                    onChange={e => set("downPayment", e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Finances */}
          {step === 3 && (
            <div>
              <h3 className="font-display mb-2" style={{ fontSize: "1.8rem", color: "oklch(0.975 0.008 85)" }}>
                YOUR FINANCIAL PICTURE
              </h3>
              <p className="font-['Outfit'] text-sm mb-8" style={{ color: "oklch(0.65 0.02 85)" }}>
                No credit pull — this is just to find the best program for you.
              </p>
              <div className="mb-6">
                <label style={labelStyle}>Credit Score Range</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { value: "760+", label: "760+", sublabel: "Excellent" },
                    { value: "720-759", label: "720–759", sublabel: "Very Good" },
                    { value: "680-719", label: "680–719", sublabel: "Good" },
                    { value: "640-679", label: "640–679", sublabel: "Fair" },
                    { value: "580-639", label: "580–639", sublabel: "Needs Work" },
                    { value: "Below 580", label: "Below 580", sublabel: "Let's talk options" },
                  ].map(opt => (
                    <OptionCard
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                      sublabel={opt.sublabel}
                      selected={data.creditScore === opt.value}
                      onClick={() => set("creditScore", opt.value)}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>Annual Household Income</label>
                  <input
                    type="text"
                    placeholder="$95,000"
                    value={data.annualIncome}
                    onChange={e => set("annualIncome", e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Monthly Debt Payments (optional)</label>
                  <input
                    type="text"
                    placeholder="$500 (car, student loans, etc.)"
                    value={data.monthlyDebts}
                    onChange={e => set("monthlyDebts", e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Timeline */}
          {step === 4 && (
            <div>
              <h3 className="font-display mb-2" style={{ fontSize: "1.8rem", color: "oklch(0.975 0.008 85)" }}>
                TIMING & SITUATION
              </h3>
              <p className="font-['Outfit'] text-sm mb-8" style={{ color: "oklch(0.65 0.02 85)" }}>
                Help Tony prioritize your file and prepare the right options.
              </p>
              <div className="mb-6">
                <label style={labelStyle}>When do you want to close?</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "0-30 days", "31-60 days", "61-90 days",
                    "3-6 months", "6-12 months", "Just exploring"
                  ].map(t => (
                    <OptionCard
                      key={t}
                      value={t}
                      label={t}
                      selected={data.timeline === t}
                      onClick={() => set("timeline", t)}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>Working with a Realtor?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes", "No — need a referral"].map(v => (
                      <OptionCard
                        key={v}
                        value={v}
                        label={v}
                        selected={data.hasRealtor === v}
                        onClick={() => set("hasRealtor", v)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>First-Time Homebuyer?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes", "No"].map(v => (
                      <OptionCard
                        key={v}
                        value={v}
                        label={v}
                        selected={data.firstTimeBuyer === v}
                        onClick={() => set("firstTimeBuyer", v)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact */}
          {step === 5 && (
            <div>
              <h3 className="font-display mb-2" style={{ fontSize: "1.8rem", color: "oklch(0.975 0.008 85)" }}>
                HOW DO WE REACH YOU?
              </h3>
              <p className="font-['Outfit'] text-sm mb-8" style={{ color: "oklch(0.65 0.02 85)" }}>
                Tony will personally review your file and reach out within 1 hour.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    type="text"
                    placeholder="Tony"
                    value={data.firstName}
                    onChange={e => set("firstName", e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    value={data.lastName}
                    onChange={e => set("lastName", e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(972) 555-0100"
                    value={data.phone}
                    onChange={e => set("phone", e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={data.email}
                    onChange={e => set("email", e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
              {/* A2P SMS Consent */}
              <div
                className="p-4 mb-6"
                style={{ background: "oklch(0.14 0.03 155)", border: "1px solid oklch(0.975 0.008 85 / 0.1)" }}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.smsConsent}
                    onChange={e => set("smsConsent", e.target.checked)}
                    className="mt-1 flex-shrink-0 w-4 h-4"
                    style={{ accentColor: "oklch(0.62 0.16 42)" }}
                  />
                  <span className="font-['Outfit'] text-xs leading-relaxed" style={{ color: "oklch(0.65 0.02 85)" }}>
                    By checking this box and submitting, I consent to receive SMS text messages and calls from DFW Homes & Loans (Tony Botchev, NMLS #114198) regarding my mortgage inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. This consent is not required to obtain services.{" "}
                    <a href="#" className="underline" style={{ color: "oklch(0.62 0.16 42)" }}>Privacy Policy</a>{" "}
                    &{" "}
                    <a href="#" className="underline" style={{ color: "oklch(0.62 0.16 42)" }}>Terms</a>
                  </span>
                </label>
              </div>
              {error && (
                <p className="font-['Outfit'] text-sm mb-4" style={{ color: "oklch(0.65 0.22 25)" }}>
                  {error}
                </p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-2 font-['Outfit'] text-sm transition-colors"
                style={{ color: "oklch(0.65 0.02 85)", background: "none", border: "none", cursor: "pointer" }}
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : <div />}

            {step < 5 ? (
              <button
                type="button"
                onClick={() => canAdvance() && setStep(s => s + 1)}
                disabled={!canAdvance()}
                className="btn-primary-kt flex items-center gap-2 px-8 py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => canAdvance() && handleSubmit()}
                disabled={!canAdvance() || loading}
                className="btn-primary-kt flex items-center gap-2 px-8 py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : <>Get My Options <ArrowRight size={16} /></>}
              </button>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-1 w-full" style={{ background: "oklch(0.975 0.008 85 / 0.08)" }}>
            <div
              className="h-1 transition-all duration-500"
              style={{ width: `${(step / 5) * 100}%`, background: "oklch(0.62 0.16 42)" }}
            />
          </div>
          <p className="font-['Outfit'] text-xs text-right mt-1" style={{ color: "oklch(0.55 0.02 85)" }}>
            Step {step} of 5
          </p>
        </div>

        <NMLSDisclosure variant="form" />
      </div>
    </section>
  );
}
