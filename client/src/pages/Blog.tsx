/**
 * DESIGN SYSTEM: Kinetic Texas — Bold geometric Swiss typography meets Texas energy
 * Palette: Warm cream (#FAF7F2), Deep forest green, Burnt orange accent (#C4521A)
 * Typography: Bebas Neue (display) + Outfit (body)
 * Layout: Asymmetric, editorial, diagonal accents
 */

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: "spring-2026-dfw-housing-market",
    slug: "spring-2026-dfw-housing-market",
    title: "Spring 2026 DFW Housing Market: What North Texas Buyers Need to Know",
    excerpt:
      "Inventory is rising in Celina, Prosper, and Frisco — but rates are still the wildcard. Here's what the data says and how to position yourself before summer competition heats up.",
    category: "Market Update",
    date: "March 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    featured: true,
    schema: {
      "@type": "BlogPosting",
      headline: "Spring 2026 DFW Housing Market: What North Texas Buyers Need to Know",
      datePublished: "2026-03-28",
      dateModified: "2026-03-28",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "Inventory is rising in Celina, Prosper, and Frisco — but rates are still the wildcard. Here's what the data says and how to position yourself before summer competition heats up.",
      url: "https://www.dfwhome.loans/blog/spring-2026-dfw-housing-market",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/spring-2026-dfw-housing-market",
    },
  },
  {
    id: "fha-vs-conventional-celina-tx",
    slug: "fha-vs-conventional-celina-tx",
    title: "FHA vs. Conventional Loans in Celina TX: Which Is Right for You in 2026?",
    excerpt:
      "With new build communities exploding in Celina and Prosper, first-time buyers are constantly asking: FHA or Conventional? The answer depends on 3 key numbers — here's how to figure it out.",
    category: "Loan Education",
    date: "March 21, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    featured: false,
    schema: {
      "@type": "BlogPosting",
      headline: "FHA vs. Conventional Loans in Celina TX: Which Is Right for You in 2026?",
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "With new build communities exploding in Celina and Prosper, first-time buyers are constantly asking: FHA or Conventional? The answer depends on 3 key numbers.",
      url: "https://www.dfwhome.loans/blog/fha-vs-conventional-celina-tx",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/fha-vs-conventional-celina-tx",
    },
  },
  {
    id: "down-payment-myths-north-dfw",
    slug: "down-payment-myths-north-dfw",
    title: "5 Down Payment Myths That Are Keeping North DFW Buyers on the Sidelines",
    excerpt:
      "\"I need 20% down\" is the most expensive myth in real estate. In 2026, qualified buyers in Frisco, McKinney, and Celina can get into a home with as little as 3% — sometimes less.",
    category: "First-Time Buyers",
    date: "March 14, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    featured: false,
    schema: {
      "@type": "BlogPosting",
      headline: "5 Down Payment Myths That Are Keeping North DFW Buyers on the Sidelines",
      datePublished: "2026-03-14",
      dateModified: "2026-03-14",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "5 down payment myths that are keeping North DFW buyers on the sidelines. Qualified buyers can get into a home with as little as 3% down.",
      url: "https://www.dfwhome.loans/blog/down-payment-myths-north-dfw",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/down-payment-myths-north-dfw",
    },
  },
  {
    id: "dscr-loans-dfw-investors",
    slug: "dscr-loans-dfw-investors",
    title: "DSCR Loans in DFW: The Investor's Secret Weapon for 2026",
    excerpt:
      "Debt Service Coverage Ratio loans let real estate investors qualify based on rental income — not personal income. If you're building a portfolio in North Texas, this is the loan you need to understand.",
    category: "Investment",
    date: "March 7, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    featured: false,
    schema: {
      "@type": "BlogPosting",
      headline: "DSCR Loans in DFW: The Investor's Secret Weapon for 2026",
      datePublished: "2026-03-07",
      dateModified: "2026-03-07",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "DSCR loans let real estate investors qualify based on rental income — not personal income. If you're building a portfolio in North Texas, this is the loan you need.",
      url: "https://www.dfwhome.loans/blog/dscr-loans-dfw-investors",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/dscr-loans-dfw-investors",
    },
  },
];

