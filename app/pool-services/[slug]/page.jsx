import Image from "next/image";
import Link from "next/link";

import connectDB from "@/lib/mongodb";
import ReadMore from "@/components/ReadMore";
import { FaChevronRight } from "react-icons/fa";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import * as Icons from "react-icons/fa";
export const dynamic = "force-dynamic";
import Service from "@/models/Service";
import FAQComponent from "@/components/FAQComponent";

// import "./page.css";
import styles from "./page.module.css";
/* =========================
   SEO (FIXED)
========================= */
export async function generateMetadata({ params }) {
  const Tem = await params;
  await connectDB();

  const service = await Service.findOne({
    slug: Tem.slug,
  });

  return {
    metadataBase: new URL("https://poolcaptain.pk"),

    title: service?.seoTitle,
    description: service?.seoDescription,
    keywords: service?.seoKeywords?.join(", "),

    alternates: {
      canonical: `/pool-services/${Tem.slug}`,
    },
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
    <section className={styles.serviceDetailPage}>

      {/* HERO */}
      <div className={styles.serviceHero}>

        <Image
          src={service.image}
          alt={service.title}
          fill
          loading="eager"
          priority
          unoptimized
          className={styles.serviceHeroImag}
        />

        <div className={styles.serviceHeroOverlay} />

        <div className={styles.serviceHeroContentWrapper}>

          <div className={styles.serviceHeroContent}>

            <span className={styles.serviceBadge}>
              {service.badge}
            </span>

            <h1>
              {service.title}
            </h1>

            <p>
              {service.heroSubtitle}
            </p>

            <Link href="/contact" className={styles.serviceHeroBtn}>
              {service.ctaButton}
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* BREADCRUMBS */}
      <div className={styles.serviceBreadcrumbWrapper}>

        <div className={styles.serviceBreadcrumb}>

          <Link href="/" className={styles.breadcrumbItem}>
            Home
          </Link>

          <FaChevronRight className={styles.breadcrumbDivider} />

          <Link href="/pool-services" className={styles.breadcrumbItem}>
            Services
          </Link>

          <FaChevronRight className={styles.breadcrumbDivider} />

          <span className={`${styles.breadcrumbItem} ${styles.activeBreadcrumb}`}>
            {service.title}
          </span>

        </div>

      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}

      {/* MAIN CONTENT */}
      <div className={styles.serviceMainContent}>

        {/* TOP GRID */}
        <div className={styles.serviceTopGrid}>

          <div>



            <h2 className={styles.serviceMainHeading}>
              {service.heroTitle}
            </h2>

            <span className={styles.serviceMiniTitle}>
              {service.shortDesc}

            </span>





            <p className={styles.serviceContentText}>
              <ReadMore
                text={service.content}
                maxLength={350}
              />

              <ReadMore
                text={service.extraContent}
                maxLength={250}
              />
            </p>

          </div>

          {/* FEATURES */}
          <div className={styles.serviceFeatureCard}>

            <h3>Key Features</h3>

            <div className={styles.serviceFeatureList}>

              {service.features?.map((feature, index) => (
                <div key={index} className={styles.serviceFeatureItem}>
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>{feature}</span>
                </div>
              ))}

            </div>

          </div>

        </div>


        {/* //////////////////////////////PROJECTS////////////////////////////////////////////// */}
        <div className={styles.projectGrid}>
          <div className={styles.projectImage}>
            <Image
              src={service.projectsGallery[0].image}
              alt={service.projectsGallery[0].alt}
              fill
              unoptimized
            />
          </div>

          <div className={styles.projectContent}>
            <h2>{service.seoKeywords[3]}</h2>

            <p>{service.shortDesc}</p>

            <ul>
              {service.features?.slice(0, 4).map((item, i) => (
                <li key={i}>
                  <FaChevronRight />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.projectGrid} ${styles.reverse}`}>

          <div className={styles.projectContent}>
            <h2>{service.seoKeywords[0]}</h2>

            <p>{service.seoDescription}</p>

            <ul>
              {service.points.slice(4, 8).map((item, i) => (
                <li key={i}>
                  <FaChevronRight />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.projectImage}>
            <Image
              src={service.projectsGallery[1].image}
              alt={service.projectsGallery[1].alt}
              unoptimized
              fill
            />
          </div>

        </div>
        {/* ////////////////////////////////////////////////////////////////// */}








        {/* HIGHLIGHTS */}
        <div className={styles.serviceHighlights}>

          <h2>Why Choose Our Services</h2>

          <div className={styles.serviceHighlightsGrid}>

            {service.highlights?.map((item, index) => {

              const Icon = Icons[item.icon] || FaCheckCircle;

              return (
                <div key={index} className={styles.highlightCard}>

                  <div className={styles.highlightIcon}>
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
        <div className={styles.serviceSolutions}>

          <h2>Our Service Solutions</h2>

          <div className={styles.serviceSolutionsGrid}>

            {service.points?.map((point, index) => (
              <div key={index} className={styles.solutionItem}>
                <FaCheckCircle className={styles.solutionIcon} />
                <p>{point}</p>
              </div>
            ))}

          </div>
        </div>




        {/* GALLERY */}
        {service.projectsGallery?.length > 0 && (
          <div className={styles.serviceGallery}>

            <h2>Project Gallery</h2>

            <p className={styles.gallerySubtitle}>
              Explore some of our recent work and see the quality of our swimming pool services.
            </p>

            <div className={styles.serviceGalleryGrid}>

              {service.projectsGallery.map((item, index) => (
                <div
                  key={index}
                  className={styles.galleryCard}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={500}
                    height={350}
                    className={styles.galleryImage}
                    unoptimized

                  />

                  <div className={styles.galleryOverlay}>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        )}

        <div className={styles.serviceHeroButtons}>

          <Link
            href={`${service.projectLink}`}
            className={styles.serviceHeroBtn}
          >
            View Our Projects
            {/* <a href="/projects/sauna-steam-room-construction"></a> */}
            <FaArrowRight />
          </Link>


        </div>
        {/* ////////////////////////////////////////////////////////////////// */}


        {/* //////////////////////////////////////////////////// */}
        {service.internalLinks?.length > 0 && (
          <div className={styles.internalLinks}>

            <h2>Related Services</h2>

            <div className={styles.internalLinksGrid}>

              {service.internalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={styles.internalLinkCard}
                >
                  <span>{item.title}</span>

                  <FaArrowRight />
                </Link>
              ))}

            </div>

          </div>
        )}



        {/* SERVICE AREAS */}
        <div className={styles.serviceAreas}>

          <h2>Service Areas</h2>

          <div className={styles.areasGrid}>

            {service.serviceAreas?.map((area, index) => (
              <span key={index} className={styles.areaBadge}>
                {area}
              </span>
            ))}

          </div>

        </div>


        {/* //////////////////////////////////////////////////// */}

        {/* FAQ */}
        <FAQComponent faqs={service?.faqs} />


        {/* CTA */}
        <div className={styles.serviceCTA}>

          <h2>{service.ctaTitle}</h2>

          <p>{service.ctaText}</p>

          <Link href="/contact" className={styles.serviceHeroBtn}>
            {service.ctaButton}
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}