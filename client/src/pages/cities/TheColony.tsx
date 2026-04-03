import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "The Colony", state: "TX", county: "Denton", slug: "the-colony",
  tagline: "Lakefront living, Nebraska Furniture Mart, and one of DFW's best-kept housing secrets.",
  intro: "The Colony TX sits on the southern shore of Lake Lewisville in Denton County, offering buyers an exceptional combination of waterfront lifestyle, strong schools, and competitive home prices. Home to the massive Nebraska Furniture Mart campus and a growing retail and entertainment district, The Colony is one of the most underrated cities in North Texas. Tony Botchev helps The Colony buyers get pre-approved and close with confidence.",
  highlights: [
    { label: "County", value: "Denton" },
    { label: "Median Home Price", value: "~$400,000" },
    { label: "School District", value: "Lewisville ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Stewart Peninsula, The Tribute, Northshore" },
    { label: "New Construction", value: "Yes — lakefront communities" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Most popular loan for The Colony buyers with strong credit.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for The Colony first-time buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in The Colony TX.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for lakefront and luxury homes.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance for qualifying The Colony buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans in The Colony — strong short-term rental potential.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in The Colony TX?", a: "As of 2026, the median home price in The Colony TX is approximately $400,000. Lakefront and golf course properties in communities like The Tribute and Stewart Peninsula can range from $600,000 to $2M+." },
    { q: "Is The Colony TX a good place to buy a home?", a: "The Colony offers an exceptional quality of life at a competitive price point. With Lake Lewisville access, Lewisville ISD schools, and proximity to both Frisco and Plano, it's one of the best values in Denton County." },
    { q: "Are there waterfront homes available in The Colony TX?", a: "Yes. The Colony has several lakefront and lake-access communities including The Tribute (a golf and lake community) and Stewart Peninsula. These properties often require jumbo financing, which Tony Botchev specializes in." },
    { q: "What loan programs are available in The Colony TX?", a: "Tony Botchev offers all major loan programs for The Colony buyers: conventional, FHA, VA, jumbo, DSCR investor loans, and first-time homebuyer programs. Pre-approval typically takes 24 hours." },
    { q: "How far is The Colony TX from Frisco and Plano?", a: "The Colony is approximately 10 minutes from Frisco and 15 minutes from Plano, making it an ideal location for buyers who want more space and lower prices while staying close to major employment centers." },
  ],
  nearbyLinks: [
    { city: "Frisco", href: "/cities/frisco" },
    { city: "Little Elm", href: "/cities/little-elm" },
    { city: "Lewisville", href: "/cities/lewisville" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Celina", href: "/cities/celina" },
  ],
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans — The Colony TX",
  "description": "Home loans in The Colony TX. Tony Botchev NMLS #114198 offers conventional, FHA, VA, jumbo, and DSCR loans to The Colony homebuyers and investors.",
  "url": "https://www.dfwhome.loans/cities/the-colony",
  "areaServed": { "@type": "City", "name": "The Colony", "containedInPlace": { "@type": "State", "name": "Texas" } },
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

export default function TheColonyPage() {
  useSEO({
    title: "Home Loans in The Colony TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, jumbo, and DSCR home loans in The Colony TX. Tony Botchev (NMLS #114198) serves all of Denton County. Pre-approval in 24 hours.",
    canonical: "https://www.dfwhome.loans/cities/the-colony",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
