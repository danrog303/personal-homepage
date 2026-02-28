import React from "react";
import Timeline from "../components/Timeline";
import styles from "./WorkExperienceSection.module.scss";
import { workExperienceItems } from "../data/workExperienceData";

export default function WorkExperienceSection() {
    return <>
        <section id="work-experience">
            <h2>My work experience</h2>

            {workExperienceItems.map(workExperienceItem => (
                <div className={styles.workExperienceCard} key={workExperienceItem.company}>
                    <div className={styles.companyName}>
                        <img src={workExperienceItem.logo} alt={`Logo of ${workExperienceItem.company}`} />
                        <h3>{workExperienceItem.company}</h3>
                    </div>

                    <Timeline items={workExperienceItem.positions} />
                </div>
            ))}
        </section>
    </>;
}