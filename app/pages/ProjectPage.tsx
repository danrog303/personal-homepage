import React from 'react';
import { useLoaderData, Link } from 'react-router';
import { FaChrome, FaDownload, FaGithub, FaGooglePlay, FaLink, FaArrowLeft } from 'react-icons/fa';
import { ProjectPortfolioItem, ProjectLink } from '../data/projectPortfolioData';
import { ProjectDetails, ProjectImage, ProjectListItem, ProjectSection } from '../data/projects/types';
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

function toAnchorId(heading: string) {
    return heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

function ListItemContent({ item }: { item: ProjectListItem }) {
    if (typeof item === 'string') {
        return <>{item}</>;
    }
    return <><strong>{item.term}</strong> - {item.text}</>;
}

function SectionList({ section }: { section: ProjectSection }) {
    if (!section.list || section.list.length === 0) {
        return null;
    }
    const items = section.list.map((item, idx) => (
        <li key={idx}><ListItemContent item={item} /></li>
    ));
    return section.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
}

function SectionImages({ images }: { images?: ProjectImage[] }) {
    if (!images || images.length === 0) {
        return null;
    }
    const wideImages = images.filter(image => image.variant !== 'narrow');
    const narrowImages = images.filter(image => image.variant === 'narrow');

    const renderFigure = (image: ProjectImage) => (
        <figure key={image.src} className={styles.figure} style={{ maxWidth: image.width }}>
            <a href={image.src} target="_blank" rel="noreferrer">
                <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                />
            </a>
            {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
    );

    return <>
        {wideImages.length > 0 && <div className={styles.wideImages}>{wideImages.map(renderFigure)}</div>}
        {narrowImages.length > 0 && <div className={styles.narrowImages}>{narrowImages.map(renderFigure)}</div>}
    </>;
}

function SectionContent({ section, level }: { section: ProjectSection; level: 2 | 3 }) {
    const Heading = level === 2 ? 'h2' : 'h3';
    const sectionClass = level === 2 ? styles.section : styles.subsection;
    return (
        <section className={sectionClass} id={level === 2 ? toAnchorId(section.heading) : undefined}>
            <Heading>{section.heading}</Heading>
            {section.paragraphs?.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
            <SectionList section={section} />
            {section.subsections?.map(subsection => (
                <SectionContent key={subsection.heading} section={subsection} level={3} />
            ))}
            <SectionImages images={section.images} />
        </section>
    );
}

function TableOfContents({ sections }: { sections: ProjectSection[] }) {
    if (sections.length < 3) {
        return null;
    }
    return (
        <nav className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>On this page</p>
            <ol>
                {sections.map(section => (
                    <li key={section.heading}>
                        <a href={`#${toAnchorId(section.heading)}`}>{section.heading}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

function BackLink() {
    return (
        <nav className={styles.topBar}>
            <Link to="/#private-projects" className={styles.backLink}>
                <FaArrowLeft /> Back to portfolio
            </Link>
        </nav>
    );
}

type LoaderData = { project: ProjectPortfolioItem | null; details: ProjectDetails | null }

export default function ProjectPage() {
    const { project, details } = useLoaderData() as LoaderData;

    if (!project) {
        return (
            <div className={styles.page}>
                <BackLink />
                <div className={styles.content}>
                    <h1 className={styles.notFound}>Project not found</h1>
                    <Link to="/#private-projects" className={`${styles.btn} ${styles.btnBrowser}`}>
                        <FaArrowLeft /> <span>Go back to portfolio</span>
                    </Link>
                </div>
            </div>
        );
    }

    const sections = details?.sections ?? [];

    return (
        <div className={styles.page}>
            <BackLink />
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

                {details?.intro.map((paragraph, idx) => (
                    <p key={idx} className={styles.intro}>{paragraph}</p>
                ))}

                <TableOfContents sections={sections} />

                {sections.map(section => (
                    <SectionContent key={section.heading} section={section} level={2} />
                ))}
            </main>
        </div>
    );
}
