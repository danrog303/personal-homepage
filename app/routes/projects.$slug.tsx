import type { MetaFunction, LoaderFunctionArgs } from 'react-router'
import { projectPortfolioItems } from '../data/projectPortfolioData'
import { projectDetailsBySlug } from '../data/projects'
import ProjectPage from '../pages/ProjectPage'
import NotFoundPage from '../pages/NotFoundPage'

const META_DESCRIPTION_MAX_LENGTH = 155

function truncateDescription(text: string) {
    if (text.length <= META_DESCRIPTION_MAX_LENGTH) {
        return text
    }
    const cut = text.slice(0, META_DESCRIPTION_MAX_LENGTH - 1)
    const lastSpace = cut.lastIndexOf(' ')
    return `${cut.slice(0, lastSpace)}…`
}

export async function loader({ params }: LoaderFunctionArgs) {
    const project = projectPortfolioItems.find(p => p.slug === params.slug) ?? null
    if (!project?.slug) throw new Response("Not Found", { status: 404 })
    const details = projectDetailsBySlug[project.slug] ?? null
    return { project, details }
}

export const meta: MetaFunction<typeof loader> = ({ loaderData }) => {
    const project = loaderData?.project
    if (!project) {
        return [{ title: 'Project not found | Daniel Rogowski' }]
    }
    const firstIntroParagraph = loaderData?.details?.intro[0]
    const metaDescription = truncateDescription(firstIntroParagraph ?? project.description)
    const pageTitle = `${project.name} | Daniel Rogowski`
    return [
        { title: pageTitle },
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: metaDescription },
        { tagName: 'link', rel: 'canonical', href: `${import.meta.env.VITE_SITE_URL}/projects/${project.slug}/` },
    ]
}

export function ErrorBoundary() {
    return <NotFoundPage />
}

export default ProjectPage