const categoryColors: Record<string, string> = {
  "Market Update": "bg-orange-100 text-orange-800",
  "Loan Education": "bg-green-100 text-green-800",
  "First-Time Buyers": "bg-blue-100 text-blue-800",
  Investment: "bg-purple-100 text-purple-800",
};

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  // Inject BlogPosting schemas
  const schemasJson = JSON.stringify(blogPosts.map((p) => p.schema));

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.008 85)" }}>
      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "DFW Homes & Loans — Mortgage Insights",
            description:
              "Expert mortgage advice for North DFW homebuyers and investors. Market updates, loan education, and local real estate insights from Tony Botchev.",
            url: "https://www.dfwhome.loans/blog",
            publisher: {
              "@type": "Organization",
              name: "DFW Homes & Loans",
              url: "https://www.dfwhome.loans",
            },
            blogPost: blogPosts.map((p) => p.schema),
          }),
        }}
      />

      <Navbar />

      {/* Page Header */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ background: "oklch(0.18 0.02 85)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-1 w-12"
              style={{ background: "oklch(0.62 0.16 42)" }}
            />
            <span
              className="font-['Outfit'] text-sm font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.62 0.16 42)" }}
            >
              Mortgage Insights
            </span>
          </div>
          <h1
            className="font-display text-6xl md:text-8xl leading-none mb-4"
            style={{ color: "oklch(0.975 0.008 85)" }}
          >
            THE BLOG
          </h1>
          <p
            className="font-['Outfit'] text-lg max-w-xl"
            style={{ color: "oklch(0.65 0.02 85)" }}
          >
            Real talk on DFW mortgages, market conditions, and how to get the
            best loan for your situation. No fluff.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="grid md:grid-cols-2 gap-0 overflow-hidden"
            style={{ borderRadius: "4px" }}
          >
            <div className="relative h-72 md:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <span
                className="absolute top-4 left-4 font-['Outfit'] text-xs font-bold tracking-widest uppercase px-3 py-1"
                style={{
                  background: "oklch(0.62 0.16 42)",
                  color: "white",
                  borderRadius: "2px",
                }}
              >
                Featured
              </span>
            </div>
            <div
              className="p-10 flex flex-col justify-between"
              style={{ background: "oklch(0.18 0.02 85)" }}
            >
              <div>
                <span
                  className={`inline-block font-['Outfit'] text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4 ${
                    categoryColors[featured.category]
                  }`}
                  style={{ borderRadius: "2px" }}
                >
                  {featured.category}
                </span>
                <h2
                  className="font-display text-3xl md:text-4xl leading-tight mb-4"
                  style={{ color: "oklch(0.975 0.008 85)" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="font-['Outfit'] text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.65 0.02 85)" }}
                >
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-4 font-['Outfit'] text-xs"
                  style={{ color: "oklch(0.55 0.02 85)" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <Link href={`/blog/${featured.slug}`}>
                  <button
                    className="flex items-center gap-2 font-['Outfit'] text-sm font-semibold transition-all hover:gap-3"
                    style={{ color: "oklch(0.62 0.16 42)" }}
                  >
                    Read Article <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden flex flex-col"
                style={{
                  background: "white",
                  borderRadius: "4px",
                  border: "1px solid oklch(0.92 0.004 286.32)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`font-['Outfit'] text-xs font-bold tracking-widest uppercase px-2 py-0.5 ${
                        categoryColors[post.category]
                      }`}
                      style={{ borderRadius: "2px" }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    className="font-display text-xl leading-tight mb-3 flex-1"
                    style={{ color: "oklch(0.18 0.02 85)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="font-['Outfit'] text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.45 0.015 85)" }}
                  >
                    {post.excerpt.slice(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div
                      className="flex items-center gap-3 font-['Outfit'] text-xs"
                      style={{ color: "oklch(0.55 0.02 85)" }}
                    >
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <button
                        className="flex items-center gap-1 font-['Outfit'] text-xs font-semibold transition-all hover:gap-2"
                        style={{ color: "oklch(0.62 0.16 42)" }}
                      >
                        Read <ArrowRight size={12} />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-10 text-center"
            style={{
              background: "oklch(0.18 0.02 85)",
              borderRadius: "4px",
            }}
          >
            <h3
              className="font-display text-4xl mb-3"
              style={{ color: "oklch(0.975 0.008 85)" }}
            >
              READY TO GET PRE-QUALIFIED?
            </h3>
            <p
              className="font-['Outfit'] text-sm mb-6"
              style={{ color: "oklch(0.65 0.02 85)" }}
            >
              Stop reading about mortgages and start getting one. Takes 5 minutes.
            </p>
            <Link href="/#prequal">
              <button
                className="font-['Outfit'] font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all hover:opacity-90"
                style={{
                  background: "oklch(0.62 0.16 42)",
                  color: "white",
                  borderRadius: "2px",
                }}
              >
                Get Pre-Qualified Free →
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
