import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Swimming Pool Services in Karachi | Construction, Maintenance, Repair",
  description:
    "Professional swimming pool services in Karachi Pakistan including pool construction, maintenance, repair, renovation, chemical treatment, filtration systems, jacuzzi installation and equipment supply.",
  keywords:
    "swimming pool services Karachi, pool construction Pakistan, pool maintenance Karachi, pool repair services, pool renovation Pakistan, jacuzzi installation, pool chemical treatment, filtration systems, pool equipment supply",
  openGraph: {
    title: "Swimming Pool Services | Pool Captain Pakistan",
    description:
      "Complete swimming pool solutions including construction, maintenance, repair and spa services in Karachi Pakistan.",
    url: "https://poolcaptain.pk/pool-products",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}