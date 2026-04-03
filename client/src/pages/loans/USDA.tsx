/**
 * DESIGN SYSTEM: Kinetic Texas
 * Service Page: USDA Loans
 */
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useSEO } from "@/hooks/useSEO";

const faqItems = [
  {
    q: "What is a USDA loan and how does it work?",
    a: "A USDA loan is a government-backed mortgage program offered by the U.S. Department of Agriculture for buyers purchasing homes in eligible rural and suburban areas. USDA loans require 0% down payment and offer competitive interest rates. There are two types: USDA Guaranteed Loans (most common, offered through approved lenders like Tony Botchev) and USDA Direct Loans (issued directly by USDA for very low-income borrowers).",
  },
  {
    q: "Which cities in North DFW qualify for USDA loans?",
    a: "USDA eligibility is based on specific property addresses, not entire cities. In the North DFW area, many properties in Celina, Gunter, Anna, Melissa, Aubrey, and parts of Denton County may qualify. Some areas of McKinney and Wylie may also have eligible addresses. Tony Botchev can run a free USDA eligibility check on any property address in seconds.",
  },
  {
    q: "What are the income limits for a USDA loan in Texas?",
    a: "USDA income limits vary by county and household size. For Collin County in 2026, the standard income limit is approximately $110,650 for a 1–4 person household and $146,050 for a 5–8 person household. Denton County limits are similar. USDA uses adjusted gross income, so some deductions may help you qualify even if your gross income is slightly above the limit.",
  },
  {
    q: "What credit score do I need for a USDA loan?",
    a: "Most USDA-approved lenders require a minimum credit score of 640 for streamlined processing. Borrowers with scores below 640 may still qualify but require manual underwriting with additional documentation. Tony Botchev works with borrowers across the credit spectrum and can advise on the fastest path to USDA approval.",
  },
  {
    q: "Is there mortgage insurance on a USDA loan?",
    a: "Yes, but it's significantly cheaper than FHA mortgage insurance. USDA loans have a 1% upfront guarantee fee (which can be rolled into the loan) and a 0.35% annual fee. By comparison, FHA charges 1.75% upfront and 0.55–0.85% annually. For most buyers, USDA is the most affordable 0% down option available.",
  },
  {
    q: "Can I use a USDA loan to buy new construction in North DFW?",
    a: "Yes, USDA loans can be used for new construction in eligible areas. The property must be in a USDA-eligible zone and meet USDA property condition requirements. Tony Botchev has experience with USDA new construction loans in Celina, Gunter, and other growing North DFW communities.",
  },
];

const eligibleAreas = [
  { city: "Celina", note: "Most addresses eligible", href: "/cities/celina" },
  { city: "Gunter", note: "Most addresses eligible", href: "/cities/gunter" },
  { city: "Anna", note: "Many addresses eligible", href: "/cities/anna" },
  { city: "Melissa", note: "Many addresses eligible", href: "/cities/melissa" },
  { city: "Aubrey", note: "Most addresses eligible", href: "/cities/aubrey" },
  { city: "Denton", note: "Outer areas may qualify", href: "/cities/denton" },
];

