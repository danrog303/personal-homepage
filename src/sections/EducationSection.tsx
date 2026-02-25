import React from "react";
import Timeline from "../components/Timeline";
import styles from "./EducationSection.module.scss";

const universityItems = [
    {
        name: "Bydgoszcz University of Science and Technology (PBS)",
        logo: require("../assets/education/pbs.webp"),
        degrees: [
            {
                mainHeading: "Master's degree",
                subHeading: "Field of study: Applied computer science",
                startDate: "01.03.2025",
                endDate: "now",
                description: "Thesis title: Performance analysis of network packet processing using the DPDK library compared to the standard Linux kernel network stack"
            },
            {
                mainHeading: "Bachelor's degree",
                subHeading: "Field of study: Applied computer science",
                startDate: "01.09.2021",
                endDate: "14.02.2025",
                description: "Thesis title: Design and implementation of a web application for e-books"
            }
        ]
    }
]

export default function EducationSection() {
    return <>
        <section id="education">
            <h2>Education</h2>

            {universityItems.map(universityItem =>
                <div className={styles.universityCard} key={universityItem.name}>
                    <div className={styles.universityName}>
                        <img src={universityItem.logo} alt={`Logo of ${universityItem.name}`}/>
                        <h3>Bydgoszcz University of Science and Technology (PBS)</h3>
                    </div>

                    <Timeline items={universityItem.degrees} />
                </div>
            )}
        </section>
    </>;
}