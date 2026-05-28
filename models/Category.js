import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: String,

    slug: String,

    image: String,

    shortDescription: String,

    featured: Boolean,

    seo: {
      title: String,
      description: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);