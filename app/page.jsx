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
    "Pool Captain - Pool Construction || Maintenance || Installation, Best Pool Services in Karachi, Pakistan",
  description:
    "Professional swimming pool construction,pool cleaning and maintenance, pool installation, pool repair and pool equipment supply in karachi.",
  keywords: [
    "pool services karachi",
    "swimming pool cleaning service",
    "best pool swimming cleaning company","swimming pool chemicals","best swimming pool products",
    "pool cleaning services phase 8",
    "pool services phase 2",
    "pool services phase 4",
    "swimming pool maintenance company",
    "best swimming pool cleaning company",
    "best swimming pool cleaning service",
    "top swimming pool maintenance service",
    "pool maintenance services phase 7",
    "swimming pool maintenance Karachi",
    "pool cleaning services karachi",
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
    "pool construction service in karachi",
    "pool construction service",
    "swimming pool construction in dha",
    "swimming pool construction service in karachi",
    "swimming pool construction company",
    "best swimming pool construction service",
    "karachi top swimming pool construction company",

  ],
  openGraph: {
    title: "Pool Captain - A Name of Experts",
    description:
      "Expert swimming pool Construction, maintenance & installation services across Karachi.",
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