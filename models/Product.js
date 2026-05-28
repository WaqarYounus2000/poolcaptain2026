import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: Number,
    slug: String,
    title: String,
    shortDesc: String,
    heroTitle: String,
    heroDesc: String,
    image: String,
    gallery: [String],
    category: String,
    features: [String],
    specifications: [String],
    benefits: [String],
    seoTitle: String,
    seoDesc: String,
    keywords: [String],
  },
  { timestamps: true }
);

// ✅ IMPORTANT: FORCE "products" COLLECTION
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);