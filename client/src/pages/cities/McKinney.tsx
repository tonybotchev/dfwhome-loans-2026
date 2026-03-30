import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "McKinney", state: "TX", county: "Collin", slug: "mckinney",
  tagline: "Collin County's largest city — historic downtown, top schools, and strong home values.",
  intro: "McKinney TX is one of the fastest-growing cities in the US, with a charming historic downtown, excellent Collin County schools, and a diverse housing market ranging from starter homes to luxury estates.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$480,000" },
    { label: "School District", value: "McKinney ISD, Frisco ISD (parts)" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Craig Ranch, Stonebridge Ranch, Adriatica" },
    { label: "New Construction", value: "Yes — active communities" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Most common loan type for McKinney buyers.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for McKinney buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in McKinney.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for McKinney luxury homes.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance for McKinney first-time buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans in McKinney — no tax returns.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in McKinney TX?", a: "As of 2026, the median home price in McKinney TX is approximately $480,000. Prices range from $280,000 for starter homes to $1.5M+ in communities like Stonebridge Ranch." },
    { q: "Is McKinney a good place to invest in real estate?", a: "McKinney has consistently been one of the top cities in the US for population growth and job creation. Strong rental demand and rising home values make it a solid market for investors." },
    { q: "What are the best neighborhoods in McKinney TX?", a: "Top neighborhoods include Stonebridge Ranch (master-planned, golf course), Craig Ranch (resort-style amenities), Adriatica (European-inspired), and the historic downtown area for walkability." },
  ],
  nearbyLinks: [
    { city: "Celina", href: "/cities/celina" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Frisco", href: "/cities/frisco" },
    { city: "Anna", href: "/cities/anna" },
    { city: "Melissa", href: "/cities/melissa" },
  ],
};

const schema = [{
  "@context": "https://schema.org", "@type": "FinancialService",
  name: "DFW Homes & Loans — McKinney TX",
  description: "Home loans in McKinney TX. Tony Botchev NMLS #114198.",
  url: "https://www.dfwhome.loans/cities/mckinney",
  areaServed: { "@type": "City", name: "McKinney", containedInPlace: { "@type": "State", name: "Texas" } },
  telephone: "+19453708656",
}];

export default function McKinneyPage() {
  useSEO({
    title: "Home Loans in McKinney TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, and jumbo home loans in McKinney TX. Tony Botchev (NMLS #114198) serves all of Collin County.",
    canonical: "https://www.dfwhome.loans/cities/mckinney",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
