/* Kinetic Texas — Floating CTA Bar
   Appears after scrolling past hero
*/
import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="https://wa.me/19453708656"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp Tony"
        onClick={() => trackWhatsAppClick()}
      >
        <MessageCircle size={22} color="white" />
      </a>
      <a
        href="tel:+19453708656"
        className="w-12 h-12 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: "oklch(0.62 0.16 42)" }}
        aria-label="Call Tony"
        onClick={() => trackPhoneClick()}
      >
        <Phone size={20} color="oklch(0.975 0.008 85)" />
      </a>
    </div>
  );
}
