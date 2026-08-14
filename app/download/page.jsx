import PoolCatalogueDownload from "@/components/PoolCatalogueDownload";

export const metadata = {
  metadataBase: new URL("https://poolcaptain.pk"),

  title: "Pool Catalogue | Swimming Pool Products & Equipment | Pool Captain",

  description:
    "Download the Pool Captain swimming pool catalogue featuring pool equipment, pumps, filters, chemicals, accessories and swimming pool products in Karachi, Pakistan.",

  alternates: {
    canonical: "/download",
  },
};

export default function Page() {
  return (
    <>
      <PoolCatalogueDownload />
    </>
  );
}