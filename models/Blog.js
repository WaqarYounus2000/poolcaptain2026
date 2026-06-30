import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const TableSchema = new mongoose.Schema(
  {
    title: String,

    headers: [String],

    rows: [[String]],
  },
  { _id: false }
);

const FAQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const SectionSchema = new mongoose.Schema(
  {
    id: String,

    heading: {
      type: String,
      required: true,
    },

    subHeading: String,

    paragraphs: [String],

    bulletPoints: [String],

    numberedPoints: [String],

    image: ImageSchema,

    table: TableSchema,

    quote: String,
  },
  { _id: false }
);

const BlogSchema = new mongoose.Schema(
  {
    // =========================
    // BASIC INFORMATION
    // =========================

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    summary: {
      type: String,
      required: true,
    },

    heroTitle: String,

    heroDescription: String,

    featuredImage: ImageSchema,

    // =========================
    // AUTHOR
    // =========================

    author: {
      type: String,
      default: "Pool Captain",
    },

    authorImage: String,

    authorRole: String,

    // =========================
    // BLOG INFO
    // =========================

    category: {
      type: String,
      required: true,
    },

    subCategory: String,

    tags: [String],

    readingTime: String,

    language: {
      type: String,
      default: "en",
    },

    // =========================
    // SEO
    // =========================

    seo: {
      metaTitle: String,

      metaDescription: String,

      keywords: [String],

      canonicalUrl: String,

      ogTitle: String,

      ogDescription: String,

      ogImage: String,

      robots: {
        type: String,
        default: "index,follow",
      },
    },

    // =========================
    // BREADCRUMBS
    // =========================

    breadcrumbs: [
      {
        title: String,
        link: String,
      },
    ],

    // =========================
    // TABLE OF CONTENTS
    // =========================

    tableOfContents: [
      {
        id: String,
        title: String,
      },
    ],

    // =========================
    // BLOG CONTENT
    // =========================

    sections: [SectionSchema],

    // =========================
    // FAQ
    // =========================

    faqs: [FAQSchema],

    // =========================
    // CTA
    // =========================

    callToAction: {
      title: String,

      description: String,

      buttonText: String,

      buttonLink: String,
    },

    // =========================
    // RELATED BLOGS
    // =========================

    relatedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],

    // =========================
    // STATUS
    // =========================

    isPublished: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);