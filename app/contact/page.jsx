import ContactClient from "./ContactClient";

export const metadata = {
  metadataBase: new URL("https://poolcaptain.pk"),

  title: "Contact Pool Captain | Premium Pool Services Karachi",

  description:
    "Swimming pool construction, maintenance, cleaning, repair and renovation services in Karachi, Pakistan.",

  alternates: {
    canonical: "/contact",
  },

  keywords: [
    "pool services Karachi",
    "pool captain contact",
    "pool construction Pakistan",
    "pool repair Karachi",
  ],
};
export default function Page() {
  return <ContactClient />;
}