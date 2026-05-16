import PoolCalculationClient from "./PoolCalculationClient";

export const metadata = {
  title:
    "Swimming Pool Calculator Karachi | Pool Volume, Tiles & Water Estimation Tool Pakistan",
  description:
    "Free swimming pool calculator in Karachi Pakistan. Calculate pool volume, water liters, gallons, and tile area for construction and maintenance planning.",
  keywords: [
    "swimming pool calculator",
    "pool volume calculator karachi",
    "pool tiles calculator pakistan",
    "pool construction estimation tool",
    "pool water calculation",
    "pool captain karachi",
    "swimming pool water capacity calculation",
    "swimming pool tiles volume calculation",
    "swimming pool tiles area calculation"
  ],
  openGraph: {
    title: "Swimming Pool Calculator Karachi",
    description:
      "Professional pool engineering calculator for volume, tiles, and water estimation in Pakistan.",
    type: "website",
  },
};

export default function Page() {
  return <PoolCalculationClient />;
}