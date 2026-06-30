import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BlogContent.module.css";
import FAQComponent from "@/components/FAQComponent";




export default function BlogContent({ blog }) {

    if (!blog) return null;

    const {
        title,
        heroTitle,
        heroDescription,
        summary,
        featuredImage,
        category,
        subCategory,
        author,
        authorImage,
        authorRole,
        readingTime,
        createdAt,
        updatedAt,
        language,
        views,
        isFeatured,
        breadcrumbs = [],
        tags = [],
        tableOfContents = [],
        sections = [],
        faqs = [],
        callToAction,
        relatedBlogs = [],
    } = blog;

    const publishDate = createdAt
        ? new Date(createdAt).toLocaleDateString("en-US", {
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
                        loading="eager"
                        className={styles.heroImage}
                    />
                )}

                <div className={styles.overlay} />

                <div className={styles.heroContent}>
                    <div className={styles.categoryWrapper}>
                        <span className={styles.category}>
                            {category}
                        </span>

                      

                        
                    </div>

                    <h1>{heroTitle || title}</h1>

                    {heroDescription && (
                        <p>{heroDescription}</p>
                    )}

                    <div className={styles.meta}>
                        <div className={styles.authorBox}>
                            <div className={styles.authorAvatar}>
                                {authorImage ? (
                                    <Image
                                        src={authorImage}
                                        alt={author}
                                        width={60}
                                        height={60}
                                        className={styles.authorImage}
                                        unoptimized
                                    />
                                ) : (
                                    author?.charAt(0)
                                )}
                            </div>

                           
                        </div>

                        <div className={styles.metaInfo}>
                            <span>{publishDate}</span>

                            <span>•</span>

                            <span>{readingTime}</span>

                            {views >= 0 && (
                                <>
                                    <span>•</span>
                                    <span>{views} Views</span>
                                </>
                            )}

                            {language && (
                                <>
                                    <span>•</span>
                                    <span>{language.toUpperCase()}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {breadcrumbs.length > 0 && (
                <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                    <ol>
                        {breadcrumbs.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>
            )}
            {/* ================= MAIN ================= */}

            <div className={styles.wrapper}>
                {/* ========= SIDEBAR ========= */}

                <aside className={styles.sidebar}>
                    {tableOfContents.length > 0 && (
                        <div className={styles.toc}>
                            <h3>Contents</h3>

                            <ul>
                                {tableOfContents.map((item) => (
                                    <li key={item.id}>
                                        <a href={`#${item.id}`}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>

                {/* ========= CONTENT ========= */}

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
                                        src={section.image?.url}
                                        alt={
                                            section.image.alt ||
                                            section.heading
                                        }
                                        loading="eager"
                                        width={1200}
                                        height={700}
                                        unoptimized
                                        className={styles.sectionImage}
                                    />

                                    {section.image.caption && (
                                        <figcaption>
                                            {section.image.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            )}

                            {section.bulletPoints?.length > 0 && (
                                <ul className={styles.list}>
                                    {section.bulletPoints.map(
                                        (item, index) => (
                                            <li key={index}>{item}</li>
                                        )
                                    )}
                                </ul>
                            )}

                            {section.numberedPoints?.length > 0 && (
                                <ol className={styles.numberList}>
                                    {section.numberedPoints.map(
                                        (item, index) => (
                                            <li key={index}>{item}</li>
                                        )
                                    )}
                                </ol>
                            )}

                            {section.table && (
                                <div className={styles.tableCard}>
                                    {section.table.title && (
                                        <h3>{section.table.title}</h3>
                                    )}

                                    <div
                                        className={styles.tableWrapper}
                                    >
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    {section.table.headers.map(
                                                        (header) => (
                                                            <th key={header}>
                                                                {header}
                                                            </th>
                                                        )
                                                    )}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {section.table.rows.map(
                                                    (row, index) => (
                                                        <tr key={index}>
                                                            {row.map(
                                                                (cell, i) => (
                                                                    <td key={i}>
                                                                        {cell}
                                                                    </td>
                                                                )
                                                            )}
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {section.quote && (
                                <blockquote
                                    className={styles.quote}
                                >
                                    {section.quote}
                                </blockquote>
                            )}
                        </section>
                    ))}

                    {/* ================= FAQ ================= */}

                    {faqs.length > 0 && (
                        <section className={styles.faqSection}>
                            {/*  */}

                            <FAQComponent faqs={faqs} />
                        </section>
                    )}

                    {/* ================= CTA ================= */}

                    {callToAction && (
                        <section className={styles.cta}>
                            <div>
                                <h2>
                                    {callToAction.title}
                                </h2>

                                <p>
                                    {callToAction.description}
                                </p>
                            </div>

                            <Link
                                href={callToAction.buttonLink}
                                className={styles.ctaButton}
                            >
                                {callToAction.buttonText}
                            </Link>
                        </section>
                    )}

                    {relatedBlogs.length > 0 && (
                        <section className={styles.relatedBlogs}>
                            <h2>Related Articles</h2>

                            <div className={styles.relatedGrid}>
                                {relatedBlogs.map((blog) => (
                                    <Link
                                        key={blog.slug}
                                        href={`/blogs/${blog.slug}`}
                                        className={styles.relatedCard}
                                    >
                                        {blog.title}
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ================= TAGS ================= */}

                    {tags.length > 0 && (
                        <section className={styles.tagSection}>
                            <h3>Tags</h3>

                            <div className={styles.tags}>
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={styles.tag}
                                    >
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

