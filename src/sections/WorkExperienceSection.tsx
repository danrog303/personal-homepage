import React from "react";
import Timeline from "../components/Timeline";
import styles from "./WorkExperienceSection.module.scss";
import nokiaLogo from "../assets/companies/nokia.webp";

const workExperienceItems = [
    {
        company: "Nokia Solutions and Networks",
        logo: nokiaLogo,
        positions: [
            {
                mainHeading: "Junior Software Developer",
                subHeading: "",
                startDate: "01.07.2024",
                endDate: "now",
                description: "Work on a Nokia Session Border Controller (SBC) product.",
                tags: ["golang", "voip", "kubernetes", "c language", "linux", "python"]
            },
            {
                mainHeading: "Working Student: Software Developer",
                subHeading: "",
                startDate: "01.10.2023",
                endDate: "30.06.2024",
                description: "Part-time job on a Nokia Session Border Controller (SBC) product.",
                tags: ["voip", "kubernetes", "c language", "linux", "python"]
            },
            {
                mainHeading: "Summer Trainee: Software Developer Internship",
                subHeading: "",
                startDate: "01.07.2023",
                endDate: "30.09.2023",
                description: "Work on a Nokia Session Border Controller (SBC) product.",
                tags: ["kubernetes", "grafana", "python", "voip monitoring", "linux"]
            }
        ]
    }
];

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