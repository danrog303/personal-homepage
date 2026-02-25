import {FaGithub, FaLinkedin} from "react-icons/fa";
import React from "react";
import styles from "./MainNavbar.module.scss";

export default function MainNavbar() {
    const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL || "#";
    const githubUrl = process.env.REACT_APP_GITHUB_URL || "#";

    return <>
        <div className={styles.topBar}>
            <div className={styles.topBarBrand}>
                <span>Daniel Rogowski - Portfolio</span>
            </div>

            <nav className={styles.topBarNav}>
                <ul>
                    <li><a href="#private-projects">Project portfolio</a></li>
                    <li><a href="#work-experience">Work </a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#technologies">Technologies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <nav className={styles.topBarSocial}>
                <ul>
                    <li>
                        <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn link">
                            <FaLinkedin size={32}/>
                        </a>
                    </li>
                    <li>
                        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Github link">
                            <FaGithub size={32}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </>;
}