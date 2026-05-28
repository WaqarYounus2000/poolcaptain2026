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
  // SERVICE PAGES
  // ---------------------------
  const servicePages = [
    "pool-construction",
    "pool-maintenance",
    "pool-repair",
    "pool-chemicals",
    "filtration-systems",
    "equipment-supply",
  ];

  const serviceUrls = servicePages.map((slug) => ({
    url: `${baseUrl}/pool-services/${slug}`,
    lastModified: new Date(),
  }));

  // ---------------------------
  // BLOG PAGES
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
  // PRODUCT CATEGORY PAGES
  // ---------------------------
  const categoryPages = [
    "pool-pumps",
    "pool-cleaning-accessories",
    "pool-filters",
    "pool-heating-systems",
    "pool-lights",
    "pool-chemicals",
    "pool-accessories",
    "sauna-steam-generators-accessories",
    "pool-fountains",
    "cold-plunge",
  ];

  const categoryUrls = categoryPages.map((slug) => ({
    url: `${baseUrl}/pool-products/${slug}`,
    lastModified: new Date(),
  }));

  // ---------------------------
  // PRODUCT PAGES (NESTED)
  // ---------------------------
  const products = {
    "pool-pumps": [
      "laswim-pumps",
      "minder-pool-pumps",
      "lx-pool-pumps",
      "fivestar-pool-pumps",
    ],

    "pool-filters": [
      "minder-pool-filter",
      "aquant-pool-filter",
      "laswim-pool-filter",
      "fivestar-pool-filter",
    ],

    "pool-cleaning-accessories": [
      "deep-net",
      "hose-pipe",
      "nylon-brush",
      "telescopic-pole",
      "test-kit",
      "vacuum-head",
    ],

    "pool-heating-systems": [
      "inverex-alsavo-heat-pump",
      "coates-pool-heat-pump",
      "power-world-heat-pump",
      "fivestar-heat-pump",
    ],

    "pool-lights": [
      "rgb-pool-light",
      "warm-white-pool-light",
      "cool-white-pool-light",
    ],

    "pool-chemicals": [
      "pool-algaecide",
      "pool-chlorine",
      "pool-ph-balancer",
      "potassium-sulphate",
    ],

    "pool-accessories": [
      "pool-ladder",
      "skimmer",
      "pool-vacuum-point",
      "pool-inlet-point",
    ],

    "sauna-steam-generators-accessories": [
      "sauna-steam-generator",
      "sauna-heater",
    ],

    "pool-fountains": [
      "acrylic-pool-fountain",
      "cobra-stainless-steel-pool-fountain",
    ],

    "cold-plunge": [
      "cold-plunge",
    ],
  };

  const productUrls = Object.entries(products).flatMap(
    ([category, slugs]) =>
      slugs.map((slug) => ({
        url: `${baseUrl}/pool-products/${category}/${slug}`,
        lastModified: new Date(),
      }))
  );

  // ---------------------------
  // FINAL RETURN
  // ---------------------------
  return [
    ...staticUrls,
    ...serviceUrls,
    ...blogUrls,
    ...categoryUrls,
    ...productUrls,
  ];
}