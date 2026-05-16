import HeroSlider from "@/components/HeroSlider";
import PoolServicesSection from "@/components/PoolServicesSection";
import StatsCounter from "@/components/StatsCounter";
import PoolProductsSection from "@/components/PoolProductsSection";
import WhyChoosePoolCaptain from "@/components/WhyChoosePoolCaptain";
import CommercialResidentialPoolSection from "@/components/CommercialResidentialPoolSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCoverageSection from "@/components/ServiceCoverageSection.jsx"
import FAQComponents from "@/components/FAQComponent.jsx"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <PoolServicesSection />
      <PoolProductsSection />
     
      <StatsCounter />
      <WhyChoosePoolCaptain />
      <CommercialResidentialPoolSection />
      <ServiceCoverageSection />
      <FAQComponents />
      

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  );
}