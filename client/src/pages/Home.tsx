/* Kinetic Texas — Main Home Page
   All sections assembled in order
*/
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoanPrograms from "@/components/LoanPrograms";
import AboutTony from "@/components/AboutTony";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import PreApproval from "@/components/PreApproval";
import PreQualForm from "@/components/PreQualForm";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import AEOContent from "@/components/AEOContent";
import BookingWidget from "@/components/BookingWidget";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.008 85)" }}>
      <Navbar />
      <Hero />
      <LoanPrograms />
      <AboutTony />
      <Process />
      <Testimonials />
      <PreApproval />
      <PreQualForm />
      <Calculator />
      <FAQ />
      <BookingWidget />
      <AEOContent />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
