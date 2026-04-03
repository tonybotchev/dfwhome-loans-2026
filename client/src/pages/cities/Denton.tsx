import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Denton", state: "TX", county: "Denton", slug: "denton",
  tagline: "University town with a vibrant arts scene, affordable housing, and explosive growth.",
  intro: "Denton TX is one of the most dynamic cities in North Texas — home to the University of North Texas and Texas Woman's University, a thriving arts and music scene, and a housing market that still offers strong value compared to the rest of DFW. From historic downtown bungalows to new construction in master-planned communities, Denton has something for every buyer. Tony Botchev helps Denton buyers navigate every loan type.",
  highlights: [
    { label: "County", value: "Denton" },
    { label: "Median Home Price", value: "~$380,000" },
    { label: "School District", value: "Denton ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Robson Ranch, Rayzor Ranch, Historic Downtown" },
    { label: "New Construction", value: "Yes — active growth corridors" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Most common loan for Denton buyers with solid credit.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for Denton first-time buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans and active duty buying in Denton.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for Denton luxury and acreage properties.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance for qualifying Denton buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans in Denton — strong rental demand near UNT.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in Denton TX?", a: "As of 2026, the median home price in Denton TX is approximately $380,000 — making it one of the more affordable options in the DFW metroplex. Prices range from $250,000 for smaller homes near UNT to $700,000+ in communities like Robson Ranch." },
    { q: "Is Denton TX a good place to invest in rental property?", a: "Denton has one of the strongest rental markets in North Texas due to the large student population at UNT and TWU. DSCR loans allow investors to qualify based on the property's rental income rather than personal tax returns, making Denton an attractive investment market." },
    { q: "Are there USDA loans available in Denton TX?", a: "Some areas on the outskirts of Denton County may qualify for USDA rural development loans, which offer 0% down payment. Tony Botchev can quickly determine if a specific property address qualifies for USDA financing." },
    { q: "What are the best neighborhoods in Denton TX for families?", a: "Top family-friendly areas in Denton include Robson Ranch (55+ active adult community), Savannah (master-planned with amenities), and the Rayzor Ranch area near the new development corridor. Denton ISD serves most of the city." },
    { q: "How long does mortgage pre-approval take in Denton TX?", a: "With Tony Botchev at DFW Homes & Loans, most Denton buyers receive a pre-approval letter within 24 hours of submitting complete documentation. There is no hard credit pull to start." },
  ],
  nearbyLinks: [
    { city: "Little Elm", href: "/cities/little-elm" },
    { city: "Aubrey", href: "/cities/aubrey" },
    { city: "Celina", href: "/cities/celina" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Frisco", href: "/cities/frisco" },
  ],
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans — Denton TX",
  "description": "Home loans in Denton TX. Tony Botchev NMLS #114198 offers conventional, FHA, VA, jumbo, and DSCR loans to Denton homebuyers and investors.",
  "url": "https://www.dfwhome.loans/cities/denton",
  "areaServed": { "@type": "City", "name": "Denton", "containedInPlace": { "@type": "State", "name": "Texas" } },
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

export default function DentonPage() {
  useSEO({
    title: "Home Loans in Denton TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, jumbo, and DSCR home loans in Denton TX. Tony Botchev (NMLS #114198) serves all of Denton County. Pre-approval in 24 hours.",
    canonical: "https://www.dfwhome.loans/cities/denton",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
