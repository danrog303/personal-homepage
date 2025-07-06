import programmingImage from "../assets/programming.webp";
import {FaEnvelope} from "react-icons/fa";
import React from "react";
import styles from "./MainHeader.module.scss";

export default function MainHeader() {
    return <>
        <header className={styles.header}>
            <div>
                <img src={programmingImage} alt={"Programming illustration"} fetchPriority="high" />
            </div>

            <div>
                <h1>Daniel Rogowski</h1>

                <div className={styles.headerParagraphs}>
                    <p>
                        <strong>Software engineer</strong> from Poland,
                        specialized in <strong>web development</strong> and <strong> cloud computing</strong>.
                    </p>

                    <p>
                        Passionate programmer who learns programming since the age of 15.
                    </p>

                    <p>
                        Currently working at <strong>Nokia</strong> as a <strong>software developer</strong>.
                    </p>
                </div>

                <a href="#contact">
                    <div className={styles.headerContactLink}>
                        <FaEnvelope size={16}/>
                        <span>Feel free to contact me here!</span>
                    </div>
                </a>
            </div>
        </header>
    </>;
}