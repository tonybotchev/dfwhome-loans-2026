import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Lewisville", state: "TX", county: "Denton", slug: "lewisville",
  tagline: "Established Denton County city with great value, Lake Lewisville access, and easy DFW connectivity.",
  intro: "Lewisville TX sits at the heart of Denton County, offering buyers an established community with mature trees, diverse neighborhoods, and excellent access to both Dallas and Fort Worth via I-35E. With Lake Lewisville on its doorstep and a housing market that offers strong value, Lewisville attracts first-time buyers, families, and investors alike. Tony Botchev helps Lewisville buyers get pre-approved quickly and close with confidence.",
  highlights: [
    { label: "County", value: "Denton" },
    { label: "Median Home Price", value: "~$370,000" },
    { label: "School District", value: "Lewisville ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Castle Hills, Old Town, Lakeland Hills" },
    { label: "New Construction", value: "Limited — established neighborhoods" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Best for Lewisville buyers with solid credit and income.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for Lewisville first-time buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in Lewisville TX.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for Lewisville luxury homes.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance for qualifying Lewisville buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment property loans in Lewisville — qualify on rental income.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in Lewisville TX?", a: "As of 2026, the median home price in Lewisville TX is approximately $370,000. Prices range from $280,000 for older single-family homes to $700,000+ in upscale communities like Castle Hills." },
    { q: "Is Lewisville TX a good place to buy a home?", a: "Lewisville offers excellent value in Denton County. Lewisville ISD is a large, well-regarded district, and the city's location on I-35E provides easy access to both Dallas and Fort Worth. Lake Lewisville adds significant lifestyle appeal." },
    { q: "What loan programs are available in Lewisville TX?", a: "Tony Botchev offers all major loan programs in Lewisville: conventional, FHA, VA, jumbo, DSCR investor loans, and first-time homebuyer programs with down payment assistance. Most buyers are pre-approved within 24 hours." },
    { q: "Are there investment properties available in Lewisville TX?", a: "Yes. Lewisville has a strong rental market due to its central DFW location and proximity to major employers. DSCR loans allow investors to qualify based on the property's rental income rather than personal tax returns." },
    { q: "How far is Lewisville TX from Dallas and Fort Worth?", a: "Lewisville is approximately 25 miles north of downtown Dallas (30–40 minutes via I-35E) and 35 miles northeast of downtown Fort Worth (40–50 minutes). It's one of the most centrally located cities in the DFW metroplex." },
  ],
  nearbyLinks: [
    { city: "Little Elm", href: "/cities/little-elm" },
    { city: "Frisco", href: "/cities/frisco" },
    { city: "Denton", href: "/cities/denton" },
    { city: "Aubrey", href: "/cities/aubrey" },
    { city: "Prosper", href: "/cities/prosper" },
  ],
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans — Lewisville TX",
  "description": "Home loans in Lewisville TX. Tony Botchev NMLS #114198 offers conventional, FHA, VA, jumbo, and DSCR loans to Lewisville homebuyers and investors.",
  "url": "https://www.dfwhome.loans/cities/lewisville",
  "areaServed": { "@type": "City", "name": "Lewisville", "containedInPlace": { "@type": "State", "name": "Texas" } },
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

export default function LewisvillePage() {
  useSEO({
    title: "Home Loans in Lewisville TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, jumbo, and DSCR home loans in Lewisville TX. Tony Botchev (NMLS #114198) serves all of Denton County. Pre-approval in 24 hours.",
    canonical: "https://www.dfwhome.loans/cities/lewisville",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
