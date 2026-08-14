export const metadata = {
  metadataBase: new URL("https://poolcaptain.pk"),

  title: "Pool Captain Gallery | Swimming Pool Projects in Karachi",

  description:
    "Explore premium swimming pool projects, jacuzzi installations, steam rooms and pool equipment and accessories by Pool Captain.",

  alternates: {
    canonical: "/gallery",
  },
};

import GalleryWrapper from "./GalleryWrapper";

export default function Page() {
  return <GalleryWrapper />;
}