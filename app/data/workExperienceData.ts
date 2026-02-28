import nokiaLogo from "../assets/companies/nokia.webp";
import { TimelineItem } from "../components/Timeline";

export interface WorkExperienceItem {
    company: string;
    logo: string;
    positions: TimelineItem[];
}

export const workExperienceItems: WorkExperienceItem[] = [
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
