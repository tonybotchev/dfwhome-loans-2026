import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Melissa", state: "TX", county: "Collin", slug: "melissa",
  tagline: "Small-town feel, Collin County schools, and room to grow — Melissa TX is a hidden gem.",
  intro: "Melissa TX sits just north of McKinney on US-75, offering affordable new construction, highly-rated Melissa ISD schools, and a tight-knit community feel. Home prices remain below the Collin County median, making it one of the best values in North DFW.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$380,000" },
    { label: "School District", value: "Melissa ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Highway Access", value: "US-75, SH-121" },
    { label: "New Construction", value: "Yes — active communities" },
  ],
  loanTypes: [
    { name: "FHA Loans", desc: "3.5% down — popular for Melissa first-time buyers.", href: "/loans/fha" },
    { name: "Conventional", desc: "3–20% down for Melissa buyers.", href: "/loans/conventional" },
    { name: "VA Loans", desc: "0% down for veterans buying in Melissa.", href: "/loans/va" },
    { name: "First-Time Buyer", desc: "Down payment assistance for Melissa buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans for Melissa rental properties.", href: "/loans/dscr" },
    { name: "Refinance", desc: "Refinance your Melissa home to a lower rate.", href: "/loans/refinance" },
  ],
  faqs: [
    { q: "What is the average home price in Melissa TX?", a: "As of 2026, the median home price in Melissa TX is approximately $380,000 — below the Collin County average and offering strong value for buyers seeking new construction with top-rated schools." },
    { q: "How are the schools in Melissa TX?", a: "Melissa ISD is consistently rated among the top school districts in Collin County. The district is known for small class sizes, strong academics, and a tight-knit community culture." },
    { q: "Is Melissa TX growing?", a: "Yes — Melissa is one of the fastest-growing small cities in Collin County. New residential communities, commercial development along US-75, and proximity to McKinney and Anna are driving rapid growth." },
  ],
  nearbyLinks: [
    { city: "Anna", href: "/cities/anna" },
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Celina", href: "/cities/celina" },
    { city: "Gunter", href: "/cities/gunter" },
  ],
};

const schema = [{
  "@context": "https://schema.org", "@type": "FinancialService",
  name: "DFW Homes & Loans — Melissa TX",
  description: "Home loans in Melissa TX. Tony Botchev NMLS #114198.",
  url: "https://www.dfwhome.loans/cities/melissa",
  areaServed: { "@type": "City", name: "Melissa", containedInPlace: { "@type": "State", name: "Texas" } },
  telephone: "+19453708656",
}];

export default function MelissaPage() {
  useSEO({
    title: "Home Loans in Melissa TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "FHA, conventional, and VA home loans in Melissa TX. Tony Botchev (NMLS #114198) helps Melissa buyers qualify for affordable Collin County homes.",
    canonical: "https://www.dfwhome.loans/cities/melissa",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
