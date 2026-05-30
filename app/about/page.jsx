// app/about-us/page.jsx

import AboutUsClient from "./AboutUsClient";

export const metadata = {
  metadataBase: new URL("https://poolcaptain.pk"),

  title:
    "About Pool Captain | Swimming Pool Company in Karachi, Pakistan",

  description:
    "Pool Captain is a leading swimming pool company in Karachi providing swimming pool construction, pool maintenance, pool renovation & equipment supply",
  keywords: [
    "swimming pool company Karachi",
    "pool construction Pakistan",
    "pool maintenance Karachi",
    "best pool cleaning services karachi pakistan",
    "pool renovation karachi",
    "jacuzzi installation karachi",
    "sauna installation Karachi",
    "spa construction karachi",
    "commercial swimming pools service karachi",
    "pool filtration systems",
    "best pool construction in karachi",
    "Pool construction in phase 8 dha",
    "Pool maintenance in dha karachi",
    "Pool cleaning service in karachi",
    "Pool cleaning in phase 2 ",
    "Pool vacuuming service in dha karachi",
    "Pool cleaning accessories karachi",
    "best pool chemical supply karachi dha",
    "best pool maintenance company dha karachi",
    "pool construction in phase 8",
    "pool constructionn near me",
    "pool maintenance service near me",
    "pool cleaning service near me",
  ],


  openGraph: {
    title:
      "Pool Captain | Swimming Pool Construction & Maintenance Pakistan",

    description:
      "Trusted swimming pool construction and maintenance company in Karachi Pakistan.",

    url: "https://poolcaptain.pk/about",

    siteName: "Pool Captain",

    locale: "en_PK",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pool Captain | Swimming Pool Experts in Pakistan",

    description:
      "Professional swimming pool construction, maintenance, jacuzzi and sauna solutions.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AboutUsClient />;
}