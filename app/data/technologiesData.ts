const technologyImages = import.meta.glob('../assets/technologies/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
const img = (name: string) => technologyImages[`../assets/technologies/${name}.webp`];

export interface TechnologyItem {
    name: string;
    image: string;
}

export interface TechnologyCategory {
    category: string;
    items: TechnologyItem[];
}

export const technologyItems: TechnologyCategory[] = [
    {
        category: "Web development",
        items: [
            { name: "HTML", image: img("html") },
            { name: "CSS", image: img("css") },
            { name: "SCSS", image: img("scss") },
            { name: "JavaScript", image: img("javascript") },
            { name: "TypeScript", image: img("typescript") },
            { name: "Plasmo", image: img("plasmo") },
            { name: "Browser extensions", image: img("chrome") },
            { name: "React", image: img("react") },
            { name: "Angular", image: img("angular") }
        ]
    },
    {
        category: "Mobile applications",
        items: [
            { name: "React Native", image: img("react-antive") },
            { name: "Expo", image: img("expo") },
            { name: "Android development", image: img("android") }
        ]
    },
    {
        category: "Google Marketing",
        items: [
            { name: "Google Analytics", image: img("google") },
            { name: "Google Search Console", image: img("google") },
            { name: "Google AdSense", image: img("google") },
            { name: "Google AdMob", image: img("google") }
        ]
    },
    {
        category: "Languages",
        items: [
            { name: "Java", image: img("java") },
            { name: "Kotlin", image: img("kotlin") },
            { name: "Python", image: img("python") },
            { name: "Go", image: img("golang") },
            { name: "C", image: img("clang") },
            { name: "C++", image: img("c++") }
        ]
    },
    {
        category: "Backend libraries and frameworks",
        items: [
            { name: "Gin", image: img("go-gin") },
            { name: "Flask", image: img("flask") },
            { name: "Spring Boot", image: img("spring-boot") }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "SQL", image: img("sql") },
            { name: "MongoDB", image: img("mongodb") },
            { name: "DynamoDB", image: img("dynamodb") }
        ]
    },
    {
        category: "IMS (IP Multimedia Subsystem)",
        items: [
            { name: "DPDK", image: img("dpdk") },
            { name: "VoIP technologies", image: img("networking") },
            { name: "SBC", image: img("networking") },
            { name: "Low-level networking", image: img("networking") },
            { name: "Linux networking", image: img("linux") },
            { name: "Network monitoring", image: img("networking") }
        ]
    },
    {
        category: "Tools and systems",
        items: [
            { name: "Git", image: img("git") },
            { name: "Linux", image: img("linux") },
            { name: "Bash", image: img("bash") },
            { name: "Ansible", image: img("ansible") },
            { name: "Docker", image: img("docker") },
            { name: "Podman", image: img("podman") },
            { name: "Grafana", image: img("grafana") },
            { name: "Jenkins", image: img("jenkins") },
            { name: "GitHub", image: img("github") },
            { name: "Gerrit", image: img("gerrit") }
        ]
    },
    {
        category: "Cloud",
        items: [
            { name: "Kubernetes", image: img("helm") },
            { name: "Helm", image: img("helm") },
            { name: "AWS Cloud", image: img("aws") },
            { name: "Openshift", image: img("openshift") },
            { name: "Openstack", image: img("openstack") },
            { name: "Cloudflare", image: img("cloudflare") },
            { name: "Terraform", image: img("terraform") }
        ]
    },
    {
        category: "Test automation",
        items: [
            { name: "Selenium", image: img("selenium") },
            { name: "Robot Framework", image: img("robot-framework") }
        ]
    }
];
