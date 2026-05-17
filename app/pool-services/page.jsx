import ServicesClient from "./ServicesClient";

export const metadata = {
  title:
    "Swimming Pool Services in Karachi | Pool Construction, Maintenance & Repair Pakistan",

  description:
    "Professional swimming pool services in Karachi including pool construction, maintenance, repair, renovation, leak detection, waterproofing, filtration systems, pool cleaning chemicals, chlorine treatment, algaecide services, jacuzzi installation and swimming pool equipment supply across Pakistan.",

  keywords: [
    "swimming pool services Karachi",
    "pool services near me Karachi",
    "pool construction Karachi Pakistan",
    "swimming pool construction Karachi",
    "pool maintenance services Karachi",
    "pool repair services Karachi",
    "pool renovation Karachi Pakistan",
    "swimming pool contractor Karachi",
    "pool builder Karachi Pakistan",
    "jacuzzi installation Karachi",
    "spa construction Karachi Pakistan",
    "pool filtration system Karachi",
    "pool pump installation Karachi",
    "pool equipment supply Karachi",
    "swimming pool equipment dealer Karachi",
    "pool cleaning services Karachi",
    "pool cleaning chemicals Karachi",
    "pool chlorine treatment Karachi",
    "granular chlorine pool Karachi",
    "pool algaecide treatment Karachi",
    "algae removal swimming pool Karachi",
    "pool water treatment services Karachi",
    "pool leak detection Karachi",
    "swimming pool waterproofing Karachi",
    "residential pool services Karachi",
    "commercial pool services Karachi",
    "luxury swimming pool design Karachi",
    "best pool company in Karachi",
    "cheap pool services Karachi Pakistan",
    "swimming pool maintenance near me",
    "pool contractor near me Karachi",
    "pool cleaning accessories in karachi"
  ],

  openGraph: {
    title: "Swimming Pool Services in Karachi | Pool Captain",
    description:
      "Expert swimming pool construction, maintenance, repair, chemicals, filtration systems and jacuzzi installation services in Karachi Pakistan.",
    url: "https://poolcaptain.pk/pool-services",
    siteName: "Pool Captain Pakistan",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}