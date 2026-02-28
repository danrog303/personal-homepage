import React from 'react';
import '../App.css';
import MainFooter from "../components/MainFooter";
import ContactSection from "../sections/ContactSection";
import ProjectPortfolioSection from "../sections/ProjectPortfolioSection";
import MainNavbar from "../components/MainNavbar";
import MainHeader from "../components/MainHeader";
import TechnologiesSection from "../sections/TechnologiesSection";
import EducationSection from "../sections/EducationSection";
import WorkExperienceSection from "../sections/WorkExperienceSection";

export default function HomePage() {
    return <div id="home">
        <div className="heroWrapper">
            <MainNavbar />
            <MainHeader />
        </div>

        <main>
            <ProjectPortfolioSection />
            <WorkExperienceSection />
            <EducationSection />
            <TechnologiesSection />
            <ContactSection />
        </main>

        <MainFooter />
    </div>;
}
