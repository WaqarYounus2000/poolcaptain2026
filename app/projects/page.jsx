import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";
import ProjectGrid from "@/components/ProjectGrid";

export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "Latest Swimming Pool Projects in Karachi | Pool Captain Portfolio",

  description:
    "Browse Pool Captain's latest swimming pool construction, maintenance, renovation, jacuzzi, sauna and cold plunge projects completed across Karachi. View real project galleries, premium finishes and professional workmanship.",

  keywords: [
    "swimming pool projects",
    "pool construction karachi",
    "pool maintenance projects",
    "pool renovation",
    "luxury swimming pool",
    "commercial swimming pool",
    "residential swimming pool",
    "pool builder karachi",
    "pool captain portfolio",
    "pool gallery",
    "jacuzzi installation",
    "sauna installation",
    "cold plunge installation",
    "completed swimming pool projects",
    "latest pool projects"
  ],

  metadataBase: new URL("https://poolcaptain.pk"),

  alternates: {
    canonical: "/projects",
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
    title:
      "Latest Swimming Pool Projects | Pool Captain",

    description:
      "Explore our completed swimming pool construction, maintenance, renovation, jacuzzi and sauna installation projects across Karachi.",

    url: "https://poolcaptain.pk/projects",

    siteName: "Pool Captain",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "https://poolcaptain.pk/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pool Captain Latest Swimming Pool Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Latest Swimming Pool Projects | Pool Captain",

    description:
      "View our latest completed swimming pool projects throughout Karachi.",

    images: [
      "https://poolcaptain.pk/images/projects-og.jpg",
    ],
  },

  category: "Swimming Pool Projects",
};

export default async function ProjectsPage() {
  try {
    await connectDB();

    const projects = await Project.find(
      {
        published: true,
      },
      {
        title: 1,
        slug: 1,
        shortDescription: 1,
        featuredImage: 1,
        images: 1,
        category: 1,
        location: 1,
        clientType: 1,
        completionDate: 1,
        createdAt: 1,
        isFeatured: 1,
      }
    )
      .sort({
        createdAt: -1,
      })
      .lean();

    const data = projects.map((project) => ({
      _id: project._id.toString(),

      title: project.title,

      slug: project.slug,

      summary: project.shortDescription,

      coverImage:
        project.featuredImage?.url ||
        project.images?.[0]?.url ||
        "",

      imageAlt:
        project.featuredImage?.alt ||
        project.images?.[0]?.alt ||
        project.title,

      category: project.category,

      location: project.location,

      clientType: project.clientType,

      completionDate: project.completionDate,

      createdAt: project.createdAt,

      imageCount: project.images?.length || 0,

      isFeatured: project.isFeatured,
    }));

    return <ProjectGrid projects={data} />;
  } catch (error) {
    console.error("Projects Page Error:", error);

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
          <h2>Unable to load projects</h2>
          <p>{error.message}</p>
        </div>
      </main>
    );
  }
}