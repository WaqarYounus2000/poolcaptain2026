import HeroSlider from "@/components/HeroSlider";
import PoolServicesSection from "@/components/PoolServicesSection";
import StatsCounter from "@/components/StatsCounter";
import PoolProductsSection from "@/components/PoolProductsSection";
import WhyChoosePoolCaptain from "@/components/WhyChoosePoolCaptain";
import CommercialResidentialPoolSection from "@/components/CommercialResidentialPoolSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCoverageSection from "@/components/ServiceCoverageSection.jsx";
import FAQComponent from "@/components/FAQComponent";
import {homefaqs} from "@/data/homefaqs";

// ✅ SEO Metadata (VERY IMPORTANT for Google ranking)
export const metadata = {
  title:
    "Pool Captain | Best Pool Services in Pakistan - Karachi, Lahore, Islamabad",
  description:
    "Professional swimming pool maintenance, pool cleaning, pool installation, pool repair and pool equipment services in Pakistan. Serving Karachi DHA, Behria town, Nazimabad, Lahore, Islamabad and all major cities with expert pool technicians.",
  keywords: [
    "pool services karachi",
    "pool vacuuming services near me",
    "pool cleaning services phase 8",
    "pool services phase 2",
    "pool services phase 4",
    "pool maintenance services phase 7",
    "swimming pool maintenance Karachi",
    "pool cleaning karachi",
    "pool repair karachi",
    "pool installation services karachi",
    "commercial pool services in karachi",
    "best pool services in karachi",
    "residential swimming pool maintenance",
    "pool equipment suppliers karachi",
    "best pool equipment suppliers karachi",
    "pool filters pumps motors karachi",
    "pool filters pumps motors near me",
    "best pool company Karachi",
    "top pool maintenance company near me ",
    "top pool construction company karachi",
    "best pool construction company karachi",
    "pool repair services company in karachi",

  ],
  openGraph: {
    title: "Pool Captain - A Name of Experts",
    description:
      "Expert swimming pool maintenance and installation services across Pakistan.",
    url: "https://poolcaptain.pk",
    siteName: "Pool Captain",
    type: "website",
  },
};

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
      <FAQComponent faqs={homefaqs} />
      

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  );
}