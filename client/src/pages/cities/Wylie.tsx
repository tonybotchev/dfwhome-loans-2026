import CityPageTemplate, { CityPageData } from "@/components/CityPageTemplate";
import { useSEO } from "@/hooks/useSEO";

const data: CityPageData = {
  city: "Wylie", state: "TX", county: "Collin", slug: "wylie",
  tagline: "Affordable Collin County living with small-town charm and big-city access.",
  intro: "Wylie TX offers some of the best value in Collin County — a tight-knit community with excellent schools, a charming historic downtown, and a housing market that still has room to grow. Located just east of Plano and Garland along US-78, Wylie gives buyers more home for their money while staying connected to the broader DFW job market. Tony Botchev helps Wylie buyers find the right loan and close fast.",
  highlights: [
    { label: "County", value: "Collin / Rockwall / Dallas" },
    { label: "Median Home Price", value: "~$390,000" },
    { label: "School District", value: "Wylie ISD" },
    { label: "Conforming Loan Limit", value: "$766,550" },
    { label: "Notable Areas", value: "Bozman Farm, Inspiration, Downtown Wylie" },
    { label: "New Construction", value: "Yes — active communities" },
  ],
  loanTypes: [
    { name: "Conventional", desc: "Most popular loan for Wylie buyers with stable income and credit.", href: "/loans/conventional" },
    { name: "FHA Loans", desc: "3.5% down for Wylie first-time buyers with 580+ credit.", href: "/loans/fha" },
    { name: "VA Loans", desc: "0% down for veterans buying in Wylie TX.", href: "/loans/va" },
    { name: "Jumbo", desc: "Loans above $766,550 for larger Wylie properties.", href: "/loans/jumbo" },
    { name: "First-Time Buyer", desc: "Down payment assistance programs for qualifying Wylie buyers.", href: "/loans/first-time-buyer" },
    { name: "DSCR Investor", desc: "Investment property loans in Wylie — qualify on rental income.", href: "/loans/dscr" },
  ],
  faqs: [
    { q: "What is the average home price in Wylie TX?", a: "As of 2026, the median home price in Wylie TX is approximately $390,000 — offering strong value compared to neighboring Plano and McKinney. New construction communities like Bozman Farm and Inspiration offer homes from $350,000 to $600,000+." },
    { q: "Is Wylie TX a good place to buy a home?", a: "Wylie is one of the most underrated cities in Collin County. Wylie ISD is highly rated, the community is growing steadily, and home prices remain more accessible than neighboring cities. It's an excellent choice for first-time buyers and growing families." },
    { q: "What loan programs are available for Wylie TX homebuyers?", a: "Tony Botchev offers conventional, FHA, VA, jumbo, DSCR, and first-time homebuyer loans in Wylie. Many Wylie buyers qualify for Collin County down payment assistance programs. Pre-approval takes as little as 24 hours." },
    { q: "Are there new construction homes in Wylie TX?", a: "Yes. Wylie has several active new construction communities including Bozman Farm and Inspiration. Tony Botchev works with buyers purchasing new construction and can help you understand builder incentives versus independent financing options." },
    { q: "How far is Wylie TX from downtown Dallas?", a: "Wylie is approximately 25–30 miles northeast of downtown Dallas, typically a 35–45 minute commute depending on traffic. It's also conveniently located near Garland, Sachse, and Murphy for additional employment and retail access." },
  ],
  nearbyLinks: [
    { city: "McKinney", href: "/cities/mckinney" },
    { city: "Plano", href: "/cities/plano" },
    { city: "Allen", href: "/cities/allen" },
    { city: "Anna", href: "/cities/anna" },
    { city: "Melissa", href: "/cities/melissa" },
  ],
};

const schema = [{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans — Wylie TX",
  "description": "Home loans in Wylie TX. Tony Botchev NMLS #114198 offers conventional, FHA, VA, jumbo, and DSCR loans to Wylie homebuyers and investors.",
  "url": "https://www.dfwhome.loans/cities/wylie",
  "areaServed": { "@type": "City", "name": "Wylie", "containedInPlace": { "@type": "State", "name": "Texas" } },
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

export default function WyliePage() {
  useSEO({
    title: "Home Loans in Wylie TX | Tony Botchev NMLS #114198 | DFW Homes & Loans",
    description: "Conventional, FHA, VA, jumbo, and DSCR home loans in Wylie TX. Tony Botchev (NMLS #114198) serves all of Collin County. Pre-approval in 24 hours.",
    canonical: "https://www.dfwhome.loans/cities/wylie",
    schema: schema as Record<string, unknown>[],
  });
  return <CityPageTemplate data={data} />;
}
