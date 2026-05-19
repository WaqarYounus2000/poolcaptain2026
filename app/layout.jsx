import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Pool Captain",
      description:
        "Swimming pool construction, maintenance and repair services in Karachi",
      url: "https://poolcaptain.pk",
      telephone: "+923002538642",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      areaServed: "Karachi",
    }),
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title:
    "Pool Captain | Swimming Pool Construction & Maintenance Services in Karachi",
  description:
    "Swimming pool construction, maintenance, repair and waterproofing services in Karachi with 30+ years experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          {children}

          {/* FOOTER */}
          <Footer />


        {/* 🔥 SEO JSON-LD SCRIPT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pool Captain",
              description:
                "Swimming pool construction, maintenance, repair, waterproofing and equipment supply in Karachi.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              areaServed: "Karachi",
              telephone: "+923002538642",
              priceRange: "$$",
              service: [
                "Pool Construction",
                "Pool Maintenance",
                "Pool Repair",
                "Pool Plumbing",
                "Pool Tiling",
                "Pool cleaning accessories",
                "Pool equipment",
                "sauna steam room construction karachi",
              ],
            }),
          }}
        />
         <Analytics />
         <SpeedInsights />
      </body>
    </html>
  );
}


// app/layout.tsx

