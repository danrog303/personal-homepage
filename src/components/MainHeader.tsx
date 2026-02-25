import programmingImage from "../assets/programming.webp";
import {FaEnvelope} from "react-icons/fa";
import React from "react";
import styles from "./MainHeader.module.scss";

export default function MainHeader() {
    return <>
        <header className={styles.header}>
            <div className={styles.headerImageWrapper}>
                <img src={programmingImage} alt={"Programming illustration"} fetchPriority="high" />
            </div>

            <div className={styles.headerContent}>
                <span className={styles.headerRole}>Software Engineer</span>
                <h1>Daniel Rogowski</h1>

                <div className={styles.headerParagraphs}>
                    <p>
                        <strong>Software engineer</strong> from Poland,
                        specialized in <strong>web development</strong> and <strong> cloud computing</strong>.
                        Passionate programmer who learns programming since the age of 15.
                        Currently working at <strong>Nokia</strong> as a <strong>software developer</strong>.
                    </p>
                </div>

                <a href="#contact" className={styles.headerContactLink}>
                    <FaEnvelope size={16}/>
                    <span>Contact me</span>
                </a>
            </div>
        </header>
    </>;
}
