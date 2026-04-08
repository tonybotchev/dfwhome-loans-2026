import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Frisco", state: "TX", county: "Collin", slug: "frisco",
  tagline: "The sports capital of North DFW — and one of the most competitive mortgage markets in Texas.",
  intro: "Frisco TX is home to the Dallas Cowboys' headquarters, PGA Frisco, FC Dallas, and some of the top-rated schools in Texas. With a population over 230,000 and median home prices around $550,000, Frisco requires a lender who moves fast.",
  highlights: [
    { label: "County", value: "Collin & Denton" },
    { label: "Median Home Price", value: "~$550,000" },
    { label: "School Districts", value: "Frisco ISD, Little Elm ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Major Employers", value: "Toyota, Liberty Mutual, PGA of America" },
    { label: "New Construction", value: "Yes — active communities available" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "3–20% down. Most common loan type for Frisco buyers.", href: "/loans/conventional" },
    { name: "Jumbo", desc: "Loans above $766,550 for Frisco luxury homes.", href: "/loans/jumbo" },
    { name: "VA Loans", desc: "0% down for veterans buying in Frisco.", href: "/loans/va" },
    { name: "FHA Loans", desc: "3.5% down for Frisco buyers with 580+ credit.", href: "/loans/fha" },
    { name: "First-Time Buyer", desc: "Down payment assistance for Frisco first-time buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment loans in Frisco — no income verification.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in Frisco TX?", a: "As of 2026, the median home price in Frisco TX is approximately $550,000. Prices range from $350,000 for older homes to $1.5M+ in luxury communities near PGA Frisco." },
    { q: "Is Frisco a good place to buy a home in 2026?", a: "Frisco consistently ranks among the top cities in the US for job growth, school quality, and quality of life. Despite higher prices, strong demand and limited inventory have historically supported home values." },
    { q: "What school districts serve Frisco TX?", a: "Most of Frisco is served by Frisco ISD, which is consistently rated among the top school districts in Texas. Parts of western Frisco fall within Little Elm ISD." },
    { q: "How competitive is the Frisco real estate market?", a: "Frisco is one of the most competitive markets in North DFW. Homes in desirable neighborhoods often receive multiple offers. Having a pre-approval letter from Tony Botchev before you make an offer is essential." },
  ],
  nearbyLinks: [
    { city: "Prosper", href: "/cities/prosper" },
    { city: "Celina", href: "/cities/celina" },
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Little Elm", href: "/cities/little-elm" },
  ],
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "DFW Homes & Loans — Frisco TX",
    description: "Home loans in Frisco TX. Conventional, jumbo, VA, FHA. Tony Botchev NMLS #114198.",
    url: "https://www.dfwhome.loans/cities/frisco",
    areaServed: { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
    telephone: "+19453708656",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function FriscoPage() {
  useSEO({
    title: "Home Loans in Frisco | Fast & Reliable Home Financing",
    description: "Get pre-approved for home loans in Frisco. DFW Homes & Loans works with you to navigate the competitive Frisco market & secure a mortgage that fits your budget.",
    canonical: "https://www.dfwhome.loans/cities/frisco",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
