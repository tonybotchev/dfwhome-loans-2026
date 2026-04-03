import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Allen", state: "TX", county: "Collin", slug: "allen",
  tagline: "Family-friendly, fast-growing, and perfectly positioned between Plano and McKinney.",
  intro: "Allen TX offers the ideal blend of suburban comfort and urban convenience. With top-rated Allen ISD schools, a thriving retail corridor along US-75, and a diverse housing stock from affordable townhomes to upscale communities, Allen is one of the most desirable places to buy a home in Collin County. Tony Botchev helps Allen buyers get pre-approved fast and close on time.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$470,000" },
    { label: "School District", value: "Allen ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Twin Creeks, Watters Crossing, Bethany Lakes" },
    { label: "New Construction", value: "Limited — established & infill" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Best for Allen buyers with strong credit and stable income.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for Allen first-time buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in Allen TX.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for Allen luxury homes.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance for qualifying Allen buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment property loans in Allen — qualify on rental income.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in Allen TX?", a: "As of 2026, the median home price in Allen TX is approximately $470,000. Prices range from $300,000 for townhomes and smaller homes to $1.2M+ in master-planned communities like Twin Creeks." },
    { q: "Is Allen TX a good place to buy a home?", a: "Allen is consistently ranked among the best cities in Texas for families. Allen ISD is one of the top school districts in the state, crime rates are low, and the city's location along US-75 provides easy access to both Plano and McKinney employment centers." },
    { q: "What loan programs are available for Allen TX homebuyers?", a: "Tony Botchev offers every major loan program for Allen buyers: conventional, FHA, VA, jumbo, DSCR investor loans, and first-time homebuyer programs with down payment assistance. Most buyers receive a pre-approval letter within 24 hours." },
    { q: "Are there first-time homebuyer programs in Allen TX?", a: "Yes. Qualifying Allen buyers may be eligible for Collin County down payment assistance programs and state-level programs through TSAHC and TDHCA. Tony Botchev will identify every program you qualify for at no cost." },
    { q: "How close is Allen TX to major employers?", a: "Allen is centrally located in Collin County, approximately 25 minutes from downtown Dallas, 15 minutes from Plano's Legacy Business Park, and 20 minutes from McKinney's growing employment corridor. It's an ideal location for commuters." },
  ],
  nearbyLinks: [
    { city: "Plano", href: "/cities/plano" },
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Frisco", href: "/cities/frisco" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Celina", href: "/cities/celina" },
  ],
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans — Allen TX",
  "description": "Home loans in Allen TX. Tony Botchev NMLS #114198 offers conventional, FHA, VA, jumbo, and DSCR loans to Allen homebuyers and investors.",
  "url": "https://www.dfwhome.loans/cities/allen",
  "areaServed": { "@type": "City", "name": "Allen", "containedInPlace": { "@type": "State", "name": "Texas" } },
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

export default function AllenPage() {
  useSEO({
    title: "Home Loans in Allen TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, jumbo, and DSCR home loans in Allen TX. Tony Botchev (NMLS #114198) serves all of Collin County. Pre-approval in 24 hours.",
    canonical: "https://www.dfwhome.loans/cities/allen",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
