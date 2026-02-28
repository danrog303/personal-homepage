import type { MetaFunction, LoaderFunctionArgs } from 'react-router-dom'
import { projectPortfolioItems } from '../data/projectPortfolioData'
import ProjectPage from '../pages/ProjectPage'
import NotFoundPage from '../pages/NotFoundPage'

export async function loader({ params }: LoaderFunctionArgs) {
    const project = projectPortfolioItems.find(p => p.slug === params.slug) ?? null
    if (!project) throw new Response("Not Found", { status: 404 })
    return { project }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const project = data?.project
    if (!project) {
        return [{ title: 'Project not found | Daniel Rogowski' }]
    }
    const metaDescription = (project.fullDescription || project.description).slice(0, 155)
    return [
        { title: `${project.name} | Daniel Rogowski` },
        { name: 'description', content: metaDescription },
        { tagName: 'link', rel: 'canonical', href: `${import.meta.env.VITE_SITE_URL}/projects/${project.slug}/` },
    ]
}

export function ErrorBoundary() {
    return <NotFoundPage />
}

export default ProjectPage
