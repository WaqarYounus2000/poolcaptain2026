import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogGrid from "@/components/BlogGrid";

export const dynamic = "force-dynamic";



export const metadata = {
  title: "Swimming Pool Blogs | Pool Maintenance Tips & Guides | Pool Captain",

  description:
    "Explore Pool Captain's expert swimming pool blogs covering pool maintenance, water testing, chlorine balancing, pool chemicals, equipment, leak detection, heating systems, cleaning guides, and professional pool care tips.",

  keywords: [
    "swimming pool blogs",
    "pool maintenance",
    "pool cleaning",
    "pool water testing",
    "pool chemicals",
    "chlorine maintenance",
    "pool equipment",
    "pool filters",
    "pool pumps",
    "pool heating",
    "pool repair",
    "pool maintenance karachi",
    "swimming pool guide",
    "pool care tips",
    "pool captain"
  ],

  metadataBase: new URL("https://poolcaptain.pk"),

  alternates: {
    canonical: "https://poolcaptain.pk/blogs",
  },

  authors: [
    {
      name: "Pool Captain",
      url: "https://poolcaptain.pk",
    },
  ],

  creator: "Pool Captain",

  publisher: "Pool Captain",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Swimming Pool Blogs | Pool Captain",

    description:
      "Read expert articles on swimming pool maintenance, water chemistry, chlorine treatment, pool equipment, cleaning, repairs, and professional pool care.",

    url: "https://poolcaptain.pk/blogs",

    siteName: "Pool Captain",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "https://poolcaptain.pk/public/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pool Captain Swimming Pool Blogs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Swimming Pool Blogs | Pool Captain",

    description:
      "Expert swimming pool maintenance guides, water testing tips, equipment advice, and pool care articles.",

    images: [
      "https://poolcaptain.pk/public/images/og-image.jpg",
    ],
  },

  category: "Swimming Pool Maintenance",
};




export default async function BlogsPage() {
  try {
    await connectDB();

    const blogs = await Blog.find(
      { isPublished: true },
      {
        title: 1,
        heroTitle: 1,
        slug: 1,
        summary: 1,
        featuredImage: 1,
        category: 1,
        author: 1,
        readingTime: 1,
        createdAt: 1,
        isFeatured: 1,
      }
    )
      .sort({ createdAt: -1 })
      .lean();

    const data = blogs.map((blog) => ({
      _id: blog._id.toString(),
      title: blog.heroTitle || blog.title,
      slug: blog.slug,
      summary: blog.summary,
      coverImage: blog.featuredImage?.url || "",
      imageAlt: blog.featuredImage?.alt || blog.title,
      category: blog.category,
      author: blog.author,
      readingTime: blog.readingTime,
      createdAt: blog.createdAt,
      isFeatured: blog.isFeatured,
    }));

    return <BlogGrid blogs={data} />;
  } catch (error) {
    console.error("Blogs Page Error:", error);

    return (
      <main
        style={{
          minHeight: "70vh",
          display: "grid",
          placeItems: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div>
          <h2>Unable to load blogs</h2>
          <p>{error.message}</p>
        </div>
      </main>
    );
  }
}

