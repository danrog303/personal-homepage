import React from "react";
import Timeline from "../components/Timeline";
import styles from "./EducationSection.module.scss";
import { universityItems } from "../data/educationData";

export default function EducationSection() {
    return <>
        <section id="education">
            <h2>Education</h2>

            {universityItems.map(universityItem =>
                <div className={styles.universityCard} key={universityItem.name}>
                    <div className={styles.universityName}>
                        <img src={universityItem.logo} alt={`Logo of ${universityItem.name}`} width="99" height="99" />
                        <h3>Bydgoszcz University of Science and Technology (PBS)</h3>
                    </div>

                    <Timeline items={universityItem.degrees} />
                </div>
            )}
        </section>
    </>;
}