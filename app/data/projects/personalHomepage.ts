import heroImage from '../../assets/projects/personal-homepage/home-hero.webp';
import portfolioImage from '../../assets/projects/personal-homepage/home-portfolio.webp';
import projectPageImage from '../../assets/projects/personal-homepage/project-page.webp';
import mobileImage from '../../assets/projects/personal-homepage/home-mobile.webp';
import { ProjectDetails } from './types';

export const personalHomepageDetails: ProjectDetails = {
    intro: [
        "danielrogowski.net is my personal portfolio website: a single place that collects the projects I build after hours, my professional experience at Nokia, my education and the technologies I work with. It is designed to be fast, readable on every device and easy to keep up to date, so that a recruiter, a client or simply a curious visitor can find out in a minute what I do and how to reach me.",
        "The site is fully static. Every page is rendered to plain HTML at build time and served from Cloudflare's edge network, which means there is no server to maintain, pages load almost instantly and the whole thing costs practically nothing to host.",
    ],
    sections: [
        {
            heading: "What you can find on the site",
            paragraphs: [
                "The homepage is a single, scrollable document divided into sections. A navigation bar at the top lets you jump straight to the part you are interested in, while the LinkedIn and GitHub icons lead to my profiles on those platforms.",
            ],
            list: [
                { term: "Introduction", text: "a short summary of who I am and what I specialize in, with a \"Contact me\" button that scrolls directly to the contact details." },
                { term: "Portfolio of projects", text: "a grid of cards, one per project, each with a one-line summary and technology tags. Every card leads to a dedicated subpage, like the one you are reading now, with a detailed description, screenshots and links to the live product and the source code." },
                { term: "Work experience", text: "a timeline of the positions I have held at Nokia Solutions and Networks, from the summer internship through the working student role to my current software developer position, each with a description and the technologies used." },
                { term: "Education", text: "a similar timeline for my studies in Applied Computer Science at the Bydgoszcz University of Science and Technology, including the titles of my theses." },
                { term: "Technologies", text: "more than fifty tools, languages and frameworks I have worked with, grouped into categories such as web development, mobile applications, cloud, databases, IMS and test automation, each shown with its logo." },
                { term: "Contact", text: "my e-mail address, phone number and LinkedIn profile." },
            ],
            images: [
                { src: heroImage, alt: "Homepage of danielrogowski.net with the introduction section", caption: "The introduction section at the top of the homepage.", width: 1280, height: 800, variant: 'wide' },
                { src: portfolioImage, alt: "Grid of project cards in the portfolio section", caption: "The project portfolio: every card links to a detailed subpage.", width: 1280, height: 800, variant: 'wide' },
            ],
        },
        {
            heading: "Project subpages",
            paragraphs: [
                "Each project has its own address under /projects/, for example /projects/luzak. A subpage contains an introduction, a detailed description of the features grouped into sections, step-by-step usage instructions where it makes sense, screenshots of the running application and a short technical section that explains how the project is built. Buttons at the bottom lead to the live version, the store listing or the GitHub repository.",
                "Because every subpage is a separate, pre-rendered HTML document with its own title, description and canonical address, search engines can index each project individually and links to a specific project can be shared directly.",
            ],
            images: [
                { src: projectPageImage, alt: "Example of a project detail subpage", caption: "A project subpage with a table of contents, description and screenshots.", width: 1280, height: 800, variant: 'wide' },
            ],
        },
        {
            heading: "Designed for every screen",
            paragraphs: [
                "The layout adapts to the size of the screen. On a phone the introduction stacks vertically, the project grid collapses into a single column and the technology logos rearrange themselves so that nothing needs horizontal scrolling. The Inter variable font is bundled with the site instead of being loaded from a third-party font service, and all images are served in the compact WebP format.",
            ],
            images: [
                { src: mobileImage, alt: "Homepage displayed on a phone-sized screen", caption: "The same homepage on a phone.", width: 412, height: 915, variant: 'narrow' },
            ],
        },
        {
            heading: "Privacy and transparency",
            paragraphs: [
                "The site uses Google Analytics to understand how visitors use it. On the first visit a small, unobtrusive banner explains this and links to the privacy policy; once dismissed, the choice is remembered in the browser and the banner does not appear again. The privacy policy is a regular page of the site and describes in plain language which data is collected and why. Visitors who follow a broken link see a custom \"Page not found\" page with a way back to the homepage instead of a generic server error.",
            ],
        },
        {
            heading: "Under the hood",
            paragraphs: [
                "The site is written in TypeScript with React and React Router in framework mode. Server-side rendering is disabled and React Router's pre-rendering feature generates static HTML for the homepage, the privacy policy, the 404 page and every project subpage at build time. The list of project subpages is derived automatically from the portfolio data, so adding a project to a single data file is enough to get a new, indexable page. Styling is done with SCSS Modules, which keep the styles of each component isolated.",
                "Two small Node.js scripts run after every build: one walks through the generated pages and writes sitemap.xml, the other turns the pre-rendered 404 page into the 404.html file expected by Cloudflare Pages. A _headers file adds security headers (such as X-Frame-Options and a restrictive Permissions-Policy) and long-term immutable caching for hashed assets.",
                "A GitHub Actions workflow builds the project on every push and pull request. Pushes to the main branch are additionally deployed to Cloudflare Pages with Wrangler, after which the Cloudflare cache is purged so that visitors immediately see the new version. Dependencies are kept up to date automatically by Renovate, whose pull requests are merged once the build passes.",
            ],
        },
    ],
};
