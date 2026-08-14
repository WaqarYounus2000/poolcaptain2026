import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";
import ProjectContent from "@/components/ProjectContent";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  await connectDB();

  const project = await Project.findOne({
    slug,
    published: true,
  }).lean();

  if (!project) {
    return {
      metadataBase: new URL("https://poolcaptain.pk"),

      title: "Project Not Found | Pool Captain",
      description: "The requested project could not be found.",
    };
  }

  const ogImage =
    project.featuredImage?.url ||
    project.images?.[0]?.url ||
    "https://poolcaptain.pk/images/projects-og.jpg";

  const ogAlt =
    project.featuredImage?.alt ||
    project.images?.[0]?.alt ||
    project.title;

  return {
    metadataBase: new URL("https://poolcaptain.pk"),

    title:
      project.seoTitle ||
      `${project.title} | Pool Captain`,

    description:
      project.seoDescription ||
      project.shortDescription,

    keywords:
      project.seoKeywords ||
      project.tags,

    authors: [
      {
        name: "Pool Captain",
      },
    ],

    creator: "Pool Captain",

    publisher: "Pool Captain",

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: project.title,

      description:
        project.seoDescription ||
        project.shortDescription,

      url: `https://poolcaptain.pk/projects/${project.slug}`,

      siteName: "Pool Captain",

      type: "article",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: project.title,

      description:
        project.seoDescription ||
        project.shortDescription,

      images: [ogImage],
    },
  };
}



export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  try {
    await connectDB();

    const project = await Project.findOne({
      slug,
      published: true,
    }).lean();

    if (!project) {
      notFound();
    }

    const data = {
      ...project,
      _id: project._id.toString(),
    };

    return <ProjectContent project={data} />;
  } catch (error) {
    console.error("Project Details Error:", error);

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
          <h2>Unable to load project</h2>
          <p>{error.message}</p>
        </div>
      </main>
    );
  }
}