import React from 'react';
import styles from './TechnologiesSection.module.scss';

const technologyItems = [
    {
        category: "Web development",
        items: [
            { name: "HTML", image: require("../assets/technologies/html.webp") },
            { name: "CSS", image: require("../assets/technologies/css.webp") },
            { name: "SCSS", image: require("../assets/technologies/scss.webp") },
            { name: "JavaScript", image: require("../assets/technologies/javascript.webp") },
            { name: "TypeScript", image: require("../assets/technologies/typescript.webp") },
            { name: "Plasmo", image: require("../assets/technologies/plasmo.webp") },
            { name: "Browser extensions", image: require("../assets/technologies/chrome.webp") },
            { name: "React", image: require("../assets/technologies/react.webp") },
            { name: "Angular", image: require("../assets/technologies/angular.webp") }
        ]
    },
    {
        category: "Mobile applications",
        items: [
            { name: "React Native", image: require("../assets/technologies/react-antive.webp") },
            { name: "Expo", image: require("../assets/technologies/expo.webp") },
            { name: "Android development", image: require("../assets/technologies/android.webp") }
        ]
    },
    {
        category: "Google Marketing",
        items: [
            { name: "Google Analytics", image: require("../assets/technologies/google.webp") },
            { name: "Google Search Console", image: require("../assets/technologies/google.webp") },
            { name: "Google AdSense", image: require("../assets/technologies/google.webp") },
            { name: "Google AdMob", image: require("../assets/technologies/google.webp") }
        ]
    },
    {
        category: "Languages",
        items: [
            { name: "Java", image: require("../assets/technologies/java.webp") },
            { name: "Kotlin", image: require("../assets/technologies/kotlin.webp") },
            { name: "Python", image: require("../assets/technologies/python.webp") },
            { name: "Go", image: require("../assets/technologies/golang.webp") },
            { name: "C", image: require("../assets/technologies/clang.webp") },
            { name: "C++", image: require("../assets/technologies/c++.webp") }
        ]
    },
    {
        category: "Backend libraries and frameworks",
        items: [
            { name: "Gin", image: require("../assets/technologies/go-gin.webp") },
            { name: "Flask", image: require("../assets/technologies/flask.webp") },
            { name: "Spring Boot", image: require("../assets/technologies/spring-boot.webp") }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "SQL", image: require("../assets/technologies/sql.webp") },
            { name: "MongoDB", image: require("../assets/technologies/mongodb.webp") },
            { name: "DynamoDB", image: require("../assets/technologies/dynamodb.webp") }
        ]
    },
    {
        category: "IMS (IP Multimedia Subsystem)",
        items: [
            { name: "DPDK", image: require("../assets/technologies/dpdk.webp") },
            { name: "VoIP technologies", image: require("../assets/technologies/networking.webp") },
            { name: "SBC", image: require("../assets/technologies/networking.webp") },
            { name: "Low-level networking", image: require("../assets/technologies/networking.webp") },
            { name: "Linux networking", image: require("../assets/technologies/linux.webp") },
            { name: "Network monitoring", image: require("../assets/technologies/networking.webp") }
        ]
    },
    {
        category: "Tools and systems",
        items: [
            { name: "Git", image: require("../assets/technologies/git.webp") },
            { name: "Linux", image: require("../assets/technologies/linux.webp") },
            { name: "Bash", image: require("../assets/technologies/bash.webp") },
            { name: "Ansible", image: require("../assets/technologies/ansible.webp") },
            { name: "Docker", image: require("../assets/technologies/docker.webp") },
            { name: "Podman", image: require("../assets/technologies/podman.webp") },
            { name: "Grafana", image: require("../assets/technologies/grafana.webp") },
            { name: "Jenkins", image: require("../assets/technologies/jenkins.webp") },
            { name: "GitHub", image: require("../assets/technologies/github.webp") },
            { name: "Gerrit", image: require("../assets/technologies/gerrit.webp") }
        ]
    },
    {
        category: "Cloud",
        items: [
            {name: "Kubernetes", image: require("../assets/technologies/helm.webp")},
            {name: "Helm", image: require("../assets/technologies/helm.webp")},
            {name: "AWS Cloud", image: require("../assets/technologies/aws.webp")},
            {name: "Openshift", image: require("../assets/technologies/openshift.webp")},
            {name: "Openstack", image: require("../assets/technologies/openstack.webp")},
            {name: "Cloudflare", image: require("../assets/technologies/cloudflare.webp")},
            {name: "Terraform", image: require("../assets/technologies/terraform.webp")}
        ]
    },
    {
        category: "Test automation",
        items: [
            { name: "Selenium", image: require("../assets/technologies/selenium.webp") },
            { name: "Robot Framework", image: require("../assets/technologies/robot-framework.webp") }
        ]
    }
]

export default function TechnologiesSection() {
    return <>
        <section id="technologies">
            <h2>Technologies</h2>
            <div className={styles.technologyCard}>
                {technologyItems.map(technologyCategoryItem => <div className={styles.techology} key={technologyCategoryItem.category.toString()}>
                    <div className={styles.technologyName}>{technologyCategoryItem.category}</div>
                    <div className={styles.technologyItems}>
                        {technologyCategoryItem.items.map(technologyItem => (
                            <div className={styles.technologyItem} key={technologyItem.name}>
                                <img src={technologyItem.image} alt={`${technologyItem.name} logo`}/>
                                {technologyItem.name}
                            </div>
                        ))}
                    </div>
                </div>)}
            </div>
        </section>
    </>
;
}