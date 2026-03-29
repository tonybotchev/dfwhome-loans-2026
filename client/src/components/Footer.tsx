/* Kinetic Texas — Footer
   Forest green, SEO links, compliance text
*/
import { Phone, Mail, MessageCircle } from "lucide-react";
import NMLSDisclosure from "@/components/NMLSDisclosure";

const loanLinks = [
  { label: "Conventional Loans", href: "#loans" },
  { label: "FHA Loans", href: "#loans" },
  { label: "VA Loans", href: "#loans" },
  { label: "Jumbo Loans", href: "#loans" },
  { label: "DSCR Investor", href: "#loans" },
  { label: "Refinance", href: "#loans" },
];

const areaLinks = [
  { label: "Celina, TX", href: "#contact" },
  { label: "Prosper, TX", href: "#contact" },
  { label: "Frisco, TX", href: "#contact" },
  { label: "McKinney, TX", href: "#contact" },
  { label: "Anna, TX", href: "#contact" },
  { label: "Melissa, TX", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "oklch(0.18 0.055 155)" }}>
      {/* Main footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-3xl" style={{ color: "oklch(0.975 0.008 85)" }}>DFW HOMES</div>
              <div className="font-display text-2xl" style={{ color: "oklch(0.62 0.16 42)" }}>& LOANS</div>
            </div>
            <p className="font-['Outfit'] text-sm leading-relaxed mb-6" style={{ color: "oklch(0.65 0.02 85)" }}>
              Your trusted mortgage advisor for North DFW families since 2006. Serving Celina, Prosper, Frisco, McKinney, and all of North DFW.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: "#", icon: "f" },
                { label: "Instagram", href: "#", icon: "in" },
                { label: "TikTok", href: "#", icon: "tt" },
                { label: "LinkedIn", href: "#", icon: "li" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center font-['Outfit'] font-700 text-xs transition-colors"
                  style={{
                    background: "oklch(0.975 0.008 85 / 0.08)",
                    color: "oklch(0.78 0.02 85)",
                    border: "1px solid oklch(0.975 0.008 85 / 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.62 0.16 42)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.975 0.008 85)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.975 0.008 85 / 0.08)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.78 0.02 85)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Loan Programs */}
          <div>
            <h4 className="font-['Outfit'] font-700 text-xs uppercase tracking-widest mb-5" style={{ color: "oklch(0.62 0.16 42)" }}>
              Loan Programs
            </h4>
            <ul className="space-y-3">
              {loanLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-['Outfit'] text-sm transition-colors hover:text-[oklch(0.62_0.16_42)]"
                    style={{ color: "oklch(0.65 0.02 85)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-['Outfit'] font-700 text-xs uppercase tracking-widest mb-5" style={{ color: "oklch(0.62 0.16 42)" }}>
              Areas Served
            </h4>
            <ul className="space-y-3">
              {areaLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-['Outfit'] text-sm transition-colors hover:text-[oklch(0.62_0.16_42)]"
                    style={{ color: "oklch(0.65 0.02 85)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Outfit'] font-700 text-xs uppercase tracking-widest mb-5" style={{ color: "oklch(0.62 0.16 42)" }}>
              Contact Tony
            </h4>
            <div className="space-y-4">
              <a href="tel:+19453708656" className="flex items-center gap-3 group">
                <Phone size={15} style={{ color: "oklch(0.62 0.16 42)" }} />
                <span className="font-['Outfit'] text-sm group-hover:text-[oklch(0.62_0.16_42)] transition-colors" style={{ color: "oklch(0.65 0.02 85)" }}>
                  (945) 370-8656
                </span>
              </a>
              <a href="mailto:tony@dfwhome.loans" className="flex items-center gap-3 group">
                <Mail size={15} style={{ color: "oklch(0.62 0.16 42)" }} />
                <span className="font-['Outfit'] text-sm group-hover:text-[oklch(0.62_0.16_42)] transition-colors" style={{ color: "oklch(0.65 0.02 85)" }}>
                  tony@dfwhome.loans
                </span>
              </a>
              <a href="https://wa.me/19453708656" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <MessageCircle size={15} style={{ color: "oklch(0.62 0.16 42)" }} />
                <span className="font-['Outfit'] text-sm group-hover:text-[oklch(0.62_0.16_42)] transition-colors" style={{ color: "oklch(0.65 0.02 85)" }}>
                  WhatsApp Tony
                </span>
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary-kt text-xs px-5 py-2.5 w-full"
              >
                <span>Get Pre-Qualified Free →</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full legal disclosure block */}
      <div className="container pb-8">
        <NMLSDisclosure variant="footer" dark={true} />
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: "oklch(0.975 0.008 85 / 0.08)" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Outfit'] text-xs text-center md:text-left" style={{ color: "oklch(0.5 0.02 85)" }}>
            © {new Date().getFullYear()} DFW Homes & Loans · Tony Botchev, NMLS #114198 | Sponsored by Loan Factory, Inc. NMLS #320841 · Texas DSML Licensed · Equal Housing Lender · All loans subject to credit approval.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-['Outfit'] text-xs hover:text-[oklch(0.62_0.16_42)] transition-colors" style={{ color: "oklch(0.5 0.02 85)" }}>
              Privacy Policy
            </a>
            <a href="#" className="font-['Outfit'] text-xs hover:text-[oklch(0.62_0.16_42)] transition-colors" style={{ color: "oklch(0.5 0.02 85)" }}>
              Terms of Service
            </a>
            <a
              href="https://www.nmlsconsumeraccess.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Outfit'] text-xs hover:text-[oklch(0.62_0.16_42)] transition-colors"
              style={{ color: "oklch(0.5 0.02 85)" }}
            >
              NMLS Consumer Access
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
