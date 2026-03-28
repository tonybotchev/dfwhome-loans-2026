/* Kinetic Texas — Testimonials Section
   Scrolling marquee of review cards
   Forest green background
*/
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Tony made our first home purchase so smooth. Pre-approved in 18 hours, closed in 21 days.",
    name: "Sarah M.",
    location: "Celina, TX",
    type: "Conventional Loan",
  },
  {
    quote: "Used my VA benefit for the first time. Tony explained everything, zero down, closed fast.",
    name: "Marcus J.",
    location: "McKinney, TX",
    type: "VA Loan",
  },
  {
    quote: "As an investor, DSCR was new to me. Tony walked me through it perfectly. Second property funded.",
    name: "David R.",
    location: "Frisco, TX",
    type: "DSCR Loan",
  },
  {
    quote: "Relocated from Seattle — Tony knew the Prosper market inside out. Highly recommend.",
    name: "Jennifer K.",
    location: "Prosper, TX",
    type: "Jumbo Loan",
  },
  {
    quote: "Fastest pre-approval I've ever seen. Tony responded on a Saturday evening. Unbelievable service.",
    name: "Robert T.",
    location: "Anna, TX",
    type: "FHA Loan",
  },
  {
    quote: "Tony saved us $400/month on our refinance. Wish we'd called him sooner.",
    name: "Lisa & Mike P.",
    location: "Melissa, TX",
    type: "Refinance",
  },
  {
    quote: "No pressure, no games. Just honest advice and a great rate. Tony is the real deal.",
    name: "Carlos V.",
    location: "Celina, TX",
    type: "Conventional Loan",
  },
  {
    quote: "Our builder's lender quoted us 7.5%. Tony got us 6.875%. That's real money saved.",
    name: "Amanda H.",
    location: "Frisco, TX",
    type: "Conventional Loan",
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 p-6 mx-3"
      style={{
        background: "oklch(0.35 0.07 155)",
        border: "1px solid oklch(0.975 0.008 85 / 0.1)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="oklch(0.62 0.16 42)" color="oklch(0.62 0.16 42)" />
        ))}
      </div>
      <p
        className="font-['Outfit'] text-sm leading-relaxed mb-5 italic"
        style={{ color: "oklch(0.88 0.01 85)" }}
      >
        "{review.quote}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-['Outfit'] font-700 text-sm" style={{ color: "oklch(0.975 0.008 85)" }}>
            {review.name}
          </p>
          <p className="font-['Outfit'] text-xs" style={{ color: "oklch(0.78 0.02 85)" }}>
            {review.location}
          </p>
        </div>
        <span
          className="font-['Outfit'] text-xs font-600 uppercase tracking-wider px-2 py-1"
          style={{
            background: "oklch(0.62 0.16 42 / 0.2)",
            color: "oklch(0.62 0.16 42)",
            border: "1px solid oklch(0.62 0.16 42 / 0.3)",
          }}
        >
          {review.type}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...reviews, ...reviews];

  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "oklch(0.26 0.065 155)" }}
    >
      <div className="container mb-12">
        <p
          className="font-['Outfit'] text-xs uppercase tracking-[0.3em] mb-4"
          style={{ color: "oklch(0.62 0.16 42)" }}
        >
          Social Proof
        </p>
        <h2
          className="font-display leading-none"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            color: "oklch(0.975 0.008 85)",
          }}
        >
          WHAT NORTH DFW
          <br />
          <span style={{ color: "oklch(0.62 0.16 42)" }}>FAMILIES ARE SAYING</span>
        </h2>
        <p
          className="font-['Outfit'] text-base mt-4 max-w-lg"
          style={{ color: "oklch(0.78 0.02 85)" }}
        >
          Real results from real homebuyers across Celina, Prosper, Frisco, and McKinney.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
        {/* Fade edges */}
        <div
          className="absolute top-0 left-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, oklch(0.26 0.065 155), transparent)" }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, oklch(0.26 0.065 155), transparent)" }}
        />
      </div>
    </section>
  );
}
