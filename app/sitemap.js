export default async function sitemap() {
  const baseUrl = "https://poolcaptain.pk";

  // ---------------------------
  // STATIC PAGES
  // ---------------------------
  const staticPages = [
    "",
    "/about",
    "/pool-services",
    "/pool-products",
    "/contact",
    "/gallery",
    "/blogs",
    "/pool-volume-calculator",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // ---------------------------
  // SERVICE PAGES (MANUAL)
  // ---------------------------
  const servicePages = [
    "pool-construction",
    "pool-maintenance",
    "pool-repair",
    "pool-chemicals",
    "filtration-systems",
    "spa-jacuzzi",
    "equipment-supply",

  ];

  const serviceUrls = servicePages.map((slug) => ({
    url: `${baseUrl}/pool-services/${slug}`,
    lastModified: new Date(),
  }));

  // ---------------------------
  // BLOG PAGES (MANUAL)
  // ---------------------------
  const blogPages = [
    "how-to-maintain-swimming-pool",
    "pool-cleaning-tips-karachi",
    "best-pool-design-ideas-2026",
  ];

  const blogUrls = blogPages.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
  }));

  // ---------------------------
  // PRODUCT PAGES (MANUAL)
  // ---------------------------
  const productPages = [
   "minder-pool-filters",
   "laswim-pool-filter","five-star-pool-filter","pool-heat-pumps","electric-pool-water-heater","sauna-heaters","steam-heater","cold-plunge-water-chiller","laswim-pumps"
    ,"minder-pool-pump","leo-pump","pool-brush-nylon","pool-deep-net","pool-chlorine","algaecide","ph-plus-ph-minus","potassium-sulphate"

];

  const productUrls = productPages.map((slug) => ({
    url: `${baseUrl}/pool-products/${slug}`,
    lastModified: new Date(),
  }));

  // ---------------------------
  // FINAL RETURN
  // ---------------------------
  return [
    ...staticUrls,
    ...serviceUrls,
    ...blogUrls,
    ...productUrls,
  ];
}