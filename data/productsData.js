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
    desc: "pool chemicals for pool chlorine balancing, algae preventions & water treatment (available in karachi).",
    img: "/images/products/chemicals.jpeg",
    icon: <OpacityIcon />,
  },

  {
    id: 4,
    title: "Pool Underwater Lights",
    slug: "pool-underwater-lights",
    desc: "pool LED underwater lighs, abs material ip68-approved, 12V-18/35W DC connections",
    img: "/images/products/light.png",
    icon: <HighlightIcon />,
  },

  {
    id: 5,
    title: "Pool Cleaning Equipment",
    slug: "pool-cleaning-equipment",
    desc: "pool cleaning equipment-tools and maintenance accessories for residential and commercial pools, available in karachi.",
    img: "/images/products/cleaning.png",
    icon: <CleaningServicesIcon />,
  },

  {
    id: 6,
    title: "Pool Ladders & Accessories",
    slug: "pool-ladders-accessories",
    desc: "Durable stainless steel pool ladders comes in 304 SS imported from china, modern swimming pool accessories.",
    img: "/images/products/ladder.png",
    icon: <PoolIcon />,
  },
];