import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectContent.module.css";
import FAQComponent from "@/components/FAQComponent";

export default function ProjectContent({ project }) {
    console.log(project)
  if (!project) return null;

  const {
    title,
    heroTitle,
    heroDescription,
    summary,
    featuredImage,
    category,
    location,
    client,
    completionDate,
    projectDuration,
    breadcrumbs = [],
    sections = [],
    gallery = [],
    faqs = [],
    callToAction,
    relatedProjects = [],
    tags = [],
    tableOfContents = [],
  } = project;

  const completed = completionDate
    ? new Date(completionDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className={styles.article}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        {featuredImage?.url && (
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || title}
            fill
            priority
            unoptimized
            className={styles.heroImage}
          />
        )}

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <span className={styles.category}>{category}</span>

          <h1>{heroTitle || title}</h1>

          {heroDescription && <p>{heroDescription}</p>}

          <div className={styles.metaInfo}>
            {location && <span>{location}</span>}

            {projectDuration && (
              <>
                <span>•</span>
                <span>{projectDuration}</span>
              </>
            )}

            {completed && (
              <>
                <span>•</span>
                <span>{completed}</span>
              </>
            )}

            {client && (
              <>
                <span>•</span>
                <span>{client}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ================= Breadcrumb ================= */}

      {breadcrumbs.length > 0 && (
        <nav className={styles.breadcrumbs}>
  <ol>
    {breadcrumbs.map((item, index) => (
      <li key={index}>
        {index === breadcrumbs.length - 1 ? (
          item.title
        ) : (
          <Link href={item.link}>{item.title}</Link>
        )}
      </li>
    ))}
  </ol>
</nav>
      )}

      {/* ================= MAIN ================= */}

      <div className={styles.wrapper}>
        {/* Sidebar */}

        <aside className={styles.sidebar}>
          {tableOfContents.length > 0 && (
            <div className={styles.toc}>
              <h3>Project Overview</h3>

              <ul>
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Content */}

        <main className={styles.content}>
          {summary && (
            <div className={styles.summaryCard}>
              <p>{summary}</p>
            </div>
          )}

          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
            >
              <h2>{section.heading}</h2>

              {section.subHeading && (
                <h3>{section.subHeading}</h3>
              )}

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {section.image?.url && (
                <figure className={styles.figure}>
                  <Image
                    src={section.image.url}
                    alt={section.image.alt || section.heading}
                    width={1200}
                    height={700}
                    unoptimized
                    className={styles.sectionImage}
                  />

                  {section.image.caption && (
                    <figcaption>{section.image.caption}</figcaption>
                  )}
                </figure>
              )}

              {section.bulletPoints?.length > 0 && (
                <ul className={styles.list}>
                  {section.bulletPoints.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {section.numberedPoints?.length > 0 && (
                <ol className={styles.numberList}>
                  {section.numberedPoints.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}

              {section.table && (
                <div className={styles.tableCard}>
                  {section.table.title && (
                    <h3>{section.table.title}</h3>
                  )}

                  <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {section.table.rows.map((row, index) => (
                          <tr key={index}>
                            {row.map((cell, i) => (
                              <td key={i}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {section.quote && (
                <blockquote className={styles.quote}>
                  {section.quote}
                </blockquote>
              )}
            </section>
          ))}

          {/* Gallery */}

          {gallery.length > 0 && (
            <section className={styles.gallery}>
              <h2>Project Gallery</h2>

              <div className={styles.galleryGrid}>
                {gallery.map((image, index) => (
                  <Image
                    key={index}
                    src={image.url}
                    alt={image.alt || title}
                    width={500}
                    height={350}
                    className={styles.galleryImage}
                    unoptimized
                  />
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}

          {faqs.length > 0 && (
            <section className={styles.faqSection}>
              <FAQComponent faqs={faqs} />
            </section>
          )}

          {/* CTA */}

          {callToAction && (
            <section className={styles.cta}>
              <div>
                <h2>{callToAction.title}</h2>

                <p>{callToAction.description}</p>
              </div>

              <Link
                href={callToAction.buttonLink}
                className={styles.ctaButton}
              >
                {callToAction.buttonText}
              </Link>
            </section>
          )}

          {/* Related Projects */}

          {relatedProjects.length > 0 && (
            <section className={styles.relatedProjects}>
              <h2>Related Projects</h2>

              <div className={styles.relatedGrid}>
                {relatedProjects.map((item) => (
                  <Link
                    key={item}
                    href={`/projects/${item}`}
                    className={styles.relatedCard}
                  >
                    • {item}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}

          {tags.length > 0 && (
            <section className={styles.tagSection}>
              <h3>Tags</h3>

              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </article>
  );
}