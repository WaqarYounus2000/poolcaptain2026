import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  { _id: false }
);

const highlightSchema = new mongoose.Schema(
  {
    icon: String,
    title: String,
    text: String,
  },
  { _id: false }
);

const serviceSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      default: "",
    },

    shortDesc: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },

    heroTitle: {
      type: String,
      default: "",
    },

    heroSubtitle: {
      type: String,
      default: "",
    },

    badge: {
      type: String,
      default: "",
    },

    seoTitle: {
      type: String,
      default: "",
    },

    seoDescription: {
      type: String,
      default: "",
    },

    seoKeywords: [
      {
        type: String,
      },
    ],

    content: {
      type: String,
      default: "",
    },

    extraContent: {
      type: String,
      default: "",
    },

    features: [
      {
        type: String,
      },
    ],

    highlights: [highlightSchema],

    points: [
      {
        type: String,
      },
    ],

    faqs: [faqSchema],

    serviceAreas: [
      {
        type: String,
      },
    ],

    ctaTitle: {
      type: String,
      default: "",
    },

    ctaText: {
      type: String,
      default: "",
    },

    ctaButton: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Service =
  mongoose.models.Service ||
  mongoose.model("Service", serviceSchema);

export default Service;