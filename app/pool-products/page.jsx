import ProductsClient from "./ProductsClient.jsx";

import connectDB from "@/lib/mongodb";
import Category from "@/models/Category";

export const metadata = {
  title:
    "Swimming Pool Products in Karachi Pakistan | Pool Captain",

  description:
    "Premium swimming pool products in Karachi including pool pumps, filters, chemicals, underwater lights, ladders and pool cleaning accessories.",

  keywords: [
    "pool cleaning chemicals karachi",
    "swimming pool cleaning chemicals karachi",
    "pool cleaning chemicals near me",
    "pool cleaning chemicals pakistan",
    "best pool cleaning chemicals karachi",
    "affordable pool cleaning chemicals karachi",

    "buy pool cleaning chemicals karachi",
    "pool cleaning chemicals shop karachi",
    "pool cleaning chemicals dealer karachi",
    "pool cleaning chemicals supplier pakistan",
    "wholesale pool cleaning chemicals karachi",
    "pool cleaning chemicals price in karachi",
    "cheap pool cleaning chemicals karachi",

    "green pool water treatment chemicals karachi",
    "dirty pool water cleaning chemicals",
    "swimming pool water cleaning solution karachi",
    "pool water purification chemicals pakistan",
    "cloudy pool water treatment chemicals",
    "pool sanitizing chemicals karachi",

    "pool chlorine cleaning chemicals karachi",
    "chlorine tablets for pool cleaning karachi",
    "granular chlorine pool cleaning karachi",
    "pool shock treatment chemicals karachi",
    "calcium hypochlorite pool cleaning karachi",
    "pool disinfection chemicals pakistan",

    "algae removal pool chemicals karachi",
    "algaecide pool cleaning karachi",
    "swimming pool algae treatment chemicals karachi",
    "green algae pool cleaner karachi",
    "pool algae killer chemicals pakistan",
    "anti algae swimming pool chemicals",

    "pool cleaning service chemicals karachi",
    "professional pool cleaning chemicals karachi",
    "residential pool cleaning chemicals karachi",
    "commercial pool cleaning chemicals karachi",
    "pool maintenance chemicals karachi pakistan",

    "swimming pool filters in karachi",
    "swimming pool motor pumps in karachi",
    "swimming pool cleaning accessories in karachi",
    "swimming pool cleaning equipment in dha karachi",
    "swimming pool lights underwater karachi pakistan",
    "swimming pool products dealer karachi",
    "swimming pool products shops in karachi",
    "swimming pool products shops near me",
    "swimming pool equipment shops in dha karachi",
    "pool cleaning accessories in dha karachi",
    "pool cleaning pumps and filter in dha karachi",
    "pool cleaning products in dha phase 8",
    "best swimming pool products in karachi",
    "best swimming pool accessories in dha karachi",
    "best swimming pool filter pumps system in karachi",
  ],
};

// async function getCategories() {
//   await connectDB();

//   const categories = await Category.find({})
//     .sort({ createdAt: -1 })
//     .lean();

//   return JSON.parse(JSON.stringify(categories));
// }

async function getCategories() {
  await connectDB();

  const categories = await Category.find({}).lean();


  return JSON.parse(JSON.stringify(categories));
}




export default async function PoolProductsPage() {
  const categories = await getCategories();

  // console.log("to check",categories.seo)

  return <ProductsClient categories={categories} />;
}