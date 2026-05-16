import WaterIcon from "@mui/icons-material/Water";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import OpacityIcon from "@mui/icons-material/Opacity";
import HighlightIcon from "@mui/icons-material/Highlight";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import PoolIcon from "@mui/icons-material/Pool";

export const poolProducts = [
  {
    id: 1,
    title: "Swimming Pool Pumps",
    slug: "swimming-pool-pumps",
    desc: "High-performance swimming pool pumps for smooth water circulation and energy efficiency.",
    img: "/images/products/pump.png",
    icon: <SettingsInputComponentIcon />,
  },

  {
    id: 2,
    title: "Pool Sand Filters",
    slug: "pool-sand-filters",
    desc: "Advanced pool filtration systems for crystal clear and hygienic swimming pool water.",
    img: "/images/products/filter.png",
    icon: <WaterIcon />,
  },

  {
    id: 3,
    title: "Pool Chemicals",
    slug: "pool-chemicals",
    desc: "Professional pool chemicals for chlorine balancing, algae prevention and water treatment.",
    img: "/images/products/chemicals.jpeg",
    icon: <OpacityIcon />,
  },

  {
    id: 4,
    title: "Pool Underwater Lights",
    slug: "pool-underwater-lights",
    desc: "Luxury LED underwater lighting systems for modern swimming pool environments.",
    img: "/images/products/light.png",
    icon: <HighlightIcon />,
  },

  {
    id: 5,
    title: "Pool Cleaning Equipment",
    slug: "pool-cleaning-equipment",
    desc: "Premium cleaning tools and maintenance accessories for residential and commercial pools.",
    img: "/images/products/cleaning.png",
    icon: <CleaningServicesIcon />,
  },

  {
    id: 6,
    title: "Pool Ladders & Accessories",
    slug: "pool-ladders-accessories",
    desc: "Durable stainless steel pool ladders and modern swimming pool accessories.",
    img: "/images/products/ladder.png",
    icon: <PoolIcon />,
  },
];