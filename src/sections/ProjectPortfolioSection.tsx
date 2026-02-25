import { FaChrome, FaDownload, FaGithub, FaGooglePlay, FaLink } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectPortfolioSection.module.scss";
import { projectPortfolioItems, ProjectLink } from "../data/projectPortfolioData";

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

export default function ProjectPortfolioSection() {
    return <>
        <section id="privateProjects">
            <h2>Portfolio of projects</h2>

            <div className={styles.privateProjectsContainer}>
                {projectPortfolioItems.map(portfolioItem => <div className={styles.privateProject} key={portfolioItem.name.toString()}>
                    <h3>{portfolioItem.name}</h3>
                    <p>{portfolioItem.description}</p>
                    {portfolioItem.tags && portfolioItem.tags.length > 0 && <div className={styles.tags}>
                        {portfolioItem.tags.map((tag, idx) => <span key={idx} className={styles.tag}>{tag}</span>)}
                    </div>}
                    {portfolioItem.slug ? (
                        <Link
                            to={`/projects/${portfolioItem.slug}`}
                            className={`${styles.btn} ${styles.btnLearnMore}`}
                        >
                            <span>Learn more →</span>
                        </Link>
                    ) : portfolioItem.links.map(link =>
                        <a href={link.url}
                           className={`${styles.btn} ${getLinkClass(link.type)}`}
                           key={link.text}
                           target="_blank"
                           rel="noreferrer" >
                            {getLinkIcon(link.type)}
                            <span>{link.text}</span>
                        </a>
                    )}
                </div>)}
            </div>
        </section>
    </>;
}
