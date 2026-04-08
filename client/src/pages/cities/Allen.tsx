import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";
const data: CityPageData = {
  city: "Allen", state: "TX", county: "Collin", slug: "allen",
  tagline: "Top-rated schools, family-friendly neighborhoods, and a thriving local economy in Collin County.",
  intro: "Allen TX is one of the fastest-growing cities in Collin County, known for its award-winning schools, safe neighborhoods, and strong community feel. Located along US-75 between Plano and McKinney, Allen offers a mix of established subdivisions and newer developments at competitive price points.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$430,000" },
    { label: "School District", value: "Allen ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Highway Access", value: "US-75, SH-121" },
    { label: "Notable", value: "Allen Premium Outlets, Allen Event Center" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Standard purchase loans for Allen homes.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for Allen buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in Allen.", href: "/loans/va" },
    { name: "First-Time Buyer", desc: "Down payment assistance programs for Allen buyers.", href: "/loans/first-time-buyer" },
    { name: "Jumbo Loans", desc: "Financing above $766,550 for luxury Allen properties.", href: "/loans/jumbo" },
    { name: "Refinance", desc: "Lower your rate or access equity in your Allen home.", href: "/loans/refinance" },
  ],
  faqs: [
    { q: "What is the average home price in Allen TX?", a: "As of 2026, the median home price in Allen TX is approximately $430,000. Prices range from $300,000 in older neighborhoods to $700,000+ in newer luxury communities near Watters Creek." },
    { q: "Is Allen ISD a good school district?", a: "Allen ISD is consistently ranked among the top school districts in Texas and nationally. Allen High School is one of the largest and most decorated high schools in the state, making Allen a top destination for families." },
    { q: "How competitive is the Allen TX housing market?", a: "Allen remains a competitive market due to strong demand from families and corporate relocations. Pre-approval is essential — Tony Botchev can typically deliver a pre-approval letter within 24 hours." },
    { q: "What first-time buyer programs are available in Allen TX?", a: "Allen buyers may qualify for TSAHC and My First Texas Home programs offering 3–5% down payment assistance. Income limits and purchase price caps apply for Collin County." },
  ],
  nearbyLinks: [
    { city: "Plano", href: "/cities/plano" },
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Frisco", href: "/cities/frisco" },
    { city: "Celina", href: "/cities/celina" },
  ],
};
const schema = [{
  "@context": "https://schema.org", "@type": "FinancialService",
  name: "DFW Homes & Loans — Allen TX",
  description: "Home loans in Allen TX. Tony Botchev NMLS #114198.",
  url: "https://www.dfwhome.loans/cities/allen",
  areaServed: { "@type": "City", name: "Allen", containedInPlace: { "@type": "State", name: "Texas" } },
  telephone: "+19453708656",
}];
export default function AllenPage() {
  useSEO({
    title: "Home Loans in Allen, TX | Local Mortgage Assistance",
    description: "Secure affordable home loans in Allen, TX. DFW Homes & Loans helps families & individuals find the right mortgage programs to live in this top-rated community.",
    canonical: "https://www.dfwhome.loans/cities/allen",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
