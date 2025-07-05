import {FaChrome, FaDownload, FaGithub, FaGooglePlay, FaLink} from "react-icons/fa";
import React from "react";
import styles from "./ProjectPortfolioSection.module.scss";

const projectPortfolioItems = [
    {
        name: "This homepage",
        description: "The page you are currently looking at!",
        tags: ["react", "cloudflare", "typescript", "scss"],
        links: [
            {
                class: styles.btnBrowser,
                url: "https://danielrogowski.net/",
                icon: <FaLink/>,
                text: "View live"
            },
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/personal-homepage",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "TestPortal GPT",
        description: "AI-powered browser plugin for automatic test solving.",
        tags: ["plasmo", "react", "browser extension", "openai"],
        links: [
            {
                class: styles.btnChrome,
                url: "https://chromewebstore.google.com/detail/testportal-gpt/cfebdnpaooilklaiemggkhnbakafohel",
                icon: <FaChrome/>,
                text: "Download"
            },
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/testportal-gpt",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Deru Party Games",
        description: "Android game for playing party games with friends.",
        tags: ["react native", "expo", "android", "admob"],
        links: [
            {
                class: styles.btnPlayStore,
                url: "https://play.google.com",
                icon: <FaGooglePlay/>,
                text: "Available soon...",
            },
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/party-games",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Ebook Wizard",
        description: "My engineering thesis! Network drive for e-book creation onf management.",
        tags: ["java", "spring boot", "aws", "mongodb", "angular"],
        links: [
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/ebook-wizard",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Shelfspace",
        description: "Website for tracking games and movies on your shelves.",
        tags: ["aws", "dynamodb", "java", "spring boot"],
        links: [
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/shelfspace-api",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Poketch",
        description: "Pokemon game tracking application.",
        tags: ["spring boot", "java", "mysql", "docker"],
        links: [
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/poketch",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Epubify",
        description: "Java library for creating e-book files, used in Ebook Wizard.",
        tags: ["java", "epub", "ebook"],
        links: [
            {
                class: styles.btnBrowser,
                url: "https://github.com/danrog303/epubify/packages/2203789",
                icon: <FaDownload/>,
                text: "Download"
            },
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/epubify",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Mayan Calculator",
        description: "Calculator for converting between arabic and mayan numerical system.",
        tags: ["html", "css", "javascript"],
        links: [
            {
                class: styles.btnBrowser,
                url: "https://danrog303.github.io/mayan-calculator",
                icon: <FaLink/>,
                text: "View live"
            },
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303/mayan-calculator",
                icon: <FaGithub/>,
                text: "GitHub repo"
            }
        ]
    },
    {
        name: "Other projects",
        description: "Check out my other projects on my GitHub profile.",
        links: [
            {
                class: styles.btnGithub,
                url: "https://github.com/danrog303",
                icon: <FaGithub/>,
                text: "GitHub profile"
            }
        ]
    }
];

export default function ProjectPortfolioSection() {
    return <>
        <section id="privateProjects">
            <h2>Portfolio of projects</h2>

            <div className={`${styles.privateProjectCard} ${styles.privateProjectsContainer}`}>
                {projectPortfolioItems.map(portfolioItem => <div className={styles.privateProject} key={portfolioItem.name.toString()}>
                    <h3>{portfolioItem.name}</h3>
                    <p>{portfolioItem.description}</p>
                    {portfolioItem.tags && portfolioItem.tags.length > 0 && <div className={styles.tags}>
                        {portfolioItem.tags.map((tag, idx) => <span key={idx} className={styles.tag}>{tag}</span>)}
                    </div>}
                    {portfolioItem.links.map(link =>
                        <a href={link.url}
                           className={`${styles.btn} ${link.class}`}
                           key={link.text}
                           target="_blank"
                           rel="noreferrer" >
                            {link.icon}
                            <span>{link.text}</span>
                        </a>
                    )}
                </div>)}
            </div>
        </section>
    </>;
}