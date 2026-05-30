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

    // ✅ ADDED FIELD (technicalSpec)
    technicalSpec: {
      materialConstruction: {
        description: String,
        points: [String],
      },
      designFeatures: {
        description: String,
        points: [String],
      },
      performance: {
        description: String,
        points: [String],
      },
      application: {
        description: String,
        points: [String],
      },
      durability: {
        description: String,
        points: [String],
      },
    },

    seoTitle: String,
    seoDesc: String,
    keywords: [String],
  },
  { timestamps: true }
);

// ✅ IMPORTANT: FORCE "products" COLLECTION
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);