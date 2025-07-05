import {FaGithub, FaLinkedin} from "react-icons/fa";
import React from "react";
import styles from "./MainNavbar.module.scss";

export default function MainNavbar() {
    const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL || "#";
    const githubUrl = process.env.REACT_APP_GITHUB_URL || "#";

    return <>
        <div className={styles.topBar}>
            <div className={styles.topBarBrand}>
                <h1>Daniel Rogowski - Portfolio</h1>
            </div>

            <nav className={styles.topBarNav}>
                <ul>
                    <a href="#private-projects">
                        <li>Project portfolio</li>
                    </a>
                    <a href="#work-experience">
                        <li>Work experience</li>
                    </a>
                    <a href="#education">
                        <li>Education</li>
                    </a>
                    <a href="#technologies">
                        <li>Technologies</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>

            <nav className={styles.topBarSocial}>
            <ul>
                    <a href={linkedInUrl} target="_blank" rel="noreferrer">
                        <li>
                            <FaLinkedin size={32}/>
                        </li>
                    </a>
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                        <li>
                            <FaGithub size={32}/>
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    </>;
}