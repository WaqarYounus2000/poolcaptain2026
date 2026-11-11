
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "*.localhost",
  ],
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poolcaptain2026.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "poolproducts.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "poolservicesimages.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "blockimages.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },

  async redirects() {
    const permanentRedirects = [
      // =================================
      // HOME
      // =================================

      ["/Home", "/"],

      // =================================
      // ABOUT
      // =================================

      ["/aboutus", "/about"],
      ["/about-us", "/about"],

      // =================================
      // CONTACT
      // =================================

      ["/contactus", "/contact"],
      ["/contact-us", "/contact"],
      ["/Contact Us", "/contact"],

      // =================================
      // GALLERY
      // =================================

  

      // =================================
      // CALCULATOR
      // =================================

      ["/tools", "/pool-volume-calculator"],
      ["/pool-measurements", "/pool-volume-calculator"],
      ["/pool-volume-calculation", "/pool-volume-calculator"],

      // =================================
      // BLOGS
      // =================================

      [
        "/blog/pool-filter-pump-sizing-guide",
        "/blogs/pool-filter-pump-sizing-guide",
      ],

      [
        "/blog/pool-lighting",
        "/blogs/rgb-vs-warm-white-vs-cool-white-pool-lights",
      ],

      [
        "/blogs/how-to-maintain-swimming-pool",
        "/blogs/how-to-maintain-swimming-pool-chlorine-in-karachi-weather",
      ],

      [
        "/blogs/pool-cleaning-tips-karachi",
        "/blogs/best-swimming-pool-cleaning-equipment-karachi",
      ],

      // No exact equivalent for this old article.
      [
        "/blogs/best-pool-design-ideas-2026",
        "/blogs",
      ],

      // =================================
      // MAIN PRODUCT CATEGORIES
      // =================================

      ["/swimming-pool-products", "/pool-products"],

      [
        "/swimming-pool-products/poolpumps",
        "/pool-products/pool-pumps",
      ],

      [
        "/swimming-pool-products/poolfilters",
        "/pool-products/pool-filters",
      ],

      [
        "/swimming-pool-products/waterheaters",
        "/pool-products/pool-heating-systems",
      ],

      [
        "/swimming-pool-products/heatpumps",
        "/pool-products/pool-heating-systems",
      ],

      [
        "/swimming-pool-products/steamheaters",
        "/pool-products/sauna-steam-generators-accessories",
      ],

      [
        "/swimming-pool-products/saunaheaters",
        "/pool-products/sauna-steam-generators-accessories",
      ],

      [
        "/swimming-pool-products/equipment",
        "/pool-products/pool-accessories",
      ],

      [
        "/pool-accessories",
        "/pool-products/pool-accessories",
      ],

      // =================================
      // POOL PUMPS
      // =================================

      [
        "/swimming-pool-products/poolpumps/Leo",
        "/pool-products/pool-pumps/leo-pool-pumps",
      ],

      [
        "/swimming-pool-products/pool-pumps/Leo",
        "/pool-products/pool-pumps/leo-pool-pumps",
      ],

      [
        "/swimming-pool-products/poolpumps/Minder",
        "/pool-products/pool-pumps/minder-pool-pumps",
      ],

      [
        "/swimming-pool-products/pool-pumps/Minder",
        "/pool-products/pool-pumps/minder-pool-pumps",
      ],

      [
        "/swimming-pool-products/poolpumps/MicPool",
        "/pool-products/pool-pumps",
      ],

      [
        "/swimming-pool-products/poolpumps/Hydro",
        "/pool-products/pool-pumps",
      ],

      // =================================
      // POOL FILTERS
      // =================================

      [
        "/swimming-pool-products/poolfilters/Laswim",
        "/pool-products/pool-filters/laswim-pool-filter",
      ],

      [
        "/swimming-pool-products/poolfilters/Gemas",
        "/pool-products/pool-filters",
      ],

      [
        "/swimming-pool-products/poolfilters/Minder",
        "/pool-products/pool-filters/minder-pool-filter",
      ],

      // =================================
      // POOL CLEANING ACCESSORIES
      // =================================

      [
        "/swimming-pool-products/equipment/DeepNet",
        "/pool-products/pool-cleaning-accessories/deep-net",
      ],

      [
        "/swimming-pool-products/equipment/NylonBrush",
        "/pool-products/pool-cleaning-accessories/nylon-brush",
      ],

      [
        "/swimming-pool-products/pool-equipment/NylonBrush",
        "/pool-products/pool-cleaning-accessories/nylon-brush",
      ],


      [
        "/productspecification/equipment/NylonBrush",
        "/pool-products/pool-cleaning-accessories/nylon-brush",
      ],

      [
        "/swimming-pool-products/equipment/TelescopicPole",
        "/pool-products/pool-cleaning-accessories/telescopic-pole",
      ],

      [
        "/swimming-pool-products/pool-equipment/TelescopicPole",
        "/pool-products/pool-cleaning-accessories/telescopic-pole",
      ],

      [
        "/swimming-pool-products/equipment/VacuumHead",
        "/pool-products/pool-cleaning-accessories/vacuum-head",
      ],

      [
        "/swimming-pool-products/pool-equipment/VacuumHead",
        "/pool-products/pool-cleaning-accessories/vacuum-head",
      ],

      [
        "/swimming-pool-products/equipment/WaterTestKit",
        "/pool-products/pool-cleaning-accessories/test-kit",
      ],

      [
        "/swimming-pool-products/pool-equipment/HosePipe",
        "/pool-products/pool-cleaning-accessories/hose-pipe",
      ],

      // =================================
      // POOL LIGHTS
      // =================================

      [
        "/swimming-pool-products/pool-equipment/Lights",
        "/pool-products/pool-lights",
      ],

      [
        "/swimming-pool-products/equipment/Lights",
        "/pool-products/pool-lights",
      ],

      [
        "/productspecification/equipment/Lights",
        "/pool-products/pool-lights",
      ],

      // =================================
      // FOUNTAINS
      // =================================

      [
        "/swimming-pool-products/equipment/AcrylicFountain",
        "/pool-products/pool-fountains/acrylic-pool-fountain",
      ],

      [
        "/productspecification/equipment/AcrylicFountain",
        "/pool-products/pool-fountains/acrylic-pool-fountain",
      ],

      // =================================
      // POOL ACCESSORIES
      // =================================

      [
        "/swimming-pool-products/equipment/HydroJet",
        "/pool-products/pool-accessories/hydro-jet",
      ],

      [
        "/swimming-pool-products/pool-equipment/HydroJet",
        "/pool-products/pool-accessories/hydro-jet",
      ],

      [
        "/swimming-pool-products/equipment/Ladders",
        "/pool-products/pool-accessories/pool-ladder",
      ],

      // =================================
      // POOL CHEMICALS
      // =================================

      [
        "/swimming-pool-products/pool-chemicals/algaecide",
        "/pool-products/pool-chemicals/pool-algaecide",
      ],

      [
        "/swimming-pool-products/pool-chemicals/chlorine-granular",
        "/pool-products/pool-chemicals/pool-chlorine",
      ],

      [
        "/swimming-pool-products/pool-chemicals/ph-plus",
        "/pool-products/pool-chemicals/pool-ph-balancer",
      ],

      [
        "/swimming-pool-products/pool-chemicals/ph-minus",
        "/pool-products/pool-chemicals",
      ],

      // =================================
      // HEATING SYSTEMS
      // =================================

      [
        "/swimming-pool-products/water-heaters/Coates",
        "/pool-products/pool-heating-systems/coates-pool-heat-pump",
      ],

      [
        "/swimming-pool-products/waterheaters/Coates",
        "/pool-products/pool-heating-systems/coates-pool-heat-pump",
      ],

      // =================================
      // SAUNA / STEAM
      // =================================

      [
        "/swimming-pool-products/steam-heaters/FanlanSteam18KW",
        "/pool-products/sauna-steam-generators-accessories/sauna-steam-generator",
      ],

      [
        "/swimming-pool-products/sauna-heaters/FanlanSauna8KW",
        "/pool-products/sauna-steam-generators-accessories/sauna-heater",
      ],

      [
        "/swimming-pool-products/saunaheaters/FanlanSauna8KW",
        "/pool-products/sauna-steam-generators-accessories/sauna-heater",
      ],

      
    return permanentRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  

}

export default nextConfig;