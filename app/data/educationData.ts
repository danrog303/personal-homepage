import pbsLogo from "../assets/education/pbs.webp";
import { TimelineItem } from "../components/Timeline";

export interface UniversityItem {
    name: string;
    logo: string;
    degrees: TimelineItem[];
}

export const universityItems: UniversityItem[] = [
    {
        name: "Bydgoszcz University of Science and Technology (PBS)",
        logo: pbsLogo,
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
];
