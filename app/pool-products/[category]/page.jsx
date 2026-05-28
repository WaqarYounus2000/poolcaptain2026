import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import CategoryClient from "./CategoryClient";
import Category from "@/models/Category";

// ✅ ONLY SEO TITLE MODIFIED HERE
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams?.category;

  await connectDB();

  const category = await Category.findOne({
    slug: categorySlug,
  }).lean();

  const seoMetaTags = category?.seoMetaTags || [];

  return {
    title: `Best ${category?.name} ${category?.seo.title}, in Karachi || Swimming Pool Equipments & Cleaning Accessories - Pool Captain `, // ✅ ONLY THIS IS CHANGED
    description:
      category?.description ||
      `Best ${categorySlug} products in Karachi, Pakistan`,

    keywords: seoMetaTags.join(", "),
  };
}

// ✅ PAGE COMPONENT (UNCHANGED LOGIC)
export default async function Page({ params }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams?.category;

  if (!categorySlug) {
    return <div>Invalid category</div>;
  }

  await connectDB();

  const [products, category] = await Promise.all([
    Product.find({ category: categorySlug }).lean(),
    Category.findOne({ slug: categorySlug }).lean(),
  ]);

  return (
    <CategoryClient
      products={JSON.parse(JSON.stringify(products))}

      // ✅ KEEPING SEO PROP EXACTLY SAME STRUCTURE
      seo={{
        ...category?.seo,
        seoMetaTags: category?.seoMetaTags || [],
      }}

      category={categorySlug}
    />
  );
}