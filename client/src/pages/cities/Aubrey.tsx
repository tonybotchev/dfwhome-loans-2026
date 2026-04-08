import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Aubrey", state: "TX", county: "Denton", slug: "aubrey",
  tagline: "Denton County's affordable alternative to Celina — with the same North DFW growth story.",
  intro: "Aubrey TX is a fast-growing Denton County community offering affordable new construction, Aubrey ISD schools, and quick access to the Dallas North Tollway and US-380. It's one of the best-value markets in the DFW metroplex.",
  highlights: [
    { label: "County", value: "Denton" },
    { label: "Median Home Price", value: "~$380,000" },
    { label: "School District", value: "Aubrey ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Highway Access", value: "Dallas North Tollway, US-380" },
    { label: "New Construction", value: "Yes — multiple active communities" },
  ],
  loanTypes: [
    { name: "FHA Loans", desc: "3.5% down — popular for Aubrey first-time buyers.", href: "/loans/fha" },
    { name: "Conventional", desc: "3–20% down for Aubrey buyers.", href: "/loans/conventional" },
    { name: "VA Loans", desc: "0% down for veterans buying in Aubrey.", href: "/loans/va" },
    { name: "First-Time Buyer", desc: "Down payment assistance for Aubrey buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans for Aubrey rental properties.", href: "/loans/dscr" },
    { name: "Refinance", desc: "Refinance your Aubrey home to a lower rate.", href: "/loans/refinance" },
  ],
  faqs: [
    { q: "What is the average home price in Aubrey TX?", a: "As of 2026, the median home price in Aubrey TX is approximately $380,000. New construction communities along the Dallas North Tollway corridor offer homes from $320,000 to $600,000+." },
    { q: "Is Aubrey TX a good place to buy a home?", a: "Aubrey offers some of the best value in Denton County. With rapid growth, improving infrastructure, and proximity to Celina, Prosper, and the Tollway corridor, Aubrey is an attractive option for value-conscious buyers." },
    { q: "What school district serves Aubrey TX?", a: "Most of Aubrey is served by Aubrey ISD. Some newer communities near the Celina border may be served by Celina ISD. Tony Botchev can help you confirm the school district for any specific property." },
  ],
  nearbyLinks: [
    { city: "Celina", href: "/cities/celina" },
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Gunter", href: "/cities/gunter" },
    { city: "Little Elm", href: "/cities/little-elm" },
  ],
};

const schema = [{
  "@context": "https://schema.org", "@type": "FinancialService",
  name: "DFW Homes & Loans — Aubrey TX",
  description: "Home loans in Aubrey TX. Tony Botchev NMLS #114198.",
  url: "https://www.dfwhome.loans/cities/aubrey",
  areaServed: { "@type": "City", name: "Aubrey", containedInPlace: { "@type": "State", name: "Texas" } },
  telephone: "+19453708656",
}];

export default function AubreyPage() {
  useSEO({
    title: "Home Financing in Aubrey, Texas | Your Local Lender",
    description: "Moving to the horse capital of Texas? DFW Homes & Loans offers mortgage options in Aubrey, TX, to help you buy your next home with confidence and ease.",
    canonical: "https://www.dfwhome.loans/cities/aubrey",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
