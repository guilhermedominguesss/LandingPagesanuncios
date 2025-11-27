import Hero from "@/components/Hero";
import WhyNowSection from "@/components/WhyNowSection";
import PillarsSection from "@/components/PillarsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScarcitySection from "@/components/ScarcitySection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyNowSection />
      <PillarsSection />
      <BenefitsSection />
      <ScarcitySection />
      <Footer />
    </div>
  );
}
