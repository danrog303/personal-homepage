import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { FaChrome, FaDownload, FaGithub, FaGooglePlay, FaLink, FaArrowLeft } from 'react-icons/fa';
import { projectPortfolioItems, ProjectLink } from '../data/projectPortfolioData';
import styles from './ProjectPage.module.scss';

function getLinkIcon(type: ProjectLink['type']) {
    switch (type) {
        case 'github': return <FaGithub />;
        case 'browser': return <FaLink />;
        case 'chrome': return <FaChrome />;
        case 'playstore': return <FaGooglePlay />;
        case 'download': return <FaDownload />;
    }
}

function getLinkClass(type: ProjectLink['type']) {
    switch (type) {
        case 'github': return styles.btnGithub;
        case 'browser': return styles.btnBrowser;
        case 'chrome': return styles.btnChrome;
        case 'playstore': return styles.btnPlayStore;
        case 'download': return styles.btnBrowser;
    }
}

export default function ProjectPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = projectPortfolioItems.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className={styles.page}>
                <nav className={styles.topBar}>
                    <Link to="/#private-projects" className={styles.backLink}>
                        <FaArrowLeft /> Back to portfolio
                    </Link>
                </nav>
                <div className={styles.content}>
                    <h1 className={styles.notFound}>Project not found</h1>
                    <p className={styles.notFoundDesc}>No project with slug "{slug}" exists.</p>
                    <Link to="/#private-projects" className={`${styles.btn} ${styles.btnBrowser}`}>
                        <FaArrowLeft /> <span>Go back to portfolio</span>
                    </Link>
                </div>
            </div>
        );
    }

    const metaDescription = (project.fullDescription || project.description).slice(0, 155);

    return (
        <div className={styles.page}>
            <Helmet>
                <title>{project.name} | Daniel Rogowski</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={`${process.env.REACT_APP_SITE_URL}/projects/${project.slug}/`} />
            </Helmet>
            <nav className={styles.topBar}>
                <Link to="/#private-projects" className={styles.backLink}>
                    <FaArrowLeft /> Back to portfolio
                </Link>
            </nav>
            <main className={styles.content}>
                <h1 className={styles.projectTitle}>{project.name}</h1>
                <p className={styles.tagline}>{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                    <div className={styles.tags}>
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                )}

                {project.fullDescription && (
                    <p className={styles.fullDescription}>{project.fullDescription}</p>
                )}

                {project.features && project.features.length > 0 && (
                    <div className={styles.features}>
                        <h2>Features</h2>
                        <ul>
                            {project.features.map((f, idx) => (
                                <li key={idx}>{f}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <h2 className={styles.linksHeading}>Check the project out</h2>
                <div className={styles.links}>
                    {project.links.map(link => (
                        <a
                            key={link.text}
                            href={link.url}
                            className={`${styles.btn} ${getLinkClass(link.type)}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {getLinkIcon(link.type)}
                            <span>{link.text}</span>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}
