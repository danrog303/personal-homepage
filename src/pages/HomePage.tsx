import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import '../App.css';
import {CookieConsent} from "react-cookie-consent";
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
        <Helmet>
            <title>Daniel Rogowski | Cloud &amp; Backend Developer</title>
            <meta name="description" content="Portfolio of Daniel Rogowski — Cloud &amp; Backend Developer specialising in Java, Spring Boot, AWS, TypeScript, and React. View projects, work experience, and contact info." />
            <link rel="canonical" href={`${process.env.REACT_APP_SITE_URL}/`} />
        </Helmet>
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

        <CookieConsent
            location="bottom"
            buttonText="OK, close this message"
            style={{background: "black"}}
            buttonStyle={{color: "white", fontWeight: "bold", backgroundColor: "rebeccapurple", fontSize: "13px", borderRadius: "4px"}}>
            🍪 Want some cookies? {" "}
            <span style={{fontSize: "90%"}}>This website uses cookies to enhance the user experience.</span>
        </CookieConsent>
    </div>;
}
