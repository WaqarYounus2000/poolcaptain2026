"use client";

import styles from "../styles/BlogGrid.module.css";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectGrid({ projects = [] }) {
    if (!projects.length) {
        return (
            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <div className={styles.headingArea}>
                        <span className={styles.badge}>Pool Captain Portfolio</span>

                        <h1 className={styles.title}>
                            Latest Swimming Pool Construction & Maintenance Projects
                        </h1>

                        <p className={styles.description}>
                            Our latest completed swimming pool construction, renovation,
                            maintenance, jacuzzi, sauna, and cold plunge projects will be
                            showcased here soon.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.blogSection}>
            <div className={styles.bgGlowOne}></div>
            <div className={styles.bgGlowTwo}></div>

            <div className={styles.container}>
                <div className={styles.headingArea}>
                    <span className={styles.badge}>Pool Captain Portfolio</span>

                    <h1 className={styles.title}>
                        Latest Swimming Pool Projects Across Karachi
                    </h1>

                    <p className={styles.description}>
                        Explore our recently completed swimming pool construction,
                        renovation, maintenance, jacuzzi, sauna, and cold plunge
                        installation projects. View high-quality project galleries,
                        professional workmanship, premium equipment, and real project
                        results completed by the Pool Captain team across Karachi.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}