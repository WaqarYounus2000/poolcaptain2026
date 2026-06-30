import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogContent from "@/components/BlogContent";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";



export async function generateMetadata({ params }) {
  const blog =  await params

  if (!blog) {
    return {
      title: "Blog Not Found | Pool Captain",
      description: "The requested blog could not be found.",
    };
  }
  return {
    title:
      blog.seo?.metaTitle ||
      `${blog.slug} | Pool Captain`,

    description:
      blog.seo?.metaDescription ||
      blog.summary,

    keywords:
      blog.seo?.keywords ||
      blog.tags,

    authors: [
      {
        name: blog.author,
      },
    ],

    creator: blog.author,

    publisher: "Pool Captain",

    alternates: {
      canonical:
        blog.seo?.canonicalUrl ||
        `https://poolcaptain.pk/blog/${blog.slug}`,
    },

    robots:
      blog.seo?.robots || "index,follow",

    openGraph: {
      title:
        blog.seo?.ogTitle ||
        blog.title,

      description:
        blog.seo?.ogDescription ||
        blog.summary,

      url:
        blog.seo?.canonicalUrl ||
        `https://poolcaptain.pk/blog/${blog.slug}`,

      siteName: "Pool Captain",

      type: "article",

      images: [
        {
          url:
            blog.seo?.ogImage ||
            blog.featuredImage?.url ||
            "/images/og-image.jpg",

          width: 1200,
          height: 630,

          alt:
            blog.featuredImage?.alt ||
            blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        blog.seo?.ogTitle ||
        blog.title,

      description:
        blog.seo?.ogDescription ||
        blog.summary,

      images: [
        blog.seo?.ogImage ||
          blog.featuredImage?.url ||
          "/images/og-image.jpg",
      ],
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  try {
    await connectDB();

    const blog = await Blog.findOne({
      slug,
      isPublished: true,
    }).lean();

    if (!blog) {
      notFound();
    }

    const data = {
      ...blog,
      _id: blog._id.toString(),
    };

    return <BlogContent blog={data} />;
  } catch (error) {
    console.error("Blog Details Error:", error);

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
          <h2>Unable to load blog</h2>
          <p>{error.message}</p>
        </div>
      </main>
    );
  }
}