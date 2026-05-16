// app/about-us/page.jsx

import AboutUsClient from "./AboutUsClient";

export const metadata = {
  metadataBase: new URL("https://poolcaptain.pk"),

  title:
    "About Pool Captain | Swimming Pool Company in Karachi Pakistan",

  description:
    "Pool Captain is a leading swimming pool company in Karachi Pakistan providing swimming pool construction, maintenance, renovation, jacuzzi, sauna, spa engineering, filtration systems and commercial pool solutions.",

  keywords: [
    "swimming pool company Karachi",
    "pool construction Pakistan",
    "pool maintenance Karachi",
    "luxury swimming pools Karachi",
    "pool renovation Pakistan",
    "jacuzzi installation Pakistan",
    "sauna installation Karachi",
    "spa construction Pakistan",
    "commercial swimming pools",
    "pool filtration systems",
    "Pool Captain Pakistan",
  ],

  alternates: {
    canonical: "https://poolcaptain.pk/about-us",
  },

  openGraph: {
    title:
      "Pool Captain | Swimming Pool Construction & Maintenance Pakistan",

    description:
      "Trusted swimming pool construction and maintenance company in Karachi Pakistan.",

    url: "https://poolcaptain.pk/about-us",

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