export default function USDAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      "name": "USDA Home Loan — DFW Homes & Loans",
      "description": "USDA rural development mortgage loans for eligible North DFW areas. 0% down payment, no PMI. Tony Botchev, NMLS #114198.",
      "url": "https://www.dfwhome.loans/loans/usda",
      "provider": {
        "@type": "FinancialService",
        "name": "DFW Homes & Loans",
        "telephone": "+19453708656",
      },
      "feesAndCommissionsSpecification": "0% down payment required. 1% upfront guarantee fee (financeable). 0.35% annual fee.",
      "loanType": "USDA Guaranteed Loan",
      "areaServed": [
        { "@type": "City", "name": "Celina", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Gunter", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Anna", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Aubrey", "containedInPlace": { "@type": "State", "name": "Texas" } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    },
  ];

  useSEO({
    title: "USDA Loans in North DFW TX | 0% Down | Tony Botchev NMLS #114198",
    description: "USDA rural development home loans for eligible areas in North DFW — Celina, Gunter, Anna, Aubrey, and more. 0% down payment. Tony Botchev (NMLS #114198) specializes in USDA loans.",
    canonical: "https://www.dfwhome.loans/loans/usda",
    schema: schema as Record<string, unknown>[],
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1B2B1A] pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C4521A]/20 text-[#C4521A] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <Leaf size={12} /> USDA LOAN PROGRAM
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl text-white leading-none mb-4">
              USDA LOANS IN<br />
              <span className="text-[#C4521A]">NORTH DFW</span>
            </h1>
            <p className="text-white/70 text-lg mb-6">
              0% down payment. No private mortgage insurance. Lower monthly costs than FHA. If you're buying in an eligible area of North DFW, a USDA loan may be your best option.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact">
                <span className="inline-block bg-[#C4521A] text-white px-6 py-3 font-semibold hover:bg-[#A8431A] transition-colors cursor-pointer">
                  Check My Eligibility Free →
                </span>
              </Link>
              <a href="tel:+19453708656" className="flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                <Phone size={16} /> (945) 370-8656
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-white/5 border border-white/10 p-6">
            <h2 className="font-bebas text-2xl text-white mb-4">USDA LOAN AT A GLANCE</h2>
            <div className="space-y-3">
              {[
                { label: "Down Payment", value: "0% Required" },
                { label: "Upfront Guarantee Fee", value: "1% (financeable)" },
                { label: "Annual Fee", value: "0.35% of loan balance" },
                { label: "Minimum Credit Score", value: "640 (streamlined)" },
                { label: "Income Limit (Collin Co.)", value: "~$110,650 (1–4 person)" },
                { label: "Property Eligibility", value: "USDA-designated rural zones" },
                { label: "Loan Type", value: "30-year fixed rate" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/60">{label}</span>
                  <span className="text-white font-medium text-right max-w-[55%]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why USDA */}
      <section className="py-16 max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-bebas text-4xl text-[#1B2B1A] mb-2">WHY CHOOSE A USDA LOAN?</h2>
        <p className="text-[#4A5568] mb-10">For eligible buyers in qualifying areas, USDA is often the most affordable path to homeownership.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "0% Down Payment",
              desc: "No down payment required — the only other 0% down option is a VA loan, which requires military service. USDA is available to any qualifying buyer in an eligible area.",
            },
            {
              title: "Lower Mortgage Insurance",
              desc: "USDA's annual fee (0.35%) is significantly lower than FHA's annual MIP (0.55–0.85%). On a $350,000 loan, that's roughly $700/year in savings.",
            },
            {
              title: "Competitive Rates",
              desc: "USDA guaranteed loans offer market-competitive interest rates — often comparable to conventional loans — without requiring 20% down or private mortgage insurance.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 p-5 bg-white">
              <h3 className="font-bebas text-xl text-[#1B2B1A] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligible Areas */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="font-bebas text-4xl text-[#1B2B1A] mb-2">ELIGIBLE AREAS IN NORTH DFW</h2>
          <p className="text-[#4A5568] mb-8">
            USDA eligibility is determined by property address, not city boundaries. The following North DFW communities have many USDA-eligible addresses. Tony can run a free eligibility check on any address in seconds.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {eligibleAreas.map((area) => (
              <Link key={area.city} href={area.href}>
                <div className="border border-gray-200 p-4 hover:border-[#C4521A] transition-colors group cursor-pointer">
                  <h3 className="font-bebas text-lg text-[#1B2B1A] group-hover:text-[#C4521A] transition-colors">{area.city}, TX</h3>
                  <p className="text-xs text-[#6B7280]">{area.note}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-[#1B2B1A]/5 border border-[#1B2B1A]/10 p-5">
            <p className="text-sm text-[#4A5568]">
              <strong className="text-[#1B2B1A]">Not sure if your address qualifies?</strong> USDA eligibility maps are updated periodically and some addresses in growing areas like Celina and Anna may lose eligibility as population density increases. Tony Botchev will verify your specific address before you make an offer.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-bebas text-4xl text-[#1B2B1A] mb-2">USDA VS. FHA VS. CONVENTIONAL</h2>
        <p className="text-[#4A5568] mb-8">How USDA stacks up against the other major 0–3.5% down loan options.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1B2B1A] text-white">
                <th className="p-3 text-left font-semibold">Feature</th>
                <th className="p-3 text-center font-semibold text-[#C4521A]">USDA</th>
                <th className="p-3 text-center font-semibold">FHA</th>
                <th className="p-3 text-center font-semibold">Conventional 3%</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Down Payment", "0%", "3.5%", "3%"],
                ["Upfront Fee", "1% (financeable)", "1.75% (financeable)", "None"],
                ["Annual MI / PMI", "0.35%", "0.55–0.85%", "0.5–1.5% (removable)"],
                ["Min. Credit Score", "640", "580", "620"],
                ["Income Limit", "Yes (~$110K)", "None", "None"],
                ["Property Eligibility", "Rural/suburban zones", "Any", "Any"],
                ["Loan Limit", "None (market-based)", "$498,257 (2026)", "$766,550 (2026)"],
              ].map(([feature, usda, fha, conv], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-medium text-[#1B2B1A] border-b border-gray-200">{feature}</td>
                  <td className="p-3 text-center text-[#1B2B1A] font-semibold border-b border-gray-200 bg-[#1B2B1A]/5">{usda}</td>
                  <td className="p-3 text-center text-[#4A5568] border-b border-gray-200">{fha}</td>
                  <td className="p-3 text-center text-[#4A5568] border-b border-gray-200">{conv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-bebas text-4xl text-[#1B2B1A] mb-6">USDA LOAN FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#1B2B1A] hover:bg-gray-50 transition-colors"
                >
                  <span>{item.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={18} className="shrink-0 text-[#C4521A]" />
                    : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-[#4A5568] text-sm leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2B1A] py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-bebas text-4xl text-white mb-3">CHECK YOUR USDA ELIGIBILITY</h2>
          <p className="text-white/70 mb-6">
            Free eligibility check — no hard credit pull. Tony Botchev will verify your address, income, and credit in minutes and tell you exactly what you qualify for.
          </p>
          <Link href="/#contact">
            <span className="inline-block bg-[#C4521A] text-white px-10 py-4 font-semibold text-lg hover:bg-[#A8431A] transition-colors cursor-pointer">
              Check My USDA Eligibility →
            </span>
          </Link>
          <p className="text-white/40 text-xs mt-4">
            Tony Botchev · NMLS #114198 · Loan Factory, Inc. NMLS #320841 · Equal Housing Lender
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
