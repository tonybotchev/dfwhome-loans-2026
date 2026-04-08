import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";
const data: CityPageData = {
  city: "Plano", state: "TX", county: "Collin", slug: "plano",
  tagline: "Corporate headquarters, top-rated schools, and one of the most established markets in North DFW.",
  intro: "Plano TX is one of the most sought-after cities in the Dallas-Fort Worth metroplex, home to major corporate campuses, nationally ranked schools, and a diverse housing market. From established neighborhoods near Legacy Drive to newer builds in West Plano, buyers have a wide range of options across all price points.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$480,000" },
    { label: "School District", value: "Plano ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Highway Access", value: "US-75, Dallas North Tollway, SH-121" },
    { label: "Major Employers", value: "Toyota, JPMorgan Chase, Liberty Mutual" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Standard purchase loans for Plano homes.", href: "/loans/conventional" },
    { name: "Jumbo Loans", desc: "Financing above $766,550 for higher-priced Plano properties.", href: "/loans/jumbo" },
    { name: "FHA Loans", desc: "3.5% down for Plano buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in Plano.", href: "/loans/va" },
    { name: "First-Time Buyer", desc: "Down payment assistance programs for Plano buyers.", href: "/loans/first-time-buyer" },
    { name: "Refinance", desc: "Lower your rate or access equity in your Plano home.", href: "/loans/refinance" },
  ],
  faqs: [
    { q: "What is the average home price in Plano TX?", a: "As of 2026, the median home price in Plano TX is approximately $480,000. Prices range from $300,000 for older homes in East Plano to $1M+ for luxury properties near Legacy and Willow Bend." },
    { q: "Do I need a jumbo loan to buy in Plano?", a: "Not necessarily. The 2026 conforming loan limit for Collin County is $766,550, which covers most Plano purchases. Homes priced above this threshold require jumbo financing, which Tony Botchev also offers." },
    { q: "Is Plano a good place to buy a home in 2026?", a: "Plano consistently ranks among the best cities to live in the US due to its schools, job market, safety, and infrastructure. The market remains competitive, making pre-approval essential before making offers." },
    { q: "What school district serves Plano TX?", a: "Most of Plano is served by Plano ISD, one of the largest and highest-rated school districts in Texas. Some western portions of Plano fall within Frisco ISD boundaries." },
  ],
  nearbyLinks: [
    { city: "Frisco", href: "/cities/frisco" },
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Celina", href: "/cities/celina" },
  ],
};
const schema = [{
  "@context": "https://schema.org", "@type": "FinancialService",
  name: "DFW Homes & Loans — Plano TX",
  description: "Home loans in Plano TX. Tony Botchev NMLS #114198.",
  url: "https://www.dfwhome.loans/cities/plano",
  areaServed: { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
  telephone: "+19453708656",
}];
export default function PlanoPage() {
  useSEO({
    title: "Home Loans in Plano, Texas | Mortgage Help Made Easy",
    description: "Looking for home loans in Plano, TX? DFW Homes & Loans makes the process clear & stress-free so you can focus on finding the right property in a great location.",
    canonical: "https://www.dfwhome.loans/cities/plano",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
