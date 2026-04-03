import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Plano", state: "TX", county: "Collin", slug: "plano",
  tagline: "Corporate headquarters, top-rated schools, and one of Texas's most sought-after housing markets.",
  intro: "Plano TX is one of the most prosperous cities in the United States, home to major corporate campuses, nationally ranked schools, and a diverse housing market that ranges from affordable starter homes to multi-million dollar luxury estates. Whether you're relocating for work or putting down roots in Collin County, Tony Botchev can get you pre-approved fast.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$520,000" },
    { label: "School District", value: "Plano ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Legacy West, Willow Bend, East Plano" },
    { label: "New Construction", value: "Limited — established neighborhoods" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Most popular loan for Plano buyers with strong credit.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for Plano buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans and active duty buying in Plano.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for Plano luxury homes.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance for qualifying Plano buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment property loans in Plano — no tax returns needed.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in Plano TX?", a: "As of 2026, the median home price in Plano TX is approximately $520,000. Prices range from $350,000 for townhomes and smaller single-family homes to $2M+ in communities like Willow Bend and Legacy West." },
    { q: "Is Plano TX a good place to buy a home?", a: "Plano consistently ranks among the safest and most livable cities in the US. With top-rated Plano ISD schools, low crime rates, and a strong job market anchored by companies like Toyota, JPMorgan Chase, and Liberty Mutual, Plano is an excellent long-term investment." },
    { q: "Can I get a VA loan to buy a home in Plano TX?", a: "Yes. VA loans are available for eligible veterans, active duty service members, and surviving spouses buying in Plano. VA loans require 0% down payment and no private mortgage insurance. Tony Botchev specializes in VA loans across all of Collin County." },
    { q: "What is the conforming loan limit in Plano TX?", a: "The 2026 conforming loan limit in Collin County (where Plano is located) is $766,550. Homes priced above this threshold require a jumbo loan, which Tony Botchev also offers with competitive rates." },
    { q: "How long does it take to get pre-approved for a mortgage in Plano?", a: "With Tony Botchev at DFW Homes & Loans, most borrowers receive a pre-approval letter within 24 hours of submitting complete documentation. There is no hard credit pull to start the process." },
  ],
  nearbyLinks: [
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Frisco", href: "/cities/frisco" },
    { city: "Allen", href: "/cities/allen" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Celina", href: "/cities/celina" },
  ],
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans — Plano TX",
  "description": "Home loans in Plano TX. Tony Botchev NMLS #114198 offers conventional, FHA, VA, jumbo, and DSCR loans to Plano homebuyers and investors.",
  "url": "https://www.dfwhome.loans/cities/plano",
  "areaServed": { "@type": "City", "name": "Plano", "containedInPlace": { "@type": "State", "name": "Texas" } },
  "telephone": "+19453708656",
  "employee": { "@type": "Person", "name": "Tony Botchev", "identifier": { "@type": "PropertyValue", "name": "NMLS", "value": "114198" } },
}, {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": data.faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
}];

export default function PlanoPage() {
  useSEO({
    title: "Home Loans in Plano TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, jumbo, and DSCR home loans in Plano TX. Tony Botchev (NMLS #114198) serves all of Collin County. Pre-approval in 24 hours.",
    canonical: "https://www.dfwhome.loans/cities/plano",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
