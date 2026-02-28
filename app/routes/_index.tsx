import type { MetaFunction } from 'react-router-dom'
import HomePage from '../pages/HomePage'

export const meta: MetaFunction = () => [
    { title: 'Daniel Rogowski | Cloud & Backend Developer' },
    { name: 'description', content: 'Portfolio of Daniel Rogowski — Cloud & Backend Developer specialising in Java, Spring Boot, AWS, TypeScript, and React. View projects, work experience, and contact info.' },
    { property: 'og:title', content: 'Cloud & Backend Developer | Daniel Rogowski | Portfolio' },
    { property: 'og:description', content: 'Personal portfolio of Daniel Rogowski — software engineer from Poland specialized in web development, cloud computing, and backend technologies.' },
    { tagName: 'link', rel: 'canonical', href: `${import.meta.env.VITE_SITE_URL}/` },
]

export default HomePage
