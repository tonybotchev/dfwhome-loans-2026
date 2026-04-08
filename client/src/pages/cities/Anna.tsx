import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Anna", state: "TX", county: "Collin", slug: "anna",
  tagline: "Affordable North DFW living with room to grow — Anna TX is the next Celina.",
  intro: "Anna TX is one of the most affordable entry points into Collin County, with new construction communities, excellent Anna ISD schools, and quick access to US-75. Home prices remain well below the county median, making it ideal for first-time buyers and investors.",
  highlights: [
    { label: "County", value: "Collin" },
    { label: "Median Home Price", value: "~$360,000" },
    { label: "School District", value: "Anna ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Highway Access", value: "US-75 (Central Expressway)" },
    { label: "New Construction", value: "Yes — multiple active communities" },
  ],
  loanTypes: [
    { name: "FHA Loans", desc: "3.5% down — ideal for Anna first-time buyers.", href: "/loans/fha" },
    { name: "Conventional", desc: "3–20% down for Anna buyers with 620+ credit.", href: "/loans/conventional" },
    { name: "VA Loans", desc: "0% down for veterans buying in Anna.", href: "/loans/va" },
    { name: "First-Time Buyer", desc: "Down payment assistance programs for Anna buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans for Anna rental properties.", href: "/loans/dscr" },
    { name: "Refinance", desc: "Refinance your Anna home to a lower rate.", href: "/loans/refinance" },
  ],
  faqs: [
    { q: "Is Anna TX a good place to buy a home?", a: "Anna TX offers some of the most affordable new construction in Collin County. With strong population growth, improving infrastructure, and proximity to McKinney and Frisco, Anna is an attractive option for buyers priced out of more established markets." },
    { q: "What is the average home price in Anna TX?", a: "As of 2026, the median home price in Anna TX is approximately $360,000 — significantly below the Collin County average, making it one of the best values in North DFW." },
    { q: "What builders are building in Anna TX?", a: "Active builders in Anna include D.R. Horton, Lennar, LGI Homes, and several regional builders. New communities along US-75 offer quick move-in homes and build-to-order options." },
  ],
  nearbyLinks: [
    { city: "Celina", href: "/cities/celina" },
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Melissa", href: "/cities/melissa" },
    { city: "Gunter", href: "/cities/gunter" },
  ],
};

const schema = [{
  "@context": "https://schema.org", "@type": "FinancialService",
  name: "DFW Homes & Loans — Anna TX",
  description: "Home loans in Anna TX. Tony Botchev NMLS #114198.",
  url: "https://www.dfwhome.loans/cities/anna",
  areaServed: { "@type": "City", name: "Anna", containedInPlace: { "@type": "State", name: "Texas" } },
  telephone: "+19453708656",
}];

export default function AnnaPage() {
  useSEO({
    title: "Home Loans in Anna | Simple Financing for Your Home",
    description: "Start your search for home loans in Anna. DFW Homes & Loans offers friendly, local service to help you finance your dream house in this fast-growing Texas city.",
    canonical: "https://www.dfwhome.loans/cities/anna",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
