import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const FAQSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    images: [ImageSchema],

    featuredImage: ImageSchema,

    category: {
      type: String,
      enum: [
        "Swimming Pool Construction",
        "Pool Maintenance",
        "Pool Renovation",
        "Pool Repair",
        "Pool Heating",
        "Jacuzzi",
        "Sauna",
        "Cold Plunge",
      ],
    },

    location: {
      type: String,
      required: true,
    },

    completionDate: Date,

    clientType: {
      type: String,
      enum: [
        "Residential",
        "Commercial",
        "Hotel",
        "School",
        "Gym",
      ],
    },

    services: [String],

    equipment: [String],

    tags: [String],

    faqs: [FAQSchema],

    seoTitle: String,

    seoDescription: String,

    seoKeywords: [String],

    isFeatured: {
      type: Boolean,
      default: false,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
mongoose.model("Project", ProjectSchema);