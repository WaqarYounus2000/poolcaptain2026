import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { services } from "@/data/services";

import "./page.css";

export default async function ServiceDetail({ params }) {

  const resolvedParams = await params;

  const service = services.find(
    (item) => item.slug === resolvedParams.slug
  );

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
          priority
          className="serviceHeroImage"
        />

        {/* OVERLAY */}
        <div className="serviceHeroOverlay" />

        {/* CONTENT */}
        <div className="serviceHeroContentWrapper">

          <div className="serviceHeroContent">

            {/* BADGE */}
            <span className="serviceBadge">
              {service.badge}
            </span>

            {/* TITLE */}
            <h1>
              {service.heroTitle || service.title}
            </h1>

            {/* SUBTITLE */}
            <p>
              {service.heroSubtitle}
            </p>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="serviceHeroBtn"
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="serviceMainContent">

        {/* TOP GRID */}
        <div className="serviceTopGrid">

          {/* LEFT CONTENT */}
          <div>

            <span className="serviceMiniTitle">
              Premium Pool Services
            </span>

            <h2 className="serviceMainHeading">
              {service.title}
            </h2>

            <p className="serviceContentText">
              {service.content}
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="serviceFeatureCard">

            <h3>
              Key Features
            </h3>

            <div className="serviceFeatureList">

              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="serviceFeatureItem"
                >

                  <FaCheckCircle className="featureIcon" />

                  <span>
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="serviceHighlights">

          <h2>
            Why Choose Our Services
          </h2>

          <div className="serviceHighlightsGrid">

            {service.highlights?.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="highlightCard"
                >

                  <div className="highlightIcon">
                    <Icon />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>

        {/* BULLET POINTS */}
        <div className="serviceSolutions">

          <h2>
            Our Service Solutions
          </h2>

          <div className="serviceSolutionsGrid">

            {service.points?.map((point, index) => (
              <div
                key={index}
                className="solutionItem"
              >

                <FaCheckCircle className="solutionIcon" />

                <p>
                  {point}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}