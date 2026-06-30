import Image from "next/image";
import Link from "next/link";

import connectDB from "@/lib/mongodb";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import * as Icons from "react-icons/fa";
export const dynamic = "force-dynamic";
import Service from "@/models/Service";
import FAQComponent from "@/components/FAQComponent";

import "./page.css";
/* =========================
   SEO (FIXED)
========================= */
export async function generateMetadata({ params }) {
  const Tem = await params
  await connectDB();

  const service = await Service.findOne({
    slug: Tem.slug,
  });

  return {
    title: service?.seoTitle,
    description: service?.seoDescription,
    keywords: service?.seoKeywords?.join(", "),
  };
}

/* =========================
   PAGE
========================= */
export default async function ServiceDetail({ params }) {
  const { slug } = await params
  await connectDB();

  const service = await Service.findOne({
    slug
  }).lean();



  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <section className="serviceDetailPage">

      {/* HERO */}
      <div className="serviceHero">

        <Image
          src={service.image}
          alt={service.title}
          fill
          loading="eager"
          priority
          unoptimized
          className="serviceHeroImage"
        />

        <div className="serviceHeroOverlay" />

        <div className="serviceHeroContentWrapper">

          <div className="serviceHeroContent">

            <span className="serviceBadge">
              {service.badge}
            </span>

            <h1>
              {service.title}
            </h1>

            <p>
              {service.heroSubtitle}
            </p>

            <Link href="/contact" className="serviceHeroBtn">
              {service.ctaButton}
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="serviceMainContent">

        {/* TOP GRID */}
        <div className="serviceTopGrid">

          <div>



            <h2 className="serviceMainHeading">
              {service.heroTitle}
            </h2>

            <span className="serviceMiniTitle">
              {service.shortDesc}
            </span>

            <p className="serviceContentText">
              {service.content}
            </p>

            <p className="serviceContentText">
              {service.extraContent}
            </p>

          </div>

          {/* FEATURES */}
          <div className="serviceFeatureCard">

            <h3>Key Features</h3>

            <div className="serviceFeatureList">

              {service.features?.map((feature, index) => (
                <div key={index} className="serviceFeatureItem">
                  <FaCheckCircle className="featureIcon" />
                  <span>{feature}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* HIGHLIGHTS */}
        <div className="serviceHighlights">

          <h2>Why Choose Our Services</h2>

          <div className="serviceHighlightsGrid">

            {service.highlights?.map((item, index) => {

              const Icon = Icons[item.icon] || FaCheckCircle;

              return (
                <div key={index} className="highlightCard">

                  <div className="highlightIcon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>
              );
            })}
          </div>
        </div>

        {/* POINTS */}
        <div className="serviceSolutions">

          <h2>Our Service Solutions</h2>

          <div className="serviceSolutionsGrid">

            {service.points?.map((point, index) => (
              <div key={index} className="solutionItem">
                <FaCheckCircle className="solutionIcon" />
                <p>{point}</p>
              </div>
            ))}

          </div>
        </div>

        {/* SERVICE AREAS */}
        <div className="serviceAreas">

          <h2>Service Areas</h2>

          <div className="areasGrid">

            {service.serviceAreas?.map((area, index) => (
              <span key={index} className="areaBadge">
                {area}
              </span>
            ))}

          </div>

        </div>

        {/* FAQ */}
        <FAQComponent faqs={service?.faqs} />

        {/* CTA */}
        <div className="serviceCTA">

          <h2>{service.ctaTitle}</h2>

          <p>{service.ctaText}</p>

          <Link href="/contact" className="serviceHeroBtn">
            {service.ctaButton}
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}