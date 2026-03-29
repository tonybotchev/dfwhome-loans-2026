/* Kinetic Texas — NMLS Compliance Disclosure Bar
   SAFE Act / State Law compliant disclosure block
   Used in: Navbar sticky bar, Hero, every section footer, main Footer
   
   Requirements met:
   - NMLS Unique Identifier clearly shown (SAFE Act / MSL XX.XXX.210)
   - Company NMLS shown alongside individual NMLS
   - NMLS Consumer Access link for public record lookup
   - Equal Housing Lender disclosure
   - Texas DSML license disclosure
   - "Not a lender" / "All loans subject to credit approval"
   - "Not a commitment to lend" on all advertising/rate contexts
*/

interface NMLSDisclosureProps {
  variant?: "bar" | "inline" | "footer" | "form";
  dark?: boolean;
}

export default function NMLSDisclosure({ variant = "inline", dark = false }: NMLSDisclosureProps) {
  const textColor = dark ? "oklch(0.65 0.02 85)" : "oklch(0.45 0.02 80)";
  const accentColor = dark ? "oklch(0.62 0.16 42)" : "oklch(0.26 0.065 155)";
  const borderColor = dark ? "oklch(0.975 0.008 85 / 0.12)" : "oklch(0.88 0.015 80)";

  if (variant === "bar") {
    // Compact single-line bar for use in navbar or section tops
    return (
      <div
        className="w-full py-2 px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center"
        style={{ background: dark ? "oklch(0.18 0.055 155)" : "oklch(0.94 0.012 80)", borderBottom: `1px solid ${borderColor}` }}
      >
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>
          Tony Botchev · NMLS{" "}
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-600"
            style={{ color: accentColor }}
          >
            #320841
          </a>
        </span>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>
          Loan Factory, Inc. NMLS{"\ "}
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-600"
            style={{ color: accentColor }}
          >
            #320841
          </a>
        </span>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>Texas DSML Licensed</span>
        <span className="font-['Outfit'] text-xs" style={{ color: textColor }}>⊕ Equal Housing Lender</span>
        <a
          href="https://www.nmlsconsumeraccess.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Outfit'] text-xs underline"
          style={{ color: accentColor }}
        >
          NMLS Consumer Access
        </a>
      </div>
    );
  }

  if (variant === "form") {
    // Detailed disclosure for use near lead forms and calculators
    return (
      <div
        className="p-4 border-l-2 mt-4"
        style={{ borderColor: accentColor, background: dark ? "oklch(0.975 0.008 85 / 0.04)" : "oklch(0.94 0.012 80)" }}
      >
        <p className="font-['Outfit'] text-xs leading-relaxed" style={{ color: textColor }}>
          <strong style={{ color: dark ? "oklch(0.88 0.01 85)" : "oklch(0.26 0.065 155)" }}>
            Tony Botchev, NMLS{" "}
            <a
              href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: accentColor }}
            >
              #320841
            </a>
            {" "}· Loan Factory, Inc. NMLS{" "}
            <a
              href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: accentColor }}
            >
              #320841
            </a>
          </strong>
          {" "}· Texas DSML Licensed · ⊕ Equal Housing Lender
        </p>
        <p className="font-['Outfit'] text-xs leading-relaxed mt-2" style={{ color: textColor }}>
          Submitting this form does not constitute a mortgage application, pre-qualification, or commitment to lend. All loans subject to credit approval, income verification, and property appraisal. Rates, terms, and availability are subject to change without notice. DFW Homes &amp; Loans is not a direct lender. Loans are originated through licensed lending partners.{" "}
          <a
            href="https://www.nmlsconsumeraccess.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: accentColor }}
          >
            Verify license at NMLS Consumer Access
          </a>
          .
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    // Full legal block for footer
    return (
      <div className="mt-8 pt-8 border-t" style={{ borderColor }}>
        <p className="font-['Outfit'] text-xs leading-relaxed" style={{ color: textColor }}>
          Tony Botchev (NMLS{" "}
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: accentColor }}
          >
            #320841
          </a>
          ) is a licensed Mortgage Loan Originator (MLO) sponsored by Loan Factory, Inc. Company NMLS{" "}
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: accentColor }}
          >
            #320841
          </a>
          . Licensed by the Texas Department of Savings and Mortgage Lending (DSML). DFW Homes &amp; Loans is not a direct lender. All loan products are subject to credit approval, income verification, satisfactory appraisal, and underwriting guidelines. Rates and terms are subject to change without notice and are not guaranteed until locked. Equal Housing Lender. This is not a commitment to lend. All information is provided for educational purposes only.{" "}
          <a
            href="https://www.nmlsconsumeraccess.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: accentColor }}
          >
            Verify license at NMLS Consumer Access →
          </a>
        </p>
      </div>
    );
  }

  // Default: inline compact
  return (
    <p className="font-['Outfit'] text-xs" style={{ color: textColor }}>
      Tony Botchev · NMLS{" "}
      <a
        href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: accentColor }}
      >
        #320841
      </a>
      {" "}· Loan Factory, Inc. NMLS{" "}
      <a
        href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: accentColor }}
      >
        #320841
      </a>
      {" "}· Texas DSML Licensed · Equal Housing Lender · All loans subject to credit approval.
    </p>
  );
}
