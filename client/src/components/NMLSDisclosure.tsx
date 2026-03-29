/* Kinetic Texas — NMLS Compliance Disclosure
   SAFE Act / Texas DSML / A2P compliant
   
   CORRECT NMLS NUMBERS:
   - Tony Botchev (Individual MLO): NMLS #114198
   - Loan Factory, Inc. (Sponsoring Broker): NMLS #320841
   
   Consumer Access links use the CORRECT entity type:
   - Individual: /EntityDetails.aspx/INDIVIDUAL/114198
   - Company:    /EntityDetails.aspx/COMPANY/320841
   
   Variants:
   - "bar"     → Sticky top compliance bar (every page view)
   - "inline"  → Compact inline (section footers)
   - "form"    → Detailed (forms, calculator, booking)
   - "footer"  → Full legal block (site footer)
   - "section" → Mid-section mini disclaimer (loan programs, rates)
*/

interface NMLSDisclosureProps {
  variant?: "bar" | "inline" | "footer" | "form" | "section";
  dark?: boolean;
}

const TONY_NMLS   = "114198";
const COMPANY_NMLS = "320841";
const TONY_URL    = `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/${TONY_NMLS}`;
const COMPANY_URL = `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/${COMPANY_NMLS}`;
const ACCESS_URL  = "https://www.nmlsconsumeraccess.org";

export default function NMLSDisclosure({ variant = "inline", dark = false }: NMLSDisclosureProps) {
  const textColor   = dark ? "oklch(0.62 0.015 85)" : "oklch(0.45 0.02 80)";
  const accentColor = dark ? "oklch(0.62 0.16 42)"  : "oklch(0.26 0.065 155)";
  const borderColor = dark ? "oklch(0.975 0.008 85 / 0.12)" : "oklch(0.88 0.015 80)";
  const bg          = dark ? "oklch(0.14 0.04 155)"  : "oklch(0.96 0.008 80)";

  const TonyLink = () => (
    <a href={TONY_URL} target="_blank" rel="noopener noreferrer"
      className="underline font-semibold" style={{ color: accentColor }}>
      #{TONY_NMLS}
    </a>
  );
  const CompanyLink = () => (
    <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer"
      className="underline font-semibold" style={{ color: accentColor }}>
      #{COMPANY_NMLS}
    </a>
  );
  const AccessLink = ({ label = "NMLS Consumer Access" }: { label?: string }) => (
    <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer"
      className="underline" style={{ color: accentColor }}>
      {label}
    </a>
  );

  /* ── BAR: Sticky top compliance bar shown on every page ── */
  if (variant === "bar") {
    return (
      <div className="w-full py-2 px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center"
        style={{ background: dark ? "oklch(0.16 0.05 155)" : "oklch(0.94 0.012 80)", borderBottom: `1px solid ${borderColor}` }}>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>
          Tony Botchev · NMLS <TonyLink />
        </span>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>
          Loan Factory, Inc. NMLS <CompanyLink />
        </span>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>Texas DSML Licensed</span>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>⊕ Equal Housing Lender</span>
        <span className="font-['Outfit'] text-xs">
          <AccessLink />
        </span>
      </div>
    );
  }

  /* ── SECTION: Mini disclaimer for loan program / rate sections ── */
  if (variant === "section") {
    return (
      <p className="font-['Outfit'] text-xs leading-relaxed mt-3" style={{ color: textColor }}>
        Tony Botchev, NMLS <TonyLink /> | Loan Factory, Inc. NMLS <CompanyLink /> · Texas DSML Licensed ·
        Equal Housing Lender. All loan products are subject to credit approval. Rates and terms subject to
        change without notice. Not a commitment to lend.
      </p>
    );
  }

  /* ── FORM: Detailed disclosure for lead forms and calculator ── */
  if (variant === "form") {
    return (
      <div className="p-4 border-l-2 mt-4"
        style={{ borderColor: accentColor, background: bg }}>
        <p className="font-['Outfit'] text-xs leading-relaxed font-semibold mb-1"
          style={{ color: dark ? "oklch(0.88 0.01 85)" : "oklch(0.26 0.065 155)" }}>
          Tony Botchev, NMLS <TonyLink /> · Loan Factory, Inc. NMLS <CompanyLink />
        </p>
        <p className="font-['Outfit'] text-xs leading-relaxed" style={{ color: textColor }}>
          Licensed by the Texas Department of Savings and Mortgage Lending (DSML). Equal Housing Lender.
          Submitting this form does not constitute a mortgage application, pre-qualification, or commitment
          to lend. All loans subject to credit approval, income verification, satisfactory property
          appraisal, and applicable underwriting guidelines. Rates, terms, and program availability are
          subject to change without notice and are not guaranteed until locked in writing.
          DFW Homes &amp; Loans is not a direct lender. Loans are originated through Loan Factory, Inc.
          and its licensed lending partners.{" "}
          <AccessLink label="Verify license at NMLS Consumer Access →" />
        </p>
      </div>
    );
  }

  /* ── FOOTER: Full legal block for site footer ── */
  if (variant === "footer") {
    return (
      <div className="mt-8 pt-8 border-t" style={{ borderColor }}>
        <p className="font-['Outfit'] text-xs leading-relaxed" style={{ color: textColor }}>
          Tony Botchev (NMLS <TonyLink />) is a licensed Mortgage Loan Originator (MLO) sponsored by
          Loan Factory, Inc., Company NMLS <CompanyLink />. Licensed by the Texas Department of Savings
          and Mortgage Lending (DSML). DFW Homes &amp; Loans is not a direct lender. All loan products
          are subject to credit approval, income verification, satisfactory appraisal, and underwriting
          guidelines. Rates and terms are subject to change without notice and are not guaranteed until
          locked in writing. This website is for informational purposes only and does not constitute a
          commitment to lend or an offer to extend credit. Equal Housing Lender.{" "}
          <AccessLink label="Verify license at NMLS Consumer Access →" />
        </p>
      </div>
    );
  }

  /* ── INLINE (default): Compact single-line ── */
  return (
    <p className="font-['Outfit'] text-xs" style={{ color: textColor }}>
      Tony Botchev · NMLS <TonyLink /> · Loan Factory, Inc. NMLS <CompanyLink /> ·
      Texas DSML Licensed · Equal Housing Lender · All loans subject to credit approval.
    </p>
  );
}